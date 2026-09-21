'use client';

import { useState } from 'react';
import { useUpdateProfileMutation } from '@/store/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { loginSuccess } from '@/store/slices/authSlice';
import { Save, User, Lock, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AdminSettings() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const dispatch = useDispatch();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newUsername, setNewUsername] = useState(user?.username || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!currentPassword) {
      setErrorMsg('Current password is required to save changes.');
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setErrorMsg('New passwords do not match.');
      return;
    }

    try {
      const data = {
        currentPassword,
        newUsername: newUsername !== user?.username ? newUsername : undefined,
        newPassword: newPassword ? newPassword : undefined,
      };

      const res = await updateProfile(data).unwrap();
      
      // Update local storage and Redux if the token or username changed
      if (res.token && res.user) {
        dispatch(loginSuccess({ token: res.token, user: res.user }));
      }
      
      setSuccessMsg('Profile updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
    } catch (err: any) {
      setErrorMsg(err.data?.message || 'An error occurred while updating profile.');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-base-content tracking-tight">Settings & Profile</h1>
        <p className="text-base-content/70 mt-1">Manage your administrator account credentials.</p>
      </div>

      <div className="bg-base-100 rounded-3xl p-6 md:p-8 shadow-sm border border-base-200/60 max-w-2xl relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
          {errorMsg && (
            <div className="alert alert-error bg-error/10 text-error border-error/20 rounded-2xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="alert alert-success bg-success/10 text-success border-success/20 rounded-2xl flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          <div className="space-y-5 pb-6 border-b border-base-200">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Details
            </h3>
            
            <div className="form-control">
              <label className="label pb-1"><span className="label-text font-semibold text-base-content/80">Email Address (Username)</span></label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40" />
                <input
                  type="email"
                  className="input input-bordered w-full pl-12 bg-base-200/30 focus:bg-base-100 rounded-xl"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="admin@hospital.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 pb-6 border-b border-base-200">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Change Password
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label pb-1"><span className="label-text font-semibold text-base-content/80">New Password</span></label>
                <input
                  type="password"
                  className="input input-bordered w-full bg-base-200/30 focus:bg-base-100 rounded-xl"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                />
              </div>
              <div className="form-control">
                <label className="label pb-1"><span className="label-text font-semibold text-base-content/80">Confirm New Password</span></label>
                <input
                  type="password"
                  className="input input-bordered w-full bg-base-200/30 focus:bg-base-100 rounded-xl"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-warning/10 p-5 rounded-2xl border border-warning/20">
              <h3 className="text-sm font-bold text-warning-content mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-warning" />
                Security Verification
              </h3>
              <p className="text-xs text-warning-content/80 mb-3">To save any changes to your profile or password, you must enter your current password.</p>
              <div className="form-control">
                <input
                  type="password"
                  required
                  className="input input-bordered w-full border-warning/30 focus:border-warning focus:ring-warning/20 rounded-xl bg-base-100"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary rounded-xl px-8 font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
