import { useState } from 'react'
import DashboardPage from './components/DashboardPage'
import LoginPage from './components/LoginPage'
import AnalyticsPage from './components/AnalyticsPage'
import SignupPage from './components/SignupPage'
import AddTaskPage from './components/AddTaskPage'
import SchedulePage from './components/SchedulePage'
import ProfilePage from './components/ProfilePage'
import { type PlannedTask } from './taskPlanner'
import './index.css'

type Screen = 'dashboard' | 'login' | 'analytics' | 'signup' | 'tasks' | 'schedule' | 'profile'

function handleNav(page: string, setScreen: (s: Screen) => void) {
  const map: Record<string, Screen> = {
    home: 'dashboard',
    tasks: 'tasks',
    analytics: 'analytics',
    login: 'login',
    signup: 'signup',
    schedule: 'schedule',
    profile: 'profile',
  }
  if (map[page]) setScreen(map[page])
}

function App() {
  const [screen, setScreen] = useState<Screen>('login')
  const [tasks, setTasks] = useState<PlannedTask[]>([])

  const handleCreateTask = (task: PlannedTask) => {
    setTasks((current) => [...current, task])
    setScreen('dashboard')
  }

  if (screen === 'login') {
    return <LoginPage onLogin={() => setScreen('dashboard')} onNavigate={(page) => handleNav(page, setScreen)} />
  }

  if (screen === 'signup') {
    return <SignupPage onSignup={() => setScreen('login')} onNavigate={(page) => handleNav(page, setScreen)} />
  }

  if (screen === 'analytics') {
    return <AnalyticsPage onNavigate={(page) => handleNav(page, setScreen)} onSignOut={() => setScreen('login')} />
  }

  if (screen === 'tasks') {
    return <AddTaskPage onNavigate={(page) => handleNav(page, setScreen)} onSignOut={() => setScreen('login')} onCreateTask={handleCreateTask} />
  }

  if (screen === 'schedule') {
    return <SchedulePage onNavigate={(page) => handleNav(page, setScreen)} onSignOut={() => setScreen('login')} tasks={tasks} />
  }

  if (screen === 'profile') {
    return <ProfilePage onNavigate={(page) => handleNav(page, setScreen)} onSignOut={() => setScreen('login')} />
  }

  return <DashboardPage onSignOut={() => setScreen('login')} onNavigate={(page) => handleNav(page, setScreen)} tasks={tasks} />
}

export default App
