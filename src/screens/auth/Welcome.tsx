import { View } from 'react-native';

import { useUserStore } from '@/entities/user';
import { useRegister } from '@/features/register-user';
import { useToast } from '@/shared/lib';
import { useAppNavigation } from '@/shared/lib/navigation';
import { Layout, Typography } from '@/shared/ui';
import { LargeButton } from '@/shared/ui/Button';
import { Chip } from '@/shared/ui/Chip';
import { useTheme } from '@/theme/useTheme';
import { AnimatedHeart } from '@/widgets/referral';
const Welcome = () => {
  const { colors } = useTheme();
  const { mutate: register } = useRegister();
  const { showToast } = useToast();
  const { user } = useUserStore();
  const navigation = useAppNavigation();
  const setToken = useUserStore((state) => state.setToken);
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'center',
        }}>
        <AnimatedHeart />
        <View style={{ alignSelf: 'center' }}>
          <Chip text="hurray!!" color={colors.primary.lemon} />
        </View>
        <Typography color="black" font="semibold" size={26}>
          welcome to markli.
        </Typography>
      </View>
      <LargeButton
        text="let’s start✨"
        action={() => {
          if (user) {
            register(
              {
                email: user.email,
                name: user.name,
                referred_by: user.referredBy,
                avatar: user.avatar,
              },
              {
                onSuccess: (data) => {
                  setToken(data.data.access_token);
                  navigation.navigate('Service');
                },
                onError: (error) => {
                  showToast(error.message, 'error');
                },
              }
            );
          }
        }}
      />
    </Layout>
  );
};

export default Welcome;
