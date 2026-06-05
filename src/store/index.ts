import { create } from 'zustand';

interface AuthStore {
  user: any | null;
  role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN' | null;
  isLoading: boolean;
  setUser: (user: any) => void;
  setRole: (role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  role: null,
  isLoading: true,
  setUser: (user) => set({ user, isLoading: false }),
  setRole: (role) => set({ role }),
  logout: () => set({ user: null, role: null }),
}));

interface StudentStore {
  studentProfile: any | null;
  progress: any[];
  dailyStreak: number;
  setStudentProfile: (profile: any) => void;
  setProgress: (progress: any[]) => void;
  setDailyStreak: (streak: number) => void;
}

export const useStudentStore = create<StudentStore>((set) => ({
  studentProfile: null,
  progress: [],
  dailyStreak: 0,
  setStudentProfile: (profile) => set({ studentProfile: profile }),
  setProgress: (progress) => set({ progress }),
  setDailyStreak: (streak) => set({ dailyStreak: streak }),
}));

interface UIStore {
  sidebarOpen: boolean;
  darkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  darkMode: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
