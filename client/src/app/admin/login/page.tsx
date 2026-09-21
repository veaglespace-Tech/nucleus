'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/store/api/apiSlice';
import { loginSuccess } from '@/store/slices/authSlice';
import { HeartPulse, RefreshCw, Lock, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
    <div className="min-h-[calc(100vh-80px)] bg-base-200/50 pt-20 pb-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10 pointer-events-none"></div>

      <div className="max-w-6xl w-full bg-base-100 rounded-[3rem] shadow-2xl shadow-primary/5 flex overflow-hidden border border-base-300/50 relative z-10">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-5/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-xl mb-4">
              <HeartPulse className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-black text-base-content tracking-tight mb-1">
              Welcome Back
            </h2>
            <p className="text-base-content/60 font-medium">
              Sign in to manage the hospital ecosystem.
            </p>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-error bg-error/10 text-error border-error/20 rounded-2xl p-4 text-sm font-medium">
                Invalid credentials. Please try again.
              </div>
            )}
            {validationError && (
              <div className="alert alert-warning bg-warning/10 text-warning-content border-warning/20 rounded-2xl p-4 text-sm font-medium">
                {validationError}
              </div>
            )}
            
            <div className="space-y-3">
              <div className="form-control relative group">
                <label className="label pb-1"><span className="label-text font-bold text-base-content/80 text-xs uppercase tracking-wider">Email or Username</span></label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                  <input
                    name="username"
                    type="text"
                    required
                    className="input input-bordered w-full pl-12 bg-base-200/50 focus:bg-base-100 focus:border-primary focus:ring-4 ring-primary/10 transition-all rounded-xl h-12"
                    placeholder="admin@nucleus.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control relative group">
                <label className="label pb-1"><span className="label-text font-bold text-base-content/80 text-xs uppercase tracking-wider">Password</span></label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                  <input
                    name="password"
                    type="password"
                    required
                    className="input input-bordered w-full pl-12 bg-base-200/50 focus:bg-base-100 focus:border-primary focus:ring-4 ring-primary/10 transition-all rounded-xl h-12"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Captcha Section */}
              <div className="form-control mt-4 p-4 border border-base-200 rounded-xl bg-gradient-to-br from-base-200/50 to-base-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                <label className="label pt-0 pb-3"><span className="label-text font-bold text-xs uppercase tracking-wider">Security Check</span></label>
                <div className="flex items-center gap-3">
                  <div className="bg-base-100 px-5 py-3 rounded-xl font-black text-xl tracking-widest text-primary border border-base-300 shadow-inner flex items-center justify-center flex-1 select-none">
                    {num1} + {num2}
                  </div>
                  <button type="button" onClick={generateCaptcha} className="btn btn-square btn-ghost text-base-content/50 hover:text-primary hover:bg-primary/10" title="Reload Captcha">
                    <RefreshCw className="h-5 w-5" />
                  </button>
                </div>
                <input
                  type="number"
                  required
                  className={`input input-bordered w-full mt-3 bg-base-100 rounded-xl font-bold text-center h-12 transition-all ${captchaError ? 'border-error focus:ring-error/20' : 'focus:border-primary focus:ring-primary/20 focus:ring-4'}`}
                  placeholder="Enter the sum"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                />
                {captchaError && <span className="text-error text-xs font-bold mt-2 text-center block">{captchaError}</span>}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full rounded-xl h-12 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all group"
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <>
                    Secure Login
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="hidden lg:block lg:w-7/12 relative bg-base-300">
          <Image 
            src="/images/admin/login-bg.jpg" 
            alt="Hospital Dashboard" 
            fill 
            sizes="(max-width: 1024px) 0vw, 60vw"
            className="object-cover object-center"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          
          {/* Text content on image */}
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-2">Enterprise Healthcare Management</h3>
            <p className="text-white/80 font-medium leading-relaxed text-base">
              Streamline operations, manage patient records, and oversee hospital services through our next-generation secure administrative portal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
