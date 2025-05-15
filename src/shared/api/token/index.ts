import axios from 'axios';

import { useUserStore } from '@/entities/user';

/**
 * Refreshes the authentication token
 * @param refreshToken The refresh token to use for getting a new access token
 * @returns A promise that resolves to the new access token
 */
export const refreshToken = async (refreshToken: string): Promise<string> => {
  try {
    const response = await axios.post('/auth/refresh-token', {
      refresh_token: refreshToken,
    });

    const { access_token, user } = response.data.data;

    // Update the user in the store with the new token and user data
    const userStore = useUserStore.getState();
    if (userStore.user) {
      userStore.setUser({
        ...userStore.user,
        token: access_token,
        ...user,
      });
    }

    return access_token;
  } catch (error) {
    // Clear user data on refresh failure
    useUserStore.getState().clearUser();
    throw error;
  }
};

/**
 * Gets the current authentication token from the user store
 * @returns The current authentication token or null if not authenticated
 */
export const getToken = (): string | null => {
  const user = useUserStore.getState().user;
  return user?.token || null;
};

/**
 * Removes the current authentication token from the user store
 */
export const removeToken = (): void => {
  useUserStore.getState().clearUser();
};
