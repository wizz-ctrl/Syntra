import imgLogoMark from '../assets/Rectangle 6.png';
import imgTasksIllustration from '../assets/Tasks Completed Div image.png';
import imgAiBannerArt from '../assets/Generate button image.png';
import imgHoursIllustration from '../assets/Hours Studied Div image.png';
import imgOperatingSystems from '../assets/Operating systems div image.png';
import imgDeepLearning from '../assets/Deep Learning Div image.png';
import imgCyberSecurity from '../assets/Cyber Security Div image.png';

import iconHome from '../assets/iconstack.io - (Home).svg';
import iconActiveDot from '../assets/Ellipse 1.svg';
import iconTasks from '../assets/iconstack.io - (Task Done 01).svg';
import iconSchedule from '../assets/iconstack.io - (Event Schedule).svg';
import iconAnalytics from '../assets/iconstack.io - (Googleanalytics).svg';
import iconProfile from '../assets/iconstack.io - (Profile Circle).svg';
import iconNotification from '../assets/iconstack.io - (Notification 03).svg';
import iconArrowRight from '../assets/iconstack.io - (Alt Arrow Right).svg';
import iconCheck from '../assets/iconstack.io - (Ic Fluent Checkmark 24 Filled).svg';
import iconLogout from '../assets/iconstack.io - (Log Out).svg';

const menuItems = [
  { label: 'Home', icon: iconHome, active: true },
  { label: 'Tasks', icon: iconTasks },
  { label: 'Schedule', icon: iconSchedule },
  { label: 'Analytics', icon: iconAnalytics },
  { label: 'Profile', icon: iconProfile },
];

type SessionCardProps = {
  time: string;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  border: string;
  checked?: boolean;
};

type DashboardPageProps = {
  onSignOut?: () => void;
  onNavigate?: (page: string) => void;
};

function SessionCard({ time, title, subtitle, image, accent, border, checked = false }: SessionCardProps) {
  return (
    <article className={`flex items-stretch overflow-hidden rounded-[14px] border ${border} bg-white`}>
      {/* Accent bar + text */}
      <div className="relative flex-1 min-w-0 py-4 pl-6 pr-3">
        <span className="absolute bottom-4 left-2 top-4 w-[6px] rounded-full" style={{ backgroundColor: accent }} />
        <p className="text-[13px] text-[#8e8e8e] font-['Calibri']">{time}</p>
        <h4 className="mt-1 text-[20px] leading-tight text-black font-['Calibri'] font-bold">{title}</h4>
        <p className="mt-1 text-[13px] leading-tight text-[#8e8e8e] font-['Calibri']">{subtitle}</p>
      </div>

      {/* Checkbox */}
      <div className="flex-shrink-0 flex items-center px-3">
        <div
          className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border border-[#8484f1] ${checked ? 'bg-[#58a1e1]' : 'bg-white'}`}
        >
          {checked ? <img src={iconCheck} alt="" className="h-4 w-4" /> : null}
        </div>
      </div>

      {/* Image — flush to right border */}
      <div className="flex-shrink-0 w-[30%] max-w-[200px] self-stretch overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </article>
  );
}

function Sidebar({ onSignOut, onNavigate }: { onSignOut?: () => void; onNavigate?: (page: string) => void }) {
  return (
    <aside className="hidden md:flex h-full flex-col border-r border-[#b4b4b4] bg-white px-4 py-5 lg:px-5 overflow-y-auto">
      <div className="flex items-center gap-2 px-1">
        <img src={imgLogoMark} alt="Syntra" className="h-[38px] w-[85px] object-contain object-left" />
        <h1 className="font-poetsen-one text-[22px] leading-none text-[#000070] lg:text-[24px]">Syntra</h1>
      </div>

      <p className="mt-7 px-1 text-[12px] font-['Calibri'] font-bold text-[#000070] lg:text-[13px]">MENU</p>

      <nav className="mt-3 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onNavigate?.(item.label.toLowerCase())}
            className={`flex w-full items-center rounded-[12px] px-4 py-2.5 transition-colors ${
              item.active ? 'bg-[#f0f0ff] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.16)]' : 'bg-transparent hover:bg-[#f0f0ff]'
            }`}
          >
            <img src={item.icon} alt="" className="h-5 w-5" />
            <span className="ml-3 text-[14px] font-['Calibri'] font-bold text-[#000070]">{item.label}</span>
            {item.active ? <img src={iconActiveDot} alt="" className="ml-auto h-[6px] w-[6px]" /> : null}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-2 px-1">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#000070] text-white font-['Calibri'] text-[20px] font-bold">
            T
          </div>
          <div>
            <p className="text-[16px] leading-none font-['Calibri'] font-bold text-black">Taimoor</p>
            <p className="text-[11px] font-['Calibri'] text-[#8e8e8e]">taimoor@nust.edu.pk</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onSignOut}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] border border-[#8e8e8e] bg-white py-2.5"
        >
          <img src={iconLogout} alt="" className="h-5 w-5" />
          <span className="text-[13px] font-['Calibri'] font-bold text-[#8e8e8e]">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

function DashboardMain({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <main className="bg-[#f0f0ff] min-h-screen overflow-y-auto">
      <div className="px-5 py-5 lg:px-8 lg:py-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-['Calibri'] font-bold text-[#5454b7] lg:text-[12px]">Monday, April 11, 2026</p>
          <h2 className="mt-1 text-[28px] leading-[1.1] font-['Calibri'] font-bold text-black lg:text-[32px]">Good Morning, Taimoor</h2>
          <p className="mt-2 text-[11px] font-['Calibri'] text-[#8e8e8e] lg:text-[12px]">Here’s Your Study Plan for Today.</p>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-[#b4b4b4] bg-white">
            <img src={iconNotification} alt="" className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => onNavigate?.('tasks')} className="h-[38px] rounded-[10px] bg-[#000070] px-5 text-[13px] font-['Calibri'] font-bold text-[#f0f0ff]">
            + Add Task
          </button>
        </div>
      </header>

      <section className="mt-5 grid grid-cols-2 gap-4">
        <article className="flex items-center gap-3 rounded-[14px] border border-[#8e8e8e] bg-white p-4">
          <div className="flex-1 min-w-0">
            <p className="text-[13px] leading-tight font-['Calibri'] text-[#8e8e8e]">Tasks Completed</p>
            <p className="mt-1 text-[38px] leading-none font-['Calibri'] font-bold text-black">1</p>
            <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">of 3 Today</p>
          </div>
          <div className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-[10px]">
            <img src={imgTasksIllustration} alt="" className="h-full w-full object-contain" />
          </div>
        </article>

        <article className="flex items-center gap-3 rounded-[14px] border border-[#8e8e8e] bg-white p-4">
          <div className="flex-1 min-w-0">
            <p className="text-[13px] leading-tight font-['Calibri'] text-[#8e8e8e]">Hours Studied</p>
            <p className="mt-1 text-[38px] leading-none font-['Calibri'] font-bold text-black">11</p>
            <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">this week</p>
          </div>
          <div className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-[10px]">
            <img src={imgHoursIllustration} alt="" className="h-full w-full object-contain" />
          </div>
        </article>
      </section>

      <section className="mt-5 flex items-center overflow-hidden rounded-[14px] bg-[#000070]">
        <div className="flex-1 min-w-0 p-5">
          <p className="text-[12px] font-['Calibri'] text-[#b4b4b4]">AI Scheduling Engine</p>
          <h3 className="mt-1 text-[20px] leading-tight font-['Calibri'] font-bold text-white lg:text-[24px]">Generate your weekly study schedule</h3>
          <p className="mt-2 text-[12px] leading-snug font-['Calibri'] text-[#8e8e8e]">AI will prioritize your tasks based on deadlines and effort.</p>
        </div>
        <div className="flex-shrink-0 pr-5 flex items-center justify-center">
          <button type="button" className="transition-transform hover:scale-105 active:scale-95">
            <img src={imgAiBannerArt} alt="Generate" className="h-[40px] md:h-[48px] object-contain" />
          </button>
        </div>
      </section>

      <section className="mt-5 rounded-[14px] bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-[24px] leading-none font-['Calibri'] font-bold text-black">Today's Schedule</h3>
          <button type="button" className="flex items-center gap-1.5 rounded-[10px] border border-[#b4b4b4] bg-[#f0f0ff] px-4 py-2 text-[13px] font-['Calibri'] font-bold text-[#000070]">
            View all
            <img src={iconArrowRight} alt="" className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-[13px] font-['Calibri'] text-[#8e8e8e]">1 of 3 sessions completed</p>
        <div className="mt-2 h-[6px] rounded-full bg-[#d9d9d9]">
          <div className="h-full w-[33%] rounded-full bg-[#000070]" />
        </div>

        <div className="mt-4 space-y-3">
          <SessionCard
            time="9:00-10:30 AM"
            title="Operating systems"
            subtitle="Virtual Memory Management"
            image={imgOperatingSystems}
            accent="#000070"
            border="border-[#000070]"
          />

          <SessionCard
            time="11:00-12:00 PM"
            title="Deep Learning"
            subtitle="Convolutional Neural Networks"
            image={imgDeepLearning}
            accent="#58a1e1"
            border="border-[#58a1e1]"
            checked
          />

          <SessionCard
            time="2:00-3:30 PM"
            title="Cyber Security"
            subtitle="Elliptic Curve Cryptography"
            image={imgCyberSecurity}
            accent="#1b1bfc"
            border="border-[#1b1bfc]"
          />
        </div>
      </section>

      <footer className="mt-5 border-t border-[#8e8e8e] pt-3 text-center">
        <p className="text-[12px] font-['Inter'] text-[#8e8e8e]">All rights reserved. Syntra 2026</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-['Inter'] text-[#6d6d88]">
          <a href="#" className="hover:text-[#000070]">Privacy Policy</a>
          <a href="#" className="hover:text-[#000070]">Terms of Service</a>
          <a href="#" className="hover:text-[#000070]">Help Guide</a>
          <a href="#" className="hover:text-[#000070]">Instagram</a>
          <a href="#" className="hover:text-[#000070]">Facebook</a>
          <a href="#" className="hover:text-[#000070]">GitHub</a>
        </div>
      </footer>
      </div>
    </main>
  );
}

export default function DashboardPage({ onSignOut, onNavigate }: DashboardPageProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden md:block w-[220px] lg:w-[250px] xl:w-[270px] flex-shrink-0">
        <Sidebar onSignOut={onSignOut} onNavigate={onNavigate} />
      </div>
      <div className="flex-1 min-w-0 overflow-y-auto">
        <DashboardMain onNavigate={onNavigate} />
      </div>
    </div>
  );
}
