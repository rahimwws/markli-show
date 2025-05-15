import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { mmkvStorage } from '@/shared/lib';

type Tag = {
  id: number;
  name: string;
};

type TagStore = {
  tags: Tag[];
  createTag(Tag: Tag): void;
  updateTag(id: number, updates: Partial<Tag>): void;
  deleteTag(id: number): void;
};

export const useTagStore = create<TagStore>()(
  persist(
    (set, get) => ({
      tags: [],

      createTag: (tag) => {
        const newTag: Tag = {
          ...tag,
        };
        set((state) => ({
          tags: [...state.tags, newTag],
        }));
      },

      updateTag: (id, updates) =>
        set((state) => ({
          tags: state.tags.map((tag) => (tag.id === id ? { ...tag, ...updates } : tag)),
        })),

      deleteTag: (id) =>
        set((state) => ({
          tags: state.tags.filter((tag) => tag.id !== id),
        })),
    }),
    {
      name: 'tags',
      storage: mmkvStorage,
    }
  )
);
