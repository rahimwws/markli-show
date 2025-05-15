import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { mmkvStorage } from '@/shared/lib';

type Folder = {
  id: string;
  name: string;
  iconID: number;
  color: string;
  isIconEmoji: boolean;
};

type FolderStore = {
  folders: Folder[];
  createFolder(folder: Folder): void;
  updateFolder(id: string, updates: Partial<Folder>): void;
  deleteFolder(id: string): void;
};

export const useFolderStore = create<FolderStore>()(
  persist(
    (set, get) => ({
      folders: [],

      createFolder: (folder) => {
        const newFolder: Folder = {
          ...folder,
        };
        set((state) => ({
          folders: [...state.folders, newFolder],
        }));
      },

      updateFolder: (id, updates) =>
        set((state) => ({
          folders: state.folders.map((folder) =>
            folder.id === id ? { ...folder, ...updates } : folder
          ),
        })),

      deleteFolder: (id) =>
        set((state) => ({
          folders: state.folders.filter((folder) => folder.id !== id),
        })),
    }),
    {
      name: 'folders',
      storage: mmkvStorage,
    }
  )
);
