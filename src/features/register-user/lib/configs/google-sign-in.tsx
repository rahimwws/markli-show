import { isAxiosError } from 'axios';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';

import { useLogin } from '../../hooks/useLogin';

import { useUserStore } from '@/entities/user';
import { useToast } from '@/shared/lib';
import { useAppNavigation } from '@/shared/lib/navigation';
const config = {
  iosClientId: process.env.GOOGLE_IOS_CLIENT_ID,
  androidClientId: process.env.GOOGLE_ANDROID_CLIENT_ID,
};

export const useGoogleSignIn = () => {
  const [, response, promptAsync] = Google.useAuthRequest(config);
  const { showToast } = useToast();
  const navigation = useAppNavigation();
  const { mutate: login } = useLogin();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  useEffect(() => {
    handleGoogleSignIn();
  }, [response]);

  const handleGoogleSignIn = async () => {
    if (response?.type === 'success') {
      const { authentication } = response;
      const accessToken = authentication?.accessToken;
      if (accessToken) {
        const user = await getUser(accessToken);
        setUser({
          email: user.email || '',
          name: user.name || '',
          avatar: user.picture || '',
          subscriptionStatus: 'free',
          credits: 0,
          referralCode: '',
          referredBy: '',
          token: '',
        });
        login(
          {
            email: user.email || '',
          },
          {
            onSuccess: (data) => {
              setToken(data.data.access_token);
              navigation.navigate('Service');
            },
            onError: (error) => {
              if (isAxiosError(error)) {
                showToast(error.response?.data.message, 'error');
                navigation.navigate('Name');
              }
            },
          }
        );
      }
    } else if (response?.type === 'cancel') {
      showToast('google sign in cancelled', 'error', 3000);
    }
  };

  const getUser = async (token: string) => {
    if (!token) return;

    try {
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return await res.json();
    } catch (error) {
      showToast('Failed to get user info ' + error, 'error');
    }
  };
  return { promptAsync };
};
