import { useUserStore } from '../../lib/store/useUserStore';

export const useUser = () => useUserStore((state) => state.user);
export const useIsAuthenticated = () => useUserStore((state) => !!state.user?.token);
