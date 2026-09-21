'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/store/api/apiSlice';
import { loginSuccess } from '@/store/slices/authSlice';
import { HeartPulse, RefreshCw } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  
  // Captcha State
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaError, setCaptchaError] = useState('');
  const [validationError, setValidationError] = useState('');

  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaAnswer('');
    setCaptchaError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    setCaptchaError('');

    // Validations
    if (!username || username.length < 3) {
      setValidationError('Username must be at least 3 characters long.');
      return;
    }
    if (!password || password.length < 6) {
      setValidationError('Password must be at least 6 characters long.');
      return;
    }

    // Captcha Validation
    const expectedAnswer = num1 + num2;
    if (parseInt(captchaAnswer) !== expectedAnswer) {
      setCaptchaError('Incorrect Captcha answer. Please try again.');
      generateCaptcha();
      return;
    }

    try {
      const data = await login({ username, password }).unwrap();
      dispatch(loginSuccess({ token: data.token, user: data.user }));
      router.push('/admin');
    } catch (err) {
      console.error('Failed to log in', err);
      generateCaptcha(); // Regenerate on failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-base-100 p-8 rounded-3xl shadow-xl">
        <div className="text-center">
          <HeartPulse className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold text-base-content">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-sm text-base-content/70">
            Sign in to manage the hospital website
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-error text-sm rounded-xl">
              Invalid username or password
            </div>
          )}
          {validationError && (
            <div className="alert alert-warning text-sm rounded-xl">
              {validationError}
            </div>
          )}
          
          <div className="rounded-md shadow-sm space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Username</span></label>
              <input
                name="username"
                type="text"
                required
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Password</span></label>
              <input
                name="password"
                type="password"
                required
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Captcha Section */}
            <div className="form-control mt-4 p-4 border border-base-200 rounded-xl bg-base-50">
              <label className="label pt-0"><span className="label-text font-medium">Security Check (Captcha)</span></label>
              <div className="flex items-center gap-4">
                <div className="bg-base-200 px-4 py-2 rounded-lg font-bold text-lg tracking-wider flex items-center gap-2 select-none border border-base-300">
                  {num1} + {num2} = ?
                </div>
                <button type="button" onClick={generateCaptcha} className="btn btn-ghost btn-circle btn-sm" title="Reload Captcha">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              <input
                type="number"
                required
                className={`input input-bordered w-full mt-3 ${captchaError ? 'input-error' : 'focus:input-primary'}`}
                placeholder="Enter the sum"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
              />
              {captchaError && <span className="text-error text-xs mt-2">{captchaError}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full shadow-lg"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : 'Secure Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
