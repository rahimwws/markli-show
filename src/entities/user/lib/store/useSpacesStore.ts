import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { mmkvStorage } from '@/shared/lib';

type Space = {
  id: string;
  name: string;
};

type SpacesStore = {
  spaces: Space[];
  addSpace: (space: Space) => void;
  removeSpace: (id: string) => void;
  initializeSpaces: () => void;
};

export const useSpacesStore = create<SpacesStore>(
  persist(
    (set) => ({
      spaces: [
        { id: 'all', name: 'All' },
        { id: 'research', name: 'UI/UX Research' },
        { id: 'development', name: 'Development' },
        { id: 'design', name: 'Design' },
        { id: 'marketing', name: 'Marketing' },
      ],

      addSpace: (space) => set((state) => ({ spaces: [...state.spaces, space] })),

      removeSpace: (id) =>
        set((state) => ({ spaces: state.spaces.filter((space) => space.id !== id) })),

      initializeSpaces: () => {
        // this function can be used to fetch spaces from api if needed
        // set({
        //   spaces: [
        //     { id: 'all', name: 'All' },
        //     { id: 'research', name: 'UI/UX Research' },
        //     { id: 'development', name: 'Development' },
        //     { id: 'design', name: 'Design' },
        //     { id: 'marketing', name: 'Marketing' },
        //   ],
        // });
      },
    }),
    {
      name: 'user-spaces',
      storage: mmkvStorage,
    }
  )
);
