import { ExtensionStorage } from '@bacons/apple-targets';
import { isAxiosError } from 'axios';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useCallback } from 'react';

import { useLogin } from '../../hooks/useLogin';

import { useUserStore } from '@/entities/user';
import { useToast } from '@/shared/lib';
import { useAppNavigation } from '@/shared/lib/navigation';
import ProtectIcon from '@/shared/ui/Icons/Protect';
import { useTheme } from '@/theme/useTheme';
// icons

export const useAppleSignIn = () => {
  const { showToast } = useToast();
  const { colors } = useTheme();
  const { mutate: login } = useLogin();
  const navigation = useAppNavigation();
  const widgetStore = new ExtensionStorage('group.com.markli.widget');
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const handleAppleSignIn = useCallback(async () => {
    widgetStore.set('name', 'rahim');
    ExtensionStorage.reloadWidget();
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      setUser({
        email: credential.email || '',
        name: credential.fullName?.givenName || '',
        avatar: '',
        subscriptionStatus: 'free',
        credits: 0,
        referralCode: '',
        referredBy: '',
        token: '',
      });
      login(
        {
          email: credential.email || '',
        },
        {
          onSuccess: (data) => {
            setToken(data.data.access_token);
            navigation.navigate('Service');
          },
          onError: (error) => {
            if (isAxiosError(error)) {
              showToast(error.response?.data.message, 'error');
            }
            navigation.navigate('Name');
          },
        }
      );
      return credential;
    } catch (e: any) {
      if (e.code === 'ERR_REQUEST_CANCELED') {
        showToast(
          'User canceled the sign-in flow',
          'info',
          5000,
          <ProtectIcon fill={colors.accent.red} />
        );
      } else {
        showToast(
          'Error signing in with Apple',
          'error',
          5000,
          <ProtectIcon fill={colors.accent.red} />
        );
      }
      return null;
    }
  }, [showToast]);

  return { handleAppleSignIn };
};
