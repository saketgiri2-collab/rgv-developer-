import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  UserCheck, 
  Eye, 
  EyeOff,
  CheckCircle2,
  Loader2
} from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: 'customer' | 'investor' | 'partner';
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, defaultRole = 'customer' }) => {
  const [role, setRole] = useState<'customer' | 'investor' | 'partner'>(defaultRole);
  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('otp');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOtpSent(true);
    }, 600);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setOtpSent(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25231F]/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white border border-[#DDD4C5] shadow-2xl p-6 sm:p-8 text-[#25231F] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6F6A61] hover:text-[#25231F] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Official Brand Logo Centered */}
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src="/rgv-logo.svg"
            alt="RGV Developers Official Emblem"
            referrerPolicy="no-referrer"
            className="w-14 h-14 object-contain rounded-full shadow-md mb-3 border border-[#B89452]/40 bg-white p-0.5"
          />
          <h3 className="font-display font-bold text-xl text-[#25231F] tracking-wide">
            Client & Investor Portal
          </h3>
          <p className="text-xs text-[#6F6A61] mt-1">
            Access your plot documentation, payment ledger, and allotment status
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-[#25231F]">Authentication Successful</h4>
            <p className="text-xs text-[#6F6A61]">Redirecting to your secure account dashboard...</p>
          </div>
        ) : (
          <div>
            {/* Role Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-[#F7F4EE] p-1 border border-[#DDD4C5] mb-5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setRole('customer')}
                className={`py-2 transition-all cursor-pointer ${
                  role === 'customer'
                    ? 'bg-white text-[#B89452] border border-[#B89452]/40 font-bold shadow-xs'
                    : 'text-[#6F6A61] hover:text-[#25231F]'
                }`}
              >
                Plot Buyer
              </button>
              <button
                type="button"
                onClick={() => setRole('investor')}
                className={`py-2 transition-all cursor-pointer ${
                  role === 'investor'
                    ? 'bg-white text-[#B89452] border border-[#B89452]/40 font-bold shadow-xs'
                    : 'text-[#6F6A61] hover:text-[#25231F]'
                }`}
              >
                Investor
              </button>
              <button
                type="button"
                onClick={() => setRole('partner')}
                className={`py-2 transition-all cursor-pointer ${
                  role === 'partner'
                    ? 'bg-white text-[#B89452] border border-[#B89452]/40 font-bold shadow-xs'
                    : 'text-[#6F6A61] hover:text-[#25231F]'
                }`}
              >
                Partner
              </button>
            </div>

            {/* Auth Form */}
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                    Registered Mobile or Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Enter 10-digit mobile or email"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#DDD4C5] text-xs text-[#25231F] placeholder:text-[#6F6A61]/50 focus:outline-none focus:border-[#B89452]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#6F6A61]">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      checked={authMethod === 'otp'}
                      onChange={() => setAuthMethod('otp')}
                      className="accent-[#B89452]"
                    />
                    <span>Verify via OTP</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      checked={authMethod === 'password'}
                      onChange={() => setAuthMethod('password')}
                      className="accent-[#B89452]"
                    />
                    <span>Use Password</span>
                  </label>
                </div>

                {authMethod === 'password' && (
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#25231F] mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6F6A61]">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-10 py-2.5 bg-white border border-[#DDD4C5] text-xs text-[#25231F] placeholder:text-[#6F6A61]/50 focus:outline-none focus:border-[#B89452]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6F6A61] hover:text-[#25231F] cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !identifier}
                  className="gold-button text-white w-full py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <>
                      <span>{authMethod === 'otp' ? 'Send Verification Code' : 'Sign In'}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="text-center">
                  <span className="text-xs text-[#6F6A61] block">
                    Verification code sent to <strong className="text-[#25231F]">{identifier}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="text-[11px] text-[#B89452] hover:underline mt-1 font-semibold"
                  >
                    Change Number / Email
                  </button>
                </div>

                <div className="flex justify-center gap-2">
                  {[0, 1, 2, 3].map((idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={otpValue[idx]}
                      onChange={(e) => {
                        const val = e.target.value;
                        const newOtp = [...otpValue];
                        newOtp[idx] = val;
                        setOtpValue(newOtp);
                        if (val && idx < 3) {
                          const nextInput = document.getElementById(`portal-otp-${idx + 1}`);
                          nextInput?.focus();
                        }
                      }}
                      id={`portal-otp-${idx}`}
                      className="w-12 h-12 text-center text-lg font-bold bg-white border border-[#DDD4C5] text-[#25231F] focus:outline-none focus:border-[#B89452]"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || otpValue.some((v) => !v)}
                  className="gold-button text-white w-full py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <>
                      <span>Verify & Access Account</span>
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-[#DDD4C5] flex items-center justify-center gap-2 text-[11px] text-[#6F6A61]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89452]" />
              <span>256-Bit Encrypted Client Portal</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
