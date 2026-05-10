import { useState } from 'react';

// Images
import imgLogoMark from '../assets/Rectangle 6.png';
import imgOperatingSystems from '../assets/Add task page Operating systems div image.png';
import imgDeepLearning from '../assets/Add task page Deep Learning div image.png';
import imgCyberSecurity from '../assets/Add task page Cyber security div image.png';
import imgCompilerConstruction from '../assets/Add Task page Compiler Construction Div image.png';
import imgParallelDistributed from '../assets/Add Task page Parallel and Distributed Programming Div image.png';
import imgOther from '../assets/Add Task page Other Div image.png';

// Icons
import iconHome from '../assets/iconstack.io - (Home).svg';
import iconActiveDot from '../assets/Ellipse 1.svg';
import iconTasks from '../assets/iconstack.io - (Task Done 01).svg';
import iconSchedule from '../assets/iconstack.io - (Event Schedule).svg';
import iconAnalytics from '../assets/iconstack.io - (Googleanalytics).svg';
import iconProfile from '../assets/iconstack.io - (Profile Circle).svg';
import iconLogout from '../assets/iconstack.io - (Log Out).svg';
import iconBook from '../assets/iconstack.io - (Book).svg';
import iconCalendar from '../assets/iconstack.io - (Calendar Event).svg';
import iconChevronDown from '../assets/iconstack.io - (Chevron Down).svg';
import iconChevronUp from '../assets/iconstack.io - (Chevron Up).svg';
import iconClose from '../assets/iconstack.io - (Multiply Line).svg';
import { createTaskId, formatDeadlineLabel, parseDeadlineInput, type PlannedTask, type TaskPriority } from '../taskPlanner';

const menuItems = [
  { label: 'Home', icon: iconHome },
  { label: 'Tasks', icon: iconTasks, active: true },
  { label: 'Schedule', icon: iconSchedule },
  { label: 'Analytics', icon: iconAnalytics },
  { label: 'Profile', icon: iconProfile },
];

const subjects = [
  { name: 'Operating Systems', image: imgOperatingSystems, color: '#000070' },
  { name: 'Deep Learning', image: imgDeepLearning, color: '#58A1E1' },
  { name: 'Cyber Security', image: imgCyberSecurity, color: '#1B1BFC' },
  { name: 'Parallel and Distributed Computing', image: imgParallelDistributed, color: '#8484F1' },
  { name: 'Compiler Construction', image: imgCompilerConstruction, color: '#5454B7' },
  { name: 'Other', image: imgOther, color: '#8E8E8E' },
];

type AddTaskPageProps = {
  onSignOut?: () => void;
  onNavigate?: (page: string) => void;
  onCreateTask?: (task: PlannedTask) => void;
};

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

function AddTaskMain({
  onNavigate,
  onCreateTask,
}: {
  onNavigate?: (page: string) => void;
  onCreateTask?: (task: PlannedTask) => void;
}) {
  const [taskTitle, setTaskTitle] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [deadline, setDeadline] = useState('');
  const [estHours, setEstHours] = useState('1h');
  const [priority, setPriority] = useState<TaskPriority>('Medium');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedDeadline = parseDeadlineInput(deadline);

    if (!selectedSubject || !normalizedDeadline) {
      setFormError('Please choose a subject and deadline before saving the task.');
      return;
    }

    setFormError('');

    const task: PlannedTask = {
      id: createTaskId(),
      title: taskTitle.trim(),
      subject: selectedSubject,
      deadlineISO: normalizedDeadline,
      deadlineLabel: formatDeadlineLabel(normalizedDeadline),
      estHours,
      priority,
      notes: notes.trim(),
    };

    onCreateTask?.(task);
    onNavigate?.('home');
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-y-auto flex flex-col">
      <div className="flex-1 flex flex-col p-5 lg:p-8">
        
        {/* Main Card */}
        <div className="relative mx-auto w-full max-w-[800px] rounded-[24px] bg-white p-6 shadow-sm border border-[#e2e8f0] lg:p-10">
          
          {/* Close Button */}
          <button
            type="button"
            onClick={() => onNavigate?.('home')}
            className="absolute top-6 right-6 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] transition-colors"
          >
            <img src={iconClose} alt="Close" className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#e0e7ff]">
              <img src={iconBook} alt="" className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-[26px] font-['Calibri'] font-bold text-[#0f172a] leading-none lg:text-[28px]">Add New Task</h2>
              <p className="mt-1.5 text-[14px] font-['Calibri'] text-[#3b82f6]">AI Scheduling Engine will plan this automatically</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* Task Title */}
            <div>
              <label className="mb-2 block text-[15px] font-['Calibri'] font-bold text-[#0f172a]">
                Task Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="e.g Complete Integration Exercises"
                className="h-[52px] w-full rounded-[12px] border border-[#cbd5e1] bg-white px-4 font-['Calibri'] text-[15px] text-[#0f172a] placeholder-[#94a3b8] focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Subject Selection */}
            <div>
              <label className="mb-3 block text-[15px] font-['Calibri'] font-bold text-[#0f172a]">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <button
                    key={subject.name}
                    type="button"
                    onClick={() => setSelectedSubject(subject.name)}
                    className={`flex flex-col items-center overflow-hidden rounded-[16px] border-2 bg-white transition-all hover:shadow-md ${
                      selectedSubject === subject.name
                        ? 'border-[#3b82f6] shadow-[0px_2px_8px_0px_rgba(59,130,246,0.2)]'
                        : 'border-[#e2e8f0]'
                    }`}
                  >
                    <div className="flex h-[110px] w-full items-center justify-center p-3">
                      <img src={subject.image} alt="" className="h-full w-full object-contain" />
                    </div>
                    <div className="flex w-full items-center justify-center border-t border-[#e2e8f0] bg-white py-3 px-2 text-center min-h-[50px]">
                      <span className="text-[14px] font-['Calibri'] font-bold text-[#0f172a] leading-tight">{subject.name}</span>
                    </div>
                  </button>
                ))}
              </div>
              {formError && <p className="mt-3 text-[13px] font-['Calibri'] text-[#ef4444]">{formError}</p>}
            </div>

            {/* Deadline & Est. Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deadline */}
              <div>
                <label className="mb-2 block text-[15px] font-['Calibri'] font-bold text-[#0f172a]">
                  Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="h-[52px] w-full rounded-[12px] border border-[#cbd5e1] bg-white px-4 pr-12 font-['Calibri'] text-[15px] text-[#0f172a] placeholder-[#94a3b8] focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                  />
                  <img src={iconCalendar} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-50" />
                </div>
              </div>

              {/* Est. Hours */}
              <div>
                <label className="mb-2 block text-[15px] font-['Calibri'] font-bold text-[#0f172a]">
                  Est. Hours
                </label>
                <div className="flex h-[52px] w-full items-center justify-between rounded-[12px] border border-[#cbd5e1] bg-white px-4 focus-within:border-[#3b82f6] focus-within:ring-1 focus-within:ring-[#3b82f6]">
                  <span className="font-['Calibri'] text-[15px] text-[#0f172a]">{estHours}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <button type="button" onClick={() => setEstHours('2h')} className="hover:bg-gray-100 p-0.5 rounded"><img src={iconChevronUp} alt="" className="h-[10px] w-[10px]" /></button>
                      <button type="button" onClick={() => setEstHours('1h')} className="hover:bg-gray-100 p-0.5 rounded mt-0.5"><img src={iconChevronDown} alt="" className="h-[10px] w-[10px]" /></button>
                    </div>
                    <img src={iconChevronDown} alt="" className="h-4 w-4 ml-2 opacity-50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Priority Level */}
            <div>
              <label className="mb-3 block text-[15px] font-['Calibri'] font-bold text-[#0f172a]">
                Priority Level
              </label>
              <div className="flex flex-col gap-4 md:flex-row">
                {/* LOW */}
                <button
                  type="button"
                  onClick={() => setPriority('Low')}
                  className={`flex-1 rounded-[16px] border-2 p-5 text-left transition-all ${
                    priority === 'Low' ? 'border-[#22c55e] bg-[#f0fdf4]' : 'border-[#e2e8f0] bg-white hover:border-[#22c55e]'
                  }`}
                >
                  <p className="text-[18px] font-['Calibri'] font-bold text-[#22c55e]">LOW</p>
                  <p className="mt-1 text-[13px] font-['Calibri'] text-[#64748b]">Flexible Deadline</p>
                </button>
                {/* Medium */}
                <button
                  type="button"
                  onClick={() => setPriority('Medium')}
                  className={`flex-1 rounded-[16px] border-2 p-5 text-left transition-all ${
                    priority === 'Medium' ? 'border-[#eab308] bg-[#fefce8]' : 'border-[#e2e8f0] bg-white hover:border-[#eab308]'
                  }`}
                >
                  <p className="text-[18px] font-['Calibri'] font-bold text-[#eab308]">Medium</p>
                  <p className="mt-1 text-[13px] font-['Calibri'] text-[#64748b]">Due this week</p>
                </button>
                {/* High */}
                <button
                  type="button"
                  onClick={() => setPriority('High')}
                  className={`flex-1 rounded-[16px] border-2 p-5 text-left transition-all ${
                    priority === 'High' ? 'border-[#ef4444] bg-[#fef2f2]' : 'border-[#e2e8f0] bg-white hover:border-[#ef4444]'
                  }`}
                >
                  <p className="text-[18px] font-['Calibri'] font-bold text-[#ef4444]">High</p>
                  <p className="mt-1 text-[13px] font-['Calibri'] text-[#64748b]">Urgent / Due Soon</p>
                </button>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="mb-2 block text-[15px] font-['Calibri'] font-bold text-[#0f172a]">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any extra Context, Chapters, Reminders or References......."
                rows={4}
                className="w-full rounded-[16px] border border-[#cbd5e1] bg-white px-5 py-4 font-['Calibri'] text-[15px] text-[#0f172a] placeholder-[#94a3b8] resize-none focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => onNavigate?.('home')}
                className="h-[52px] rounded-[12px] border border-[#cbd5e1] bg-white px-8 font-['Calibri'] text-[15px] font-bold text-[#334155] hover:bg-[#f8fafc] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-[52px] rounded-[12px] bg-[#000070] px-10 font-['Calibri'] text-[16px] font-bold text-white hover:bg-[#1919af] transition-colors"
              >
                Save Task
              </button>
            </div>

          </form>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8 pb-4 text-center">
          <p className="text-[12px] font-['Inter'] text-[#94a3b8]">All rights reserved. Syntra 2028</p>
        </footer>
      </div>
    </main>
  );
}

export default function AddTaskPage({ onSignOut, onNavigate, onCreateTask }: AddTaskPageProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden md:block w-[220px] lg:w-[250px] xl:w-[270px] flex-shrink-0">
        <Sidebar onSignOut={onSignOut} onNavigate={onNavigate} />
      </div>
      <div className="flex-1 min-w-0 overflow-y-auto">
        <AddTaskMain onNavigate={onNavigate} onCreateTask={onCreateTask} />
      </div>
    </div>
  );
}
