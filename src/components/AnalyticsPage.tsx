import { useState } from 'react';

import imgLogoMark from '../assets/Rectangle 6.png';
import imgTasksIllustration from '../assets/Tasks Completed Div image.png';
import imgHoursIllustration from '../assets/Hours Studied Div image.png';
import imgCompletionRate from '../assets/completion rate div image.png';
import imgBestSubject from '../assets/best subject div image.png';

import iconHome from '../assets/iconstack.io - (Home).svg';
import iconActiveDot from '../assets/Ellipse 1.svg';
import iconTasks from '../assets/iconstack.io - (Task Done 01).svg';
import iconSchedule from '../assets/iconstack.io - (Event Schedule).svg';
import iconAnalytics from '../assets/iconstack.io - (Googleanalytics).svg';
import iconProfile from '../assets/iconstack.io - (Profile Circle).svg';
import iconLogout from '../assets/iconstack.io - (Log Out).svg';
import iconArrowRight from '../assets/iconstack.io - (Alt Arrow Right).svg';

// === Figma Color Palette (EXACT) ===
const COLORS = {
  navy: '#000070',
  black: '#000000',
  gray: '#8E8E8E',
  white: '#FFFFFF',
  lavender: '#F0F0FF',
  lightGray: '#B4B4B4',
  lighterGray: '#D9D9D9',
  cyan: '#00CCFF',
  brightGreen: '#4BFD5C',
  oliveGreen: '#A0C205',
  green: '#1CE931',
  purple: '#5454B7',
  lightLavender: '#EAEAFF',
  darkBlue: '#0D0DAC',
  medBlue: '#5656D8',
  lightBlue: '#58A1E1',
  lightPurple: '#8484F1',
  iceBlueBg: '#D2F6FF',
  lightGreenBg: '#D5FFD9',
  lightCyanBg: '#D9F7FF',
  greenBg2: '#DBFFDF',
  yellowBg: '#FAFFDA',
};

const menuItems = [
  { label: 'Home', icon: iconHome },
  { label: 'Tasks', icon: iconTasks },
  { label: 'Schedule', icon: iconSchedule },
  { label: 'Analytics', icon: iconAnalytics, active: true },
  { label: 'Profile', icon: iconProfile },
];

const chartData = [
  { day: 'Mon', hours: 3.5 },
  { day: 'Tue', hours: 2 },
  { day: 'Wed', hours: 4.5 },
  { day: 'Thu', hours: 3 },
  { day: 'Fri', hours: 5 },
  { day: 'Sat', hours: 2.5 },
];

// Bar colors from Figma: varying shades of navy/blue/purple
const barColors = [COLORS.navy, COLORS.medBlue, COLORS.navy, COLORS.darkBlue, COLORS.navy, COLORS.purple];

// Subject Progress — colors from Figma palette (NO reds)
const subjectProgress = [
  { name: 'Deep Learning', percent: 89, tasks: '9/10 tasks', dotColor: COLORS.navy, badgeBg: COLORS.navy, badgeText: COLORS.white },
  { name: 'Reinforcement Learning', percent: 64, tasks: '6/10 tasks', dotColor: COLORS.cyan, badgeBg: COLORS.cyan, badgeText: COLORS.white },
  { name: 'Natural Language Processing', percent: 50, tasks: '6/12 tasks', dotColor: COLORS.green, badgeBg: COLORS.green, badgeText: COLORS.white },
  { name: 'Compiler Construction', percent: 53, tasks: '5/10 tasks', dotColor: COLORS.oliveGreen, badgeBg: COLORS.oliveGreen, badgeText: COLORS.black },
];

// Recent Activity — badge colors from Figma palette (NO reds)
const recentActivity = [
  { subject: 'Deep Learning', topic: 'Convolutional Neural Networks', duration: '1h 30m', time: 'Today, 10:30 AM', badgeColor: COLORS.navy, cardBg: COLORS.lightLavender },
  { subject: 'Reinforcement Learning', topic: 'Convolutional Neural Networks', duration: '1h 30m', time: 'Today, 10:30 AM', badgeColor: COLORS.green, cardBg: COLORS.lightGreenBg },
  { subject: 'Operating Systems', topic: 'Virtual Memory Management', duration: '2h 00m', time: 'Today, 9:00 AM', badgeColor: COLORS.cyan, cardBg: COLORS.iceBlueBg },
];

type AnalyticsPageProps = {
  onNavigate?: (page: string) => void;
  onSignOut?: () => void;
};

function Sidebar({ onNavigate, onSignOut }: { onNavigate?: (page: string) => void; onSignOut?: () => void }) {
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
            className={`flex w-full items-center rounded-[12px] px-4 py-2.5 ${item.active ? 'bg-[#f0f0ff] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.16)]' : 'bg-transparent hover:bg-gray-50'}`}
          >
            <img src={item.icon} alt="" className="h-5 w-5" />
            <span className={`ml-3 text-[14px] font-['Calibri'] font-bold ${item.active ? 'text-[#000070]' : 'text-[#8e8e8e]'}`}>{item.label}</span>
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

function BarChart({ data }: { data: typeof chartData }) {
  const maxHours = Math.max(...data.map(d => d.hours));
  const chartHeight = 180;
  return (
    <div className="flex items-end justify-between gap-3 lg:gap-5" style={{ height: chartHeight }}>
      {data.map((d, i) => {
        const barHeight = Math.max((d.hours / maxHours) * chartHeight, 14);
        return (
          <div key={d.day} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className="w-full max-w-[40px] rounded-t-[5px]"
              style={{ height: barHeight, backgroundColor: barColors[i] }}
            />
            <span className="mt-2 text-[12px] font-['Calibri'] text-[#8e8e8e]">{d.day}</span>
          </div>
        );
      })}
    </div>
  );
}

function ProgressBar({ percent, color = '#000070' }: { percent: number; color?: string }) {
  return (
    <div className="h-[8px] w-full rounded-full bg-[#d9d9d9]">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
    </div>
  );
}

function AnalyticsMain() {
  const [filter, setFilter] = useState<'week' | 'month'>('week');

  return (
    <main className="bg-[#f0f0ff] min-h-screen overflow-y-auto">
      <div className="px-5 py-5 lg:px-8 lg:py-6">
        {/* Header */}
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[12px] font-['Calibri'] font-bold text-[#5454B7] lg:text-[13px]">Performance Overview</p>
            <h2 className="mt-1 text-[28px] leading-[1.1] font-['Calibri'] font-bold text-black lg:text-[32px]">Your Progress</h2>
            <p className="mt-2 text-[13px] font-['Calibri'] text-[#8e8e8e]">Track your study habits and productivity.</p>
          </div>
          <div className="flex items-center rounded-[10px] border border-[#b4b4b4] bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setFilter('week')}
              className={`px-5 py-2.5 text-[13px] font-['Calibri'] font-bold transition-colors ${filter === 'week' ? 'bg-[#000070] text-white' : 'text-[#8e8e8e] hover:bg-gray-50'}`}
            >
              This week
            </button>
            <button
              type="button"
              onClick={() => setFilter('month')}
              className={`px-5 py-2.5 text-[13px] font-['Calibri'] font-bold transition-colors ${filter === 'month' ? 'bg-[#000070] text-white' : 'text-[#8e8e8e] hover:bg-gray-50'}`}
            >
              This Month
            </button>
          </div>
        </header>

        {/* Stat Cards - 2x2 Grid — 4 DISTINCT illustrations */}
        <section className="mt-5 grid grid-cols-2 gap-4">
          {/* 1. Tasks Completed — person with checkmarks/flag */}
          <article className="flex items-stretch overflow-hidden rounded-[14px] border border-[#8e8e8e] bg-white">
            <div className="flex-1 min-w-0 p-4 flex flex-col justify-center">
              <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">Tasks Completed</p>
              <p className="mt-2 text-[42px] leading-none font-['Calibri'] font-bold text-black">21</p>
              <p className="mt-1 text-[13px] font-['Calibri'] text-[#8e8e8e]">of 33 Total</p>
            </div>
            <div className="flex-shrink-0 w-[40%] max-w-[220px] flex items-center justify-center p-2 overflow-hidden">
              <img src={imgTasksIllustration} alt="" className="w-full h-full object-contain" />
            </div>
          </article>

          {/* 2. Hours Studied — people studying with globe/clock */}
          <article className="flex items-stretch overflow-hidden rounded-[14px] border border-[#8e8e8e] bg-white">
            <div className="flex-1 min-w-0 p-4 flex flex-col justify-center">
              <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">Hours Studied</p>
              <p className="mt-2 text-[42px] leading-none font-['Calibri'] font-bold text-black">22</p>
              <p className="mt-1 text-[13px] font-['Calibri'] text-[#8e8e8e]">this week</p>
            </div>
            <div className="flex-shrink-0 w-[40%] max-w-[220px] flex items-center justify-center p-2 overflow-hidden">
              <img src={imgHoursIllustration} alt="" className="w-full h-full object-contain" />
            </div>
          </article>

          {/* 3. Completion Rate — person at desk with chart illustration */}
          <article className="flex items-stretch overflow-hidden rounded-[14px] border border-[#8e8e8e] bg-white">
            <div className="flex-1 min-w-0 p-4 flex flex-col justify-center">
              <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">Completion Rate</p>
              <p className="mt-2 text-[42px] leading-none font-['Calibri'] font-bold text-black">64%</p>
              <p className="mt-1 text-[13px] font-['Calibri'] text-[#8e8e8e]">Overall Progress</p>
            </div>
            <div className="flex-shrink-0 w-[40%] max-w-[220px] flex items-center justify-center p-2 overflow-hidden">
              <img src={imgCompletionRate} alt="" className="w-full h-full object-contain" />
            </div>
          </article>

          {/* 4. Best Subject — people studying with books/globe */}
          <article className="flex items-stretch overflow-hidden rounded-[14px] border border-[#8e8e8e] bg-white">
            <div className="flex-1 min-w-0 p-4 flex flex-col justify-center">
              <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">Best Subject</p>
              <p className="mt-2 text-[24px] leading-tight font-['Calibri'] font-bold text-black">Deep Learning</p>
              <p className="mt-1 text-[13px] font-['Calibri'] text-[#8e8e8e]">89% Done</p>
            </div>
            <div className="flex-shrink-0 w-[40%] max-w-[220px] flex items-center justify-center p-2 overflow-hidden">
              <img src={imgBestSubject} alt="" className="w-full h-full object-contain" />
            </div>
          </article>
        </section>

        {/* Hours Studied Chart + Subject Progress — Side by Side */}
        <section className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Hours Studied Chart */}
          <article className="rounded-[14px] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[22px] font-['Calibri'] font-bold text-black">Hours Studied</h3>
                <p className="mt-1 text-[12px] font-['Calibri'] text-[#8e8e8e]">Day by Day this week</p>
              </div>
              <span className="rounded-full px-3 py-1 text-[12px] font-['Calibri'] font-bold" style={{ backgroundColor: COLORS.lightGreenBg, color: COLORS.green }}>+12%</span>
            </div>
            <div className="mt-6">
              <BarChart data={chartData} />
            </div>
          </article>

          {/* Subject Progress */}
          <article className="rounded-[14px] bg-white p-5">
            <h3 className="text-[22px] font-['Calibri'] font-bold text-black">Subject Progress</h3>
            <p className="mt-1 text-[12px] font-['Calibri'] text-[#8e8e8e]">Task completion by subject</p>
            <div className="mt-5 space-y-4">
              {subjectProgress.map((subject) => (
                <div key={subject.name} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-[10px] h-[10px] rounded-full" style={{ backgroundColor: subject.dotColor }} />
                  <span className="flex-1 min-w-0 text-[13px] font-['Calibri'] font-bold text-black truncate">{subject.name}</span>
                  <span className="flex-shrink-0 text-[11px] font-['Calibri'] text-[#8e8e8e]">{subject.tasks}</span>
                  <span
                    className="flex-shrink-0 rounded-full px-3 py-0.5 text-[12px] font-['Calibri'] font-bold"
                    style={{ backgroundColor: subject.badgeBg, color: subject.badgeText }}
                  >
                    {subject.percent}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[#e5e5e5]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-['Calibri'] font-bold text-black">Overall Completion</span>
                <span className="text-[13px] font-['Calibri'] font-bold text-[#000070]">64%</span>
              </div>
              <ProgressBar percent={64} />
            </div>
          </article>
        </section>

        {/* Recent Activity */}
        <section className="mt-5 rounded-[14px] bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[22px] font-['Calibri'] font-bold text-black">Recent Activity</h3>
              <p className="mt-1 text-[12px] font-['Calibri'] text-[#8e8e8e]">Your latest completed study sessions</p>
            </div>
            <button type="button" className="flex items-center gap-1.5 rounded-[10px] border border-[#b4b4b4] bg-[#f0f0ff] px-4 py-2 text-[13px] font-['Calibri'] font-bold text-[#000070]">
              View all
              <img src={iconArrowRight} alt="" className="h-4 w-4" />
            </button>
          </div>
          {/* Horizontal 3-column activity cards with colored backgrounds */}
          <div className="grid grid-cols-3 gap-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="rounded-[12px] border border-[#e5e5e5] p-4" style={{ backgroundColor: activity.cardBg }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[14px] font-['Calibri'] font-bold text-black">{activity.subject}</span>
                  <span
                    className="ml-auto rounded-full px-3 py-1 text-[11px] font-['Calibri'] font-bold text-white"
                    style={{ backgroundColor: activity.badgeColor }}
                  >
                    {activity.duration}
                  </span>
                </div>
                <p className="text-[12px] font-['Calibri'] text-[#8e8e8e]">{activity.topic}</p>
                <p className="mt-2 text-[11px] font-['Calibri'] text-[#b4b4b4]">{activity.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
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

export default function AnalyticsPage({ onNavigate, onSignOut }: AnalyticsPageProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden md:block w-[220px] lg:w-[250px] xl:w-[270px] flex-shrink-0">
        <Sidebar onNavigate={onNavigate} onSignOut={onSignOut} />
      </div>
      <div className="flex-1 min-w-0 overflow-y-auto">
        <AnalyticsMain />
      </div>
    </div>
  );
}
