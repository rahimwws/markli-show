import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '../../model/types';

import { mmkvStorage } from '@/shared/lib';

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setReferredBy: (referredBy: string) => void;
  setAvatar: (avatar: string) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        email: '',
        name: '',
        avatar: '',
        subscriptionStatus: 'free',
        credits: 0,
        referralCode: '',
        referredBy: '',
        token: '',
      },
      setUser: (user) => set({ user }),
      setName: (name) =>
        set((state) => {
          if (!state.user) return state;
          return {
            user: { ...state.user, name },
          };
        }),
      setEmail: (email) =>
        set((state) => {
          if (!state.user) return state;
          return { user: { ...state.user, email } };
        }),
      setReferredBy: (referredBy) =>
        set((state) => {
          if (!state.user) return state;
          return { user: { ...state.user, referredBy } };
        }),
      setAvatar: (avatar) =>
        set((state) => {
          if (!state.user) return state;
          return { user: { ...state.user, avatar } };
        }),
      setToken: (token) =>
        set((state) => {
          if (!state.user) return state;
          return { user: { ...state.user, token } };
        }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-data',
      storage: mmkvStorage,
    }
  )
);
