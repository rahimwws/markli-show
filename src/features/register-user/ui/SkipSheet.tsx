import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { forwardRef, MutableRefObject } from 'react';
import { View } from 'react-native';

import { Sheet } from '@/shared/ui';
import { LargeButton } from '@/shared/ui/Button';
import { Chip } from '@/shared/ui/Chip';
import Smile from '@/shared/ui/Icons/SmileHuman';
import Typography from '@/shared/ui/Typography';
import { useTheme } from '@/theme/useTheme';
// icons

const SkipSheet = forwardRef<BottomSheetModal>(({ ...props }, ref) => {
  const { colors } = useTheme();
  return (
    <Sheet sizes={['60%']} ref={ref} enableDynamicSizing={false}>
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
        <Chip text="required" color={colors.primary.rose} />
        <Typography font="semibold" size={18} top={4} bottom={30} color="gray">
          please sign in to continue using our app
        </Typography>
        <Smile fill={colors.primary.black} />
      </View>

      <View style={{ paddingHorizontal: 20, width: '100%', position: 'absolute', bottom: 16 }}>
        <LargeButton
          text="continue"
          action={() => (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss()}
        />
      </View>
    </Sheet>
  );
});

export default SkipSheet;
