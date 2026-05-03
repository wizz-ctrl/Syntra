import { useState } from 'react'
import DashboardPage from './components/DashboardPage'
import LoginPage from './components/LoginPage'
import AnalyticsPage from './components/AnalyticsPage'
import SignupPage from './components/SignupPage'
import AddTaskPage from './components/AddTaskPage'
import SchedulePage from './components/SchedulePage'
import './index.css'

type Screen = 'dashboard' | 'login' | 'analytics' | 'signup' | 'tasks' | 'schedule'

function handleNav(page: string, setScreen: (s: Screen) => void) {
  const map: Record<string, Screen> = {
    home: 'dashboard',
    tasks: 'tasks',
    analytics: 'analytics',
    login: 'login',
    signup: 'signup',
    schedule: 'schedule',
  }
  if (map[page]) setScreen(map[page])
}

function App() {
  const [screen, setScreen] = useState<Screen>('login')

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
    return <AddTaskPage onNavigate={(page) => handleNav(page, setScreen)} onSignOut={() => setScreen('login')} />
  }

  if (screen === 'schedule') {
    return <SchedulePage onNavigate={(page) => handleNav(page, setScreen)} onSignOut={() => setScreen('login')} />
  }

  return <DashboardPage onSignOut={() => setScreen('login')} onNavigate={(page) => handleNav(page, setScreen)} />
}

export default App
