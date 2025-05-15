import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { MutableRefObject, ReactNode, forwardRef } from 'react';
import { View } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
import { LargeButton, Sheet, Typography } from '@/shared/ui';

type CreatedProps = {
  icon?: ReactNode;
  name?: string;
  txt: string;
  onPressDone?: () => void;
};

const Created = forwardRef<BottomSheetModal, CreatedProps>(
  ({ icon, name, txt, onPressDone, ...props }, ref) => {
    const onClose = () => {
      (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
    };

    return (
      <Sheet
        ref={ref}
        sizes={['50%']}
        keyboardBehavior="interactive"
        enableDynamicSizing={false}
        style={{ backgroundColor: colors.background.secondary }}>
        <View style={styles.container}>
          <View style={styles.head}>
            {!!icon && icon}
            {!!name && (
              <Typography font="semibold" size={20}>
                {name}
              </Typography>
            )}
          </View>
          <Typography font="medium" size={15} color="black">
            {txt}
          </Typography>
          <Image
            source={require('@/shared/assets/images/created.png')}
            style={{ height: 260, borderRadius: 40 }}
            contentFit="contain"
          />
        </View>
        <View style={styles.largeBtnWrap}>
          <LargeButton
            styles={styles.btn}
            text="Done"
            action={() => {
              onClose();
              onPressDone?.();
            }}
          />
        </View>
      </Sheet>
    );
  }
);

export default Created;
