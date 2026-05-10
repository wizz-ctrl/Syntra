import { useState } from 'react';

// Assets
import imgLogoMark from '../assets/Rectangle 6.png';
import iconHome from '../assets/iconstack.io - (Home).svg';
import iconActiveDot from '../assets/Ellipse 1.svg';
import iconTasks from '../assets/iconstack.io - (Task Done 01).svg';
import iconSchedule from '../assets/iconstack.io - (Event Schedule).svg';
import iconAnalytics from '../assets/iconstack.io - (Googleanalytics).svg';
import iconProfile from '../assets/iconstack.io - (Profile Circle).svg';
import iconLogout from '../assets/iconstack.io - (Log Out).svg';
import iconArrowLeft from '../assets/iconstack.io - (Alt Arrow Left).svg';
import iconArrowRight from '../assets/iconstack.io - (Alt Arrow Right).svg';
import { formatDeadlineLabel, getWeekDays, type PlannedTask } from '../taskPlanner';

const menuItems = [
  { label: 'Home', icon: iconHome },
  { label: 'Tasks', icon: iconTasks },
  { label: 'Schedule', icon: iconSchedule, active: true },
  { label: 'Analytics', icon: iconAnalytics },
  { label: 'Profile', icon: iconProfile },
];

const events = [
  // Deep Learning
  { day: 'MON', startHour: 9, durationHours: 2, title: 'Deep Learning', subtitle: 'Convolutional Neural Networks Part-1', bg: '#EAEAFF', borderLeftColor: '#000070', textColor: '#000070' },
  { day: 'WED', startHour: 11, durationHours: 2, title: 'Deep Learning', subtitle: 'Convolutional Neural Networks Part-2', bg: '#EAEAFF', borderLeftColor: '#000070', textColor: '#000070' },
  { day: 'FRI', startHour: 14, durationHours: 1, title: 'Deep Learning', subtitle: 'Pytorch Intro', bg: '#EAEAFF', borderLeftColor: '#000070', textColor: '#000070' },

  // Cyber Security
  { day: 'TUE', startHour: 10, durationHours: 2, title: 'Cyber Security', subtitle: 'Asymmetric Cryptography Part-2', bg: '#E4FAFF', borderLeftColor: '#00CCFF', textColor: '#07B7E3' },
  { day: 'FRI', startHour: 9, durationHours: 3, title: 'Cyber Security', subtitle: 'Elliptic Curve Cryptography', bg: '#E4FAFF', borderLeftColor: '#00CCFF', textColor: '#07B7E3' },
  { day: 'FRI', startHour: 15, durationHours: 2, title: 'Cyber Security', subtitle: 'Hash Functions and Asymmetric Cryptography', bg: '#E4FAFF', borderLeftColor: '#00CCFF', textColor: '#07B7E3' },

  // Operating Systems
  { day: 'MON', startHour: 12, durationHours: 1, title: 'Operating Systems', subtitle: 'Deadlocks Part-1', bg: '#EDFEEF', borderLeftColor: '#1CE931', textColor: '#1CE931' },
  { day: 'WED', startHour: 9, durationHours: 2, title: 'Operating Systems', subtitle: 'Virtual Memory Management', bg: '#EDFEEF', borderLeftColor: '#1CE931', textColor: '#1CE931' },
  { day: 'TUE', startHour: 14, durationHours: 2, title: 'Operating Systems', subtitle: 'External and Internal Fragmentation', bg: '#EDFEEF', borderLeftColor: '#1CE931', textColor: '#1CE931' },

  // Parallel and Distributed Computing
  { day: 'THU', startHour: 10, durationHours: 3, title: 'Parallel and Distributed Computing', subtitle: "Bully's Algorithm and Logical Clocks", bg: '#FDFFE6', borderLeftColor: '#B3C306', textColor: '#B3C306' },
  { day: 'WED', startHour: 15, durationHours: 2, title: 'Parallel and Distributed Computing', subtitle: 'Networking Protocols and Delays', bg: '#FDFFE6', borderLeftColor: '#B3C306', textColor: '#B3C306' },
];

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

function AddedTaskCard({ task }: { task: PlannedTask }) {
  const priorityStyles = {
    Low: 'border-[#22c55e] bg-[#f0fdf4] text-[#15803d]',
    Medium: 'border-[#eab308] bg-[#fefce8] text-[#a16207]',
    High: 'border-[#ef4444] bg-[#fef2f2] text-[#b91c1c]',
  } as const;

  return (
    <article className="rounded-[14px] border border-[#e2e8f0] bg-[#f8fafc] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-['Calibri'] font-bold text-[#8e8e8e]">{task.subject}</p>
          <h4 className="mt-1 text-[17px] font-['Calibri'] font-bold text-black">{task.title}</h4>
          <p className="mt-1 text-[12px] font-['Calibri'] text-[#8e8e8e]">Due {formatDeadlineLabel(task.deadlineISO)}</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-[11px] font-['Calibri'] font-bold ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      {task.notes ? <p className="mt-3 text-[12px] leading-snug font-['Calibri'] text-[#64748b]">{task.notes}</p> : null}
    </article>
  );
}

function ScheduleMain({ tasks = [] }: { tasks?: PlannedTask[] }) {
  const days = getWeekDays();
  const weekStart = days[0];
  const weekEnd = days[days.length - 1];
  const groupedTasks = tasks
    .reduce<Record<string, PlannedTask[]>>((groups, task) => {
      if (!groups[task.deadlineISO]) {
        groups[task.deadlineISO] = [];
      }
      groups[task.deadlineISO].push(task);
      return groups;
    }, {})
    ;
  const groupedTaskEntries = Object.entries(groupedTasks).sort(([firstDate], [secondDate]) => firstDate.localeCompare(secondDate));

  // map subjects to visuals (reuse assets available in this file via imports)
  const subjectMap: Record<string, { color: string }> = {
    'Operating Systems': { color: '#1CE931' },
    'Deep Learning': { color: '#58A1E1' },
    'Cyber Security': { color: '#00CCFF' },
    'Parallel and Distributed Computing': { color: '#B3C306' },
    'Compiler Construction': { color: '#5454B7' },
    Other: { color: '#8E8E8E' },
  };

  return (
    <main className="bg-[#F0F0FF] min-h-screen overflow-y-auto flex flex-col">
      <div className="flex-1 flex flex-col p-5 lg:p-8 max-w-[1200px] w-full mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[14px] font-['Calibri'] font-bold text-[#5454B7]">Weekly Overview</p>
            <h2 className="mt-1 text-[32px] font-['Calibri'] font-bold text-black leading-none">Study Schedule</h2>
            <p className="mt-3 text-[14px] font-['Calibri'] text-[#8e8e8e] max-w-[280px] leading-snug">
              AI-optimized plan based on your tasks and deadlines.
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3">
              {/* Date Selector */}
              <div className="flex items-center justify-between rounded-[8px] border border-[#d9d9d9] bg-white px-3 py-2 min-w-[220px]">
                <button type="button" className="hover:bg-gray-100 p-1 rounded transition-colors">
                  <img src={iconArrowLeft} alt="Previous" className="h-4 w-4" />
                </button>
                <span className="text-[13px] font-['Calibri'] font-bold text-[#8e8e8e]">
                  {formatDeadlineLabel(weekStart.iso)} – {formatDeadlineLabel(weekEnd.iso)} (This Week)
                </span>
                <button type="button" className="hover:bg-gray-100 p-1 rounded transition-colors">
                  <img src={iconArrowRight} alt="Next" className="h-4 w-4" />
                </button>
              </div>

              {/* Regenerate Button */}
              <button type="button" className="flex items-center gap-2 rounded-[8px] bg-[#000070] px-4 py-2.5 text-white transition-colors hover:bg-[#1919af] shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                </svg>
                <span className="text-[13px] font-['Calibri'] font-bold">Regenerate</span>
              </button>
            </div>
          </div>
        </header>

        {/* AI Generated Tag */}
        <div className="flex justify-end mb-2 mt-4 lg:mt-0">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5454B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <span className="text-[14px] font-['Calibri'] font-bold text-[#5454B7]">AI Generated</span>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="mt-3 rounded-[12px] border border-[#b4b4b4] bg-white overflow-hidden shadow-sm flex flex-col">
          
          {/* Days Header Row */}
          <div className="flex border-b border-[#EEEEEE] bg-[#fdfdfd]">
            <div className="w-[60px] flex-shrink-0 border-r border-[#EEEEEE] bg-[#f8fafc]"></div>
            {days.map((d) => (
              <div key={d.key} className={`flex-1 py-4 text-center border-r border-[#EEEEEE] last:border-r-0 ${d.active ? 'bg-[#EAEAFF]' : 'bg-white'}`}>
                <p className={`text-[12px] font-['Calibri'] font-bold ${d.active ? 'text-[#000070]' : 'text-black'}`}>{d.label}</p>
                <p className={`mt-1 text-[22px] font-['Calibri'] font-bold ${d.active ? 'text-[#000070]' : 'text-black'}`}>{d.date}</p>
                {d.active ? (
                  <div className="mt-1.5 flex justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#000070]"></div>
                  </div>
                ) : (
                  <div className="mt-1.5 h-1.5 w-1.5"></div> // Spacer to keep height consistent
                )}
              </div>
            ))}
          </div>

          {/* Time & Events Grid */}
          <div className="flex relative bg-white h-[540px]">
            {/* Time Column */}
            <div className="w-[60px] flex-shrink-0 border-r border-[#EEEEEE] relative bg-white">
              {Array.from({ length: 10 }).map((_, i) => {
                const hour = i + 8;
                const label = hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
                return (
                  <div key={i} className="absolute w-full" style={{ top: `${i * 60}px` }}>
                    <span className="absolute -top-[8px] right-2 text-[11px] font-['Calibri'] font-bold text-[#8e8e8e]">{label}</span>
                  </div>
                );
              })}
            </div>

            {/* Background Lines */}
            <div className="absolute inset-y-0 left-[60px] right-0 pointer-events-none z-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute w-full border-t border-[#EEEEEE]" style={{ top: `${i * 60}px` }} />
              ))}
            </div>

            {/* Event Columns */}
            <div className="flex-1 flex relative z-10">
              {days.map((d) => (
                  <div key={d.key} className="flex-1 border-r border-[#EEEEEE] last:border-r-0 relative">
                    {(() => {
                      // collect default events for this day
                      const baseEvents = events.filter((e) => e.day === d.key);
                      // convert tasks whose deadlineISO matches this day's iso into events
                      const taskEvents = (tasks || [])
                        .filter((t) => t.deadlineISO === d.iso)
                        .map((t) => {
                          const duration = Number(t.estHours.replace(/[^0-9]/g, '')) || 1;
                          const startHour = 16; // place new tasks at 4pm by default
                          const meta = subjectMap[t.subject] ?? { color: '#8484F1' };
                          return {
                            day: d.key,
                            startHour,
                            durationHours: duration,
                            title: t.subject,
                            subtitle: t.title,
                            bg: '#f8fafc',
                            borderLeftColor: meta.color,
                            textColor: '#000',
                          };
                        });

                      const all = [...baseEvents, ...taskEvents];
                      return all.map((event, i) => (
                        <div
                          key={i}
                          className="absolute rounded-r-[8px] rounded-l-[4px] px-4 py-2.5 overflow-hidden transition-transform hover:scale-[1.01] cursor-pointer flex flex-col justify-center"
                          style={{
                            left: '8px',
                            right: '8px',
                            top: `${(event.startHour - 8) * 60 + 6}px`,
                            height: `${event.durationHours * 60 - 12}px`,
                            backgroundColor: event.bg,
                            borderLeft: `6px solid ${event.borderLeftColor}`,
                          }}
                        >
                          <p className="text-[16px] font-['Calibri'] font-bold leading-snug" style={{ color: event.textColor }}>
                            {event.title}
                          </p>
                          {event.subtitle && (
                            <p className="mt-1 text-[14px] font-['Calibri'] leading-snug" style={{ color: event.textColor }}>
                              {event.subtitle}
                            </p>
                          )}
                        </div>
                      ));
                    })()}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {groupedTaskEntries.length > 0 ? (
          <section className="mt-5 rounded-[12px] border border-[#b4b4b4] bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-[22px] leading-none font-['Calibri'] font-bold text-black">Added Tasks</h3>
              <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">Grouped by saved due date</p>
            </div>

            <div className="mt-4 space-y-6">
              {groupedTaskEntries.map(([deadlineISO, dayTasks]) => (
                <div key={deadlineISO}>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-[16px] font-['Calibri'] font-bold text-[#000070]">{formatDeadlineLabel(deadlineISO)}</h4>
                    <span className="rounded-full bg-[#f0f0ff] px-3 py-1 text-[12px] font-['Calibri'] font-bold text-[#000070]">
                      {dayTasks.length} task{dayTasks.length === 1 ? '' : 's'}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {dayTasks.map((task) => (
                      <AddedTaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Footer */}
        <footer className="mt-10 border-t border-[#b4b4b4] pt-4 text-center">
          <p className="text-[13px] font-['Calibri'] text-[#8e8e8e]">All rights reserved. Syntra 2026</p>
        </footer>
      </div>
    </main>
  );
}

export default function SchedulePage({ onSignOut, onNavigate, tasks }: { onSignOut?: () => void; onNavigate?: (page: string) => void; tasks?: PlannedTask[] }) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden md:block w-[220px] lg:w-[250px] xl:w-[270px] flex-shrink-0">
        <Sidebar onSignOut={onSignOut} onNavigate={onNavigate} />
      </div>
      <div className="flex-1 min-w-0 overflow-y-auto">
        <ScheduleMain tasks={tasks} />
      </div>
    </div>
  );
}
