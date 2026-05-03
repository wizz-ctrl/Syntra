import React, { useState } from 'react';

import imgSyntraLogo from '../assets/Rectangle 2.png';
import imgEye from '../assets/iconstack.io - (Eye).svg';
import imgArrowRight from '../assets/iconstack.io - (Arrow Narrow Right).svg';

interface Feature {
  id: string;
  title: string;
  highlighted?: boolean;
}

const features: Feature[] = [
  { id: 'ai-schedule', title: 'AI Schedule Generation', highlighted: true },
  { id: 'task-priority', title: 'Smart Task Prioritization' },
  { id: 'analytics', title: 'Progress Analytics' },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="flex w-full items-center gap-4 rounded-[15px] bg-[#1919af] px-5 py-3 sm:px-6 sm:py-4 shadow-sm">
    <div className="flex-shrink-0">
      <span
        className={`block w-3 h-3 rounded-full ${
          feature.highlighted ? 'bg-white' : 'bg-[#8e8e8e]'
        }`}
      />
    </div>
    <div className="text-white font-['Calibri'] text-[clamp(16px,1.4vw,22px)] leading-tight lg:text-[24px]">
      {feature.title}
    </div>
  </div>
);

export const LeftSidebar: React.FC = () => (
  <div className="flex min-h-[30vh] flex-col items-center justify-center bg-[#000070] px-4 py-8 text-center text-white md:min-h-screen md:px-6 lg:px-8">
    <div className="mb-5 text-center sm:mb-7 lg:mb-9">
      <img
        src={imgSyntraLogo}
        alt="Syntra"
        className="mx-auto mb-0 h-[90px] w-[260px] object-contain object-bottom sm:h-[96px] sm:w-[276px] lg:h-[106px] lg:w-[300px]"
      />
      <h1 className="-mt-3 font-poetsen-one text-[clamp(30px,3.4vw,48px)] leading-none text-white font-bold tracking-wide">
        Syntra
      </h1>
    </div>

    <div className="mb-6 px-2 sm:px-4 md:mb-8 lg:mb-10 lg:px-6">
      <p className="text-[#b4b4b4] font-['Calibri'] text-[clamp(14px,1.2vw,18px)] leading-snug">
        Your AI-powered study planner.
        <br />
        Build better habits, hit every deadline.
      </p>
    </div>

    <div className="flex w-full max-w-[300px] flex-col gap-3 sm:max-w-[320px] sm:gap-4 lg:max-w-[337px]">
      {features.map((feature) => (
        <div key={feature.id}>
          <FeatureCard feature={feature} />
        </div>
      ))}
    </div>
  </div>
);

const LoginForm: React.FC<{ onLogin: () => void, onNavigate: (page: string) => void }> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'tsafdar.bscs23seecs@seecs.edu.pk' && password === '12345678abc') {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
      {error && (
        <div className="rounded-[10px] bg-red-50 p-3 text-center text-sm font-bold text-red-500 border border-red-200">
          {error}
        </div>
      )}
      <div>
        <label className="mb-2.5 block font-['Calibri'] text-[15px] text-black sm:mb-3 sm:text-[17px] lg:text-[18px] xl:text-[20px]">
          Email address:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-[50px] w-full rounded-[15px] bg-[rgba(217,217,217,0.2)] px-4 font-['Calibri'] text-[15px] text-[#8e8e8e] placeholder-[#8e8e8e] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-[#000070] sm:h-[56px] sm:px-5 sm:text-[17px] lg:h-[60px] lg:text-[18px] xl:h-[66px] xl:text-[20px]"
        />
      </div>

      <div>
        <label className="mb-2.5 block font-['Calibri'] text-[15px] text-black sm:mb-3 sm:text-[17px] lg:text-[18px] xl:text-[20px]">
          Password:
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••••••••••••"
            className="h-[50px] w-full rounded-[15px] bg-[rgba(217,217,217,0.2)] px-4 pr-12 font-['Calibri'] text-[15px] text-[#8e8e8e] placeholder-[#8e8e8e] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-[#000070] sm:h-[56px] sm:px-5 sm:pr-14 sm:text-[17px] lg:h-[60px] lg:text-[18px] xl:h-[66px] xl:text-[20px]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e8e8e] hover:text-black sm:right-5 lg:right-6"
          >
            <img src={imgEye} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="text-right">
        <a href="#" className="font-['Calibri:Bold'] text-[15px] text-[#000070] hover:underline sm:text-[17px] lg:text-[18px] xl:text-[20px]">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="flex h-[50px] w-full items-center justify-center gap-2 rounded-[15px] bg-[#000070] font-['Calibri:Bold'] text-[15px] text-white shadow-[0px_3px_3px_0px_rgba(0,0,0,0.22)] transition-colors hover:bg-[#1919af] sm:h-[56px] sm:text-[17px] lg:h-[60px] lg:text-[18px] xl:h-[66px] xl:text-[20px]"
      >
        Sign in
        <img src={imgArrowRight} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#e5e4e7]"></div>
        <span className="font-['Calibri'] text-[15px] text-[#8e8e8e] sm:text-[17px] lg:text-[18px] xl:text-[20px]">or</span>
        <div className="flex-1 h-px bg-[#e5e4e7]"></div>
      </div>

      <p className="text-center font-['Calibri'] text-[15px] text-[#8e8e8e] sm:text-[17px] lg:text-[18px] xl:text-[20px]">
        Don't have an account?{' '}
        <button type="button" onClick={() => onNavigate('signup')} className="text-[#000070] font-bold hover:underline">
          Sign up free
        </button>
      </p>
    </form>
  );
};

const RightContent: React.FC<{ onLogin: () => void, onNavigate: (page: string) => void }> = ({ onLogin, onNavigate }) => (
  <div className="flex w-full items-center justify-center px-5 py-6 sm:px-8 md:py-10 lg:px-10 lg:py-0">
    <div className="w-full max-w-[460px] xl:max-w-[500px]">
      <h2 className="font-['Calibri:Bold'] text-[clamp(26px,3vw,42px)] leading-none text-black">
        Welcome Back
      </h2>
      <p className="mt-3 text-[clamp(14px,1.2vw,18px)] font-['Calibri'] text-[#8e8e8e]">
        Sign in to continue to your dashboard
      </p>
      <div className="mt-5 w-full sm:mt-7 xl:mt-8">
        <LoginForm onLogin={onLogin} onNavigate={onNavigate} />
      </div>
    </div>
  </div>
);

interface LoginPageProps {
  onLogin?: () => void;
  onNavigate?: (page: string) => void;
}

export default function LoginPage({ onLogin = () => {}, onNavigate = () => {} }: LoginPageProps) {
  return (
    <div className="min-h-screen w-full bg-white md:grid md:grid-cols-[minmax(260px,38vw)_1fr]">
      <LeftSidebar />
      <RightContent onLogin={onLogin} onNavigate={onNavigate} />
    </div>
  );
}
