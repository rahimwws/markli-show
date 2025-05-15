import { View } from 'react-native';

import { useUserStore } from '@/entities/user';
import { openUrl } from '@/shared/lib';
import { Chip, Input, LargeButton, Layout, Typography } from '@/shared/ui';
import { useTheme } from '@/theme/useTheme';
export default function Name() {
  const name = useUserStore((state) => state.user?.name);
  const setName = useUserStore((state) => state.setName);
  console.log(name);

  const { colors } = useTheme();
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, gap: 16, justifyContent: 'center' }}>
          <View style={{ alignSelf: 'center' }}>
            <Chip text="step 1" color={colors.primary.lemon} />
          </View>
          <Typography color="black" font="semibold" size={26}>
            what's your name?
          </Typography>
          <Input
            autoCapitalize="none"
            placeholder="enter your name"
            keyboardType="default"
            returnKeyType="done"
            value={name}
            onChangeText={setName}
            defaultValue={name}
          />
        </View>
        <View style={{ gap: 16 }}>
          <View style={{ maxWidth: 230, alignSelf: 'center', alignItems: 'center' }}>
            <Typography align="center" size={12} color="gray">
              By tapping continue, you are agreeing to our{' '}
              <Typography color="gray" size={12} font="semibold">
                Terms
              </Typography>{' '}
              and{' '}
              <Typography
                color="gray"
                size={12}
                font="semibold"
                textProps={{ onPress: () => openUrl('https://google.com') }}>
                Privacy Policy
              </Typography>
            </Typography>
          </View>
          <LargeButton text="Continue" isRoute route="Avatar" disabled={name?.length === 0} />
        </View>
      </View>
    </Layout>
  );
}
