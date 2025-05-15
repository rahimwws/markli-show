import { BottomSheetModal } from '@gorhom/bottom-sheet';
import * as Sharing from 'expo-sharing';
import { forwardRef, MutableRefObject } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useAppNavigation } from '@/shared/lib/navigation';
import { Sheet } from '@/shared/ui';
import { LargeButton } from '@/shared/ui/Button';
import { Chip } from '@/shared/ui/Chip';
import Smile from '@/shared/ui/Icons/IdeaPerson';
import Typography from '@/shared/ui/Typography';
import { useTheme } from '@/theme/useTheme';
// icons

const InviteSheet = forwardRef<BottomSheetModal>(({ ...props }, ref) => {
  const { colors } = useTheme();
  const navigation = useAppNavigation();
  return (
    <Sheet sizes={['60%']} ref={ref} enableDynamicSizing={false}>
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
        <Chip text="referral" color={colors.primary.frost} />
        <Typography font="semibold" size={18} top={4} bottom={25} color="gray">
          maybe you know someone who would like to join the app?
        </Typography>
        <Smile fill={colors.primary.black} />
      </View>

      <View style={{ paddingHorizontal: 20, width: '100%', position: 'absolute', bottom: 16 }}>
        <TouchableOpacity
          onPress={() => {
            (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
            navigation.navigate('Welcome');
          }}>
          <Typography font="medium" color="gray" bottom={5} top={5}>
            start using app
          </Typography>
        </TouchableOpacity>

        <LargeButton
          text="invite"
          action={() => {
            Sharing.shareAsync('https://www.google.com', {
              dialogTitle: 'Invite',
            });
            (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
          }}
        />
      </View>
    </Sheet>
  );
});

export default InviteSheet;
