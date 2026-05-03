import React, { useState } from 'react';
import { LeftSidebar } from './LoginPage';
import imgArrowRight from '../assets/iconstack.io - (Arrow Narrow Right).svg';
import imgEye from '../assets/iconstack.io - (Eye).svg';

interface SignupPageProps {
  onSignup?: () => void;
  onNavigate?: (page: string) => void;
}

const SignupForm: React.FC<{ onSignup: () => void, onNavigate: (page: string) => void }> = ({ onSignup, onNavigate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Usually here you would send the data to an API.
    // For now, simply trigger the success callback.
    onSignup();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block font-['Calibri'] text-[15px] text-black">First Name:</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First"
            className="h-[50px] w-full rounded-[15px] bg-[rgba(217,217,217,0.2)] px-4 font-['Calibri'] text-[15px] text-[#8e8e8e] placeholder-[#8e8e8e] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000070]"
          />
        </div>
        <div>
          <label className="mb-2 block font-['Calibri'] text-[15px] text-black">Last Name:</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last"
            className="h-[50px] w-full rounded-[15px] bg-[rgba(217,217,217,0.2)] px-4 font-['Calibri'] text-[15px] text-[#8e8e8e] placeholder-[#8e8e8e] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000070]"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-['Calibri'] text-[15px] text-black">Email address:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-[50px] w-full rounded-[15px] bg-[rgba(217,217,217,0.2)] px-4 font-['Calibri'] text-[15px] text-[#8e8e8e] placeholder-[#8e8e8e] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000070]"
        />
      </div>

      <div>
        <label className="mb-2 block font-['Calibri'] text-[15px] text-black">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••••••••••••"
            className="h-[50px] w-full rounded-[15px] bg-[rgba(217,217,217,0.2)] px-4 pr-12 font-['Calibri'] text-[15px] text-[#8e8e8e] placeholder-[#8e8e8e] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000070]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e8e8e] hover:text-black"
          >
            <img src={imgEye} alt="" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="flex h-[50px] mt-6 w-full items-center justify-center gap-2 rounded-[15px] bg-[#000070] font-['Calibri:Bold'] text-[15px] text-white shadow-sm transition-colors hover:bg-[#1919af] sm:h-[56px] sm:text-[17px] lg:h-[60px] lg:text-[18px]"
      >
        Create Account
        <img src={imgArrowRight} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#e5e4e7]"></div>
        <span className="font-['Calibri'] text-[15px] text-[#8e8e8e] sm:text-[17px] lg:text-[18px]">or</span>
        <div className="flex-1 h-px bg-[#e5e4e7]"></div>
      </div>

      <p className="text-center font-['Calibri'] text-[15px] text-[#8e8e8e] sm:text-[17px] lg:text-[18px]">
        Already have an account?{' '}
        <button type="button" onClick={() => onNavigate('login')} className="text-[#000070] font-bold hover:underline">
          Sign in
        </button>
      </p>
    </form>
  );
};

export default function SignupPage({ onSignup = () => {}, onNavigate = () => {} }: SignupPageProps) {
  return (
    <div className="min-h-screen w-full bg-white md:grid md:grid-cols-[minmax(260px,38vw)_1fr]">
      <LeftSidebar />
      <div className="flex w-full items-center justify-center px-5 py-6 sm:px-8 md:py-10 lg:px-10 lg:py-0">
        <div className="w-full max-w-[460px] xl:max-w-[500px]">
          <h2 className="font-['Calibri:Bold'] text-[clamp(26px,3vw,42px)] leading-none text-black">
            Create an Account
          </h2>
          <p className="mt-3 text-[clamp(14px,1.2vw,18px)] font-['Calibri'] text-[#8e8e8e]">
            Join Syntra to start planning your studies
          </p>
          <div className="mt-5 w-full sm:mt-7 xl:mt-8">
            <SignupForm onSignup={onSignup} onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
}
