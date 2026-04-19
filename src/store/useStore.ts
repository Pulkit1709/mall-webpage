import { create } from 'zustand'

export type ModalConfig = {
  type: 'general' | 'lease' | 'sponsor' | 'events' | 'dining' | 'entertainment'
  title: string
  tag: string
  body: string
  defaultInterest?: string
}

export type ThemeMode = 'dark' | 'light'
export type UserPath = 'all' | 'retail' | 'luxury' | 'sponsor' | 'events'

interface AppState {
  theme: ThemeMode
  toggleTheme: () => void
  modal: { isOpen: boolean; config: ModalConfig | null }
  openModal: (config: ModalConfig) => void
  closeModal: () => void
  activeSection: string
  setActiveSection: (id: string) => void
  isNavScrolled: boolean
  setNavScrolled: (v: boolean) => void
  userPath: UserPath
  setUserPath: (path: UserPath) => void
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  modal: { isOpen: false, config: null },
  openModal: (config) => set({ modal: { isOpen: true, config } }),
  closeModal: () => set((state) => ({ modal: { ...state.modal, isOpen: false } })),
  activeSection: 'hero',
  setActiveSection: (id) => set({ activeSection: id }),
  isNavScrolled: false,
  setNavScrolled: (v) => set({ isNavScrolled: v }),
  userPath: 'all',
  setUserPath: (path) => set({ userPath: path })
}))
