import { useState } from 'react';
import { View } from 'react-native';

import { AvatarForm } from '@/features/register-user';
import { Chip, LargeButton, Layout, Typography } from '@/shared/ui';
import { useTheme } from '@/theme/useTheme';

export default function Avatar() {
  const { colors } = useTheme();
  const [avatar, setAvatar] = useState<string>('');

  return (
    <Layout>
      <AvatarForm avatar={avatar} setAvatar={setAvatar} />
      <View style={{ flex: 1, gap: 16, justifyContent: 'flex-start', marginTop: 16 }}>
        <View style={{ alignSelf: 'center' }}>
          <Chip text="step 2" color={colors.primary.lemon} />
        </View>
        <Typography color="black" font="semibold" size={26}>
          choose your avatar
        </Typography>
      </View>
      <View style={{ gap: 16 }}>
        <LargeButton text="Continue" disabled={!avatar} isRoute route="Referral" />
      </View>
    </Layout>
  );
}
