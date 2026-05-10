export type TaskPriority = 'Low' | 'Medium' | 'High';

export type PlannedTask = {
  id: string;
  title: string;
  subject: string;
  deadlineISO: string;
  deadlineLabel: string;
  estHours: string;
  priority: TaskPriority;
  notes: string;
};

export type WeekDay = {
  key: string;
  label: string;
  date: number;
  iso: string;
  active: boolean;
};

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function formatLocalISODate(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function formatDeadlineLabel(dateISO: string) {
  const date = new Date(`${dateISO}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateISO;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatLongDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function getWeekDays(referenceDate = new Date()): WeekDay[] {
  const today = new Date(referenceDate);
  today.setHours(0, 0, 0, 0);

  const dayIndex = today.getDay();
  const mondayOffset = dayIndex === 0 ? -6 : 1 - dayIndex;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);

  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
  const result: WeekDay[] = [];

  for (let index = 0; index < 5; index += 1) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    const iso = formatLocalISODate(date);
    result.push({
      key: formatter.format(date).toUpperCase(),
      label: formatter.format(date).toUpperCase(),
      date: date.getDate(),
      iso,
      active: date.toDateString() === today.toDateString(),
    });
  }

  return result;
}

export function isSameIsoDay(firstISO: string, secondISO: string) {
  return firstISO === secondISO;
}

export function parseDeadlineInput(value: string) {
  const isoDate = value.match(/^\d{4}-\d{2}-\d{2}$/);
  if (isoDate) return value;

  const slashDate = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!slashDate) return '';

  const [, day, month, year] = slashDate;
  return `${year}-${month}-${day}`;
}

export function createTaskId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}