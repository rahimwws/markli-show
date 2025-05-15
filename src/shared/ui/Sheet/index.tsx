import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { BottomSheetScrollViewProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import { BlurView } from 'expo-blur';
import { memo, forwardRef, ReactNode, useMemo } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { useTheme } from '@/theme/useTheme';

interface SheetProps extends Partial<BottomSheetModalProps> {
  children: ReactNode;
  sizes?: (number | string)[] | SharedValue<(string | number)[]>;
  scrollViewProps?: Partial<BottomSheetScrollViewProps>;
  headerComponent?: () => ReactNode;
}

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedIndex.value, [-1, 0], [0, 1], Extrapolate.CLAMP),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      } as ViewStyle,
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={containerStyle}>
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
    </Animated.View>
  );
};

const Sheet = memo(
  forwardRef<BottomSheetModal, SheetProps>(
    ({ children, sizes, style, scrollViewProps, headerComponent, ...props }, ref) => {
      const { colors } = useTheme();
      return (
        <BottomSheetModal
          ref={ref}
          snapPoints={sizes}
          enablePanDownToClose
          backdropComponent={(props) => <CustomBackdrop {...props} />}
          style={[
            {
              backgroundColor: colors.primary.white,
              borderRadius: 32,
              marginHorizontal: 20,
              overflow: 'hidden',
            },
            style,
          ]}
          handleIndicatorStyle={{
            backgroundColor: colors.primary.gray,
          }}
          backgroundComponent={({ style }) => (
            <View
              style={[
                {
                  borderRadius: 40,
                } as ViewStyle,
                style,
              ]}
            />
          )}
          bottomInset={30}
          detached
          {...props}>
          {headerComponent?.()}
          {scrollViewProps ? (
            <BottomSheetScrollView {...scrollViewProps}>{children}</BottomSheetScrollView>
          ) : (
            <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>{children}</BottomSheetView>
          )}
        </BottomSheetModal>
      );
    }
  )
);

export default Sheet;
