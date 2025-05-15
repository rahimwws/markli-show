import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { View } from 'react-native';

import { useUserStore } from '@/entities/user';
import { Chip, Input, LargeButton, Layout, Typography } from '@/shared/ui';
import { useTheme } from '@/theme/useTheme';
import { AnimatedHeart, InviteSheet } from '@/widgets/referral';

const Referral = () => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const setReferredBy = useUserStore((state) => state.setReferredBy);
  const referredBy = useUserStore((state) => state.user?.referredBy);
  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <AnimatedHeart />
          <View style={{ alignSelf: 'center' }}>
            <Chip text="step 3" color={colors.primary.lemon} />
          </View>
          <Typography color="black" font="semibold" size={26}>
            who invite you?
          </Typography>
          <Input
            containerStyle={{ width: '100%' }}
            keyboardType="default"
            returnKeyType="done"
            placeholder="my friend"
            value={referredBy}
            onChangeText={setReferredBy}
          />
        </View>
        <View style={{ gap: 8 }}>
          <LargeButton text="skip" bg="secondary" textColor="black" isRoute route="Welcome" />
          <LargeButton text="continue" action={() => bottomSheetModalRef.current?.present()} />
        </View>
      </View>
      <InviteSheet ref={bottomSheetModalRef} />
    </Layout>
  );
};

export default Referral;
