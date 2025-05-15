import { MMKV } from 'react-native-mmkv';
import { PersistStorage } from 'zustand/middleware';

export const storage = new MMKV({
  id: 'user-data',
});

export const mmkvStorage: PersistStorage<any> = {
  setItem: (key, value) => storage.set(key, JSON.stringify(value)),
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (key: string) => storage.delete(key),
};
