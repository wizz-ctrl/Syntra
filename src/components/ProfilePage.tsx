import { useState } from "react";
import { Clock, Bell, LogOut, Edit2, Save } from "lucide-react";

import imgLogoMark from '../assets/Rectangle 6.png';
import iconHome from '../assets/iconstack.io - (Home).svg';
import iconActiveDot from '../assets/Ellipse 1.svg';
import iconTasks from '../assets/iconstack.io - (Task Done 01).svg';
import iconSchedule from '../assets/iconstack.io - (Event Schedule).svg';
import iconAnalytics from '../assets/iconstack.io - (Googleanalytics).svg';
import iconProfile from '../assets/iconstack.io - (Profile Circle).svg';
import iconLogout from '../assets/iconstack.io - (Log Out).svg';

const COLORS = {
  primary: "#00008B",
  bgLight: "#E8E8FF",
  bgSoft: "#F0F0FF",
  bgPage: "#F4F4FF",
  border: "#DCDCF5",
};

type ProfileInfo = {
  name: string;
  email: string;
  university: string;
  program: string;
};

const menuItems = [
  { label: 'Home', icon: iconHome },
  { label: 'Tasks', icon: iconTasks },
  { label: 'Schedule', icon: iconSchedule },
  { label: 'Analytics', icon: iconAnalytics },
  { label: 'Profile', icon: iconProfile, active: true },
];

type ProfilePageProps = {
  onNavigate?: (page: string) => void;
  onSignOut?: () => void;
};

function Sidebar({ onNavigate, onSignOut }: { onNavigate?: (page: string) => void; onSignOut?: () => void }) {
  return (
    <aside className="hidden md:flex h-screen flex-col border-r border-[#b4b4b4] bg-white px-4 py-5 lg:px-5 overflow-y-auto">
      <div className="flex items-center gap-2 px-1">
        <img src={imgLogoMark} alt="Syntra" className="h-[38px] w-[85px] object-contain object-left" />
        <h1 className="font-poetsen-one text-[22px] leading-none text-[#000070] lg:text-[24px]">Syntra</h1>
      </div>

      <p className="mt-7 px-1 text-[12px] font-['Calibri'] font-bold text-[#000070] lg:text-[13px]">MENU</p>

      <nav className="mt-3 space-y-2 flex-1">
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

export default function ProfilePage({ onNavigate, onSignOut }: ProfilePageProps) {
  const [profile, setProfile] = useState<ProfileInfo>({
    name: 'Taimoor Safdar',
    email: 'tsafdar.bscs23seecs',
    university: 'SEECS, NUST',
    program: 'BS Computer Science',
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileStatus, setProfileStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [hoursPerDay, setHoursPerDay] = useState(4);
  const [notificationMin, setNotificationMin] = useState(15);
  const [prefTime, setPrefTime] = useState("afternoon");
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | saving | saved

  const handleEditProfile = () => {
    setIsEditingProfile(true);
    setProfileStatus('idle');
  };

  const handleSaveProfile = () => {
    setProfileStatus('saving');
    setTimeout(() => {
      setProfileStatus('saved');
      setIsEditingProfile(false);
    }, 350);
    setTimeout(() => {
      setProfileStatus('idle');
    }, 1800);
  };

  const handleSave = () => {
    setStatus("saving");
    setTimeout(() => { setStatus("saved"); }, 1000);
    setTimeout(() => { setStatus("idle"); }, 2500);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Sidebar */}
      <Sidebar onNavigate={onNavigate} onSignOut={onSignOut} />

      {/* Main */}
      <div style={{ flex: 1, background: COLORS.bgPage, padding: "40px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#111", marginBottom: "40px" }}>
          Profile Settings
        </h1>

        {/* Avatar Section */}
        <div style={{
          background: "#fff", borderRadius: "16px", padding: "32px",
          marginBottom: "24px", border: `1px solid ${COLORS.border}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{
              width: "80px", height: "80px",
              borderRadius: "50%", background: COLORS.primary,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "32px", fontWeight: "700", color: "#fff",
            }}>T</div>
            <div>
              <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#111" }}>{profile.name}</h2>
              <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#666" }}>{profile.email}</p>
            </div>
            <button type="button" onClick={isEditingProfile ? handleSaveProfile : handleEditProfile} style={{
              marginLeft: "auto", padding: "10px 16px",
              border: `1.5px solid ${COLORS.primary}`, borderRadius: "10px",
              background: isEditingProfile ? COLORS.primary : "none", color: isEditingProfile ? "#fff" : COLORS.primary,
              fontWeight: "600", cursor: "pointer", fontSize: "13px", fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {isEditingProfile ? <Save size={14} style={{ marginRight: "6px", display: "inline" }} /> : <Edit2 size={14} style={{ marginRight: "6px", display: "inline" }} />}
              {isEditingProfile ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Personal Info Card */}
        <div style={{
          background: "#fff", borderRadius: "16px", padding: "32px",
          marginBottom: "24px", border: `1px solid ${COLORS.border}`,
        }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: COLORS.primary, marginTop: 0, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Personal Information
          </h3>
          <div style={{ display: "grid", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "6px" }}>Name</label>
              <input
                type="text"
                value={profile.name}
                readOnly={!isEditingProfile}
                onChange={(event) => setProfile((current) => ({ ...current, name: event.target.value }))}
                style={{
                width: "100%", padding: "10px 12px", border: `1px solid ${COLORS.border}`,
                borderRadius: "10px", fontSize: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isEditingProfile ? "#fff" : COLORS.bgSoft, color: "#111",
                cursor: isEditingProfile ? "text" : "default",
              }} />
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "6px" }}>Email</label>
              <input
                type="email"
                value={profile.email}
                readOnly={!isEditingProfile}
                onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
                style={{
                width: "100%", padding: "10px 12px", border: `1px solid ${COLORS.border}`,
                borderRadius: "10px", fontSize: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isEditingProfile ? "#fff" : COLORS.bgSoft, color: "#111",
                cursor: isEditingProfile ? "text" : "default",
              }} />
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "6px" }}>University</label>
              <input
                type="text"
                value={profile.university}
                readOnly={!isEditingProfile}
                onChange={(event) => setProfile((current) => ({ ...current, university: event.target.value }))}
                style={{
                width: "100%", padding: "10px 12px", border: `1px solid ${COLORS.border}`,
                borderRadius: "10px", fontSize: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isEditingProfile ? "#fff" : COLORS.bgSoft, color: "#111",
                cursor: isEditingProfile ? "text" : "default",
              }} />
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "6px" }}>Program</label>
              <input
                type="text"
                value={profile.program}
                readOnly={!isEditingProfile}
                onChange={(event) => setProfile((current) => ({ ...current, program: event.target.value }))}
                style={{
                width: "100%", padding: "10px 12px", border: `1px solid ${COLORS.border}`,
                borderRadius: "10px", fontSize: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: isEditingProfile ? "#fff" : COLORS.bgSoft, color: "#111",
                cursor: isEditingProfile ? "text" : "default",
              }} />
            </div>
            <p style={{ margin: 0, fontSize: "12px", color: profileStatus === 'saved' ? '#16a34a' : '#666' }}>
              {profileStatus === 'saving' ? 'Saving profile changes...' : profileStatus === 'saved' ? 'Profile saved.' : isEditingProfile ? 'Edit the fields above, then click Save Profile.' : 'Click Edit Profile to make changes.'}
            </p>
          </div>
        </div>

        {/* Study Preferences Card */}
        <div style={{
          background: "#fff", borderRadius: "16px", padding: "32px",
          marginBottom: "24px", border: `1px solid ${COLORS.border}`,
        }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: COLORS.primary, marginTop: 0, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Study Preferences
          </h3>

          {/* Hours Stepper */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "10px" }}>
              <Clock size={12} style={{ marginRight: "4px", display: "inline" }} /> Available Hours Per Day
            </label>
            <div style={{
              display: "flex", alignItems: "center", gap: "12px",
              border: `1px solid ${COLORS.border}`, borderRadius: "10px",
              width: "fit-content", padding: "8px",
              background: COLORS.bgSoft,
            }}>
              <button onClick={() => setHoursPerDay(h => Math.max(1, h - 1))}
                style={{ padding: "6px 12px", background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: COLORS.primary }}>
                −
              </button>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#111", minWidth: "40px", textAlign: "center" }}>
                {hoursPerDay}h
              </span>
              <button onClick={() => setHoursPerDay(h => Math.min(8, h + 1))}
                style={{ padding: "6px 12px", background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: COLORS.primary }}>
                +
              </button>
            </div>
          </div>

          {/* Notification Timing */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "10px" }}>
              <Bell size={12} style={{ marginRight: "4px", display: "inline" }} /> Notification Timing
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              {[15, 30, 60].map(min => (
                <button key={min}
                  onClick={() => setNotificationMin(min)}
                  style={{
                    padding: "10px 16px", borderRadius: "10px",
                    border: `1.5px solid ${notificationMin === min ? COLORS.primary : COLORS.border}`,
                    background: notificationMin === min ? COLORS.bgLight : "#fff",
                    color: notificationMin === min ? COLORS.primary : "#666",
                    cursor: "pointer", fontSize: "13px", fontWeight: "600", fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                  {min}min
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Study Time */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#666", display: "block", marginBottom: "10px" }}>Preferred Study Time</label>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { id: "morning", label: "Early Morning (5–8 AM)" },
                { id: "afternoon", label: "Afternoon (12–4 PM)" },
                { id: "evening", label: "Evening (7–11 PM)" },
              ].map(opt => (
                <label key={opt.id} style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "13px" }}>
                  <input type="radio" name="studyTime" checked={prefTime === opt.id}
                    onChange={() => setPrefTime(opt.id)} style={{ cursor: "pointer" }} />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#111" }}>Dark Mode</label>
            <button onClick={() => setDarkMode(!darkMode)}
              style={{
                width: "48px", height: "28px", borderRadius: "14px",
                background: darkMode ? COLORS.primary : "#ddd",
                border: "none", cursor: "pointer", transition: "all 0.2s",
                position: "relative",
              }}>
              <div style={{
                width: "24px", height: "24px", borderRadius: "50%",
                background: "#fff", position: "absolute",
                top: "2px", left: darkMode ? "22px" : "2px",
                transition: "left 0.2s",
              }} />
            </button>
          </div>

          {/* Save Button */}
          <button onClick={handleSave}
            style={{
              width: "100%", padding: "14px",
              background: status === "saved" ? "#10B981" : COLORS.primary,
              border: "none", borderRadius: "12px",
              color: "#fff", fontSize: "14px", fontWeight: "700",
              cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { if (status === "idle") e.target.style.background = "#000060"; }}
            onMouseLeave={e => { if (status === "idle") e.target.style.background = COLORS.primary; }}>
            {status === "saved" ? "✓  Preferences Saved" :
             status === "saving" ? "Saving…" :
             <>
               <Save size={14} style={{ marginRight: "8px", display: "inline" }} />
               Save Preferences
             </>}
          </button>
        </div>

        {/* Sign Out Button */}
        <button onClick={onSignOut} style={{
          width: "100%", padding: "14px",
          background: "none", border: `1.5px solid #EF4444`,
          borderRadius: "12px", color: "#EF4444", fontSize: "14px", fontWeight: "700",
          cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
        }}>
          <LogOut size={14} /> Sign Out
        </button>
      </div>
    </div>
  );
}