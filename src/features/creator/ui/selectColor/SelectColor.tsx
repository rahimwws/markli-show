import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
import { Sheet, Typography } from '@/shared/ui';
// icons
import CloseIcon from '@/shared/ui/Icons/Close';

const colorList = [
  '#000000',
  '#6B6B6B',
  '#A0A0A0',
  '#FF3B30',
  '#FF9500',
  '#A2845E',
  '#FFCC00',
  '#34C759',
  '#00C7BE',
  '#30B0C7',
  '#32ADE6',
  '#007AFF',
  '#5856D6',
  '#AF52DE',
  '#FF2D55',
  '#EF4444',
  '#4F378B',
  '#7D5260',
];

type SelectColorProps = {
  onSheetClose?: (color: string) => void;
};

const SelectColor = forwardRef<BottomSheetModal, SelectColorProps>(
  ({ onSheetClose, ...props }, ref) => {
    const [color, setColor] = useState('');

    const onClose = () => {
      onSheetClose?.(color);
      (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
    };

    return (
      <>
        <Sheet
          ref={ref}
          sizes={['35%']}
          keyboardBehavior="interactive"
          enableDynamicSizing={false}
          style={{ backgroundColor: colors.background.secondary }}
          enablePanDownToClose={false}>
          <View style={styles.container}>
            <View style={styles.justifySpaceBetween}>
              <Typography size={17} font="semibold" color="black">
                Choose a Color
              </Typography>
              <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
                <CloseIcon fill={colors.primary.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.colorWrap}>
              {colorList.map((colorItem) => {
                const isActive = colorItem === color;
                return (
                  <Pressable
                    key={colorItem}
                    style={[styles.colorBtn, isActive && { borderColor: colorItem }]}
                    onPress={() => setColor(colorItem)}>
                    <View style={[{ backgroundColor: colorItem }, styles.colorBtnInner]} />
                  </Pressable>
                );
              })}
            </View>
          </View>
        </Sheet>
      </>
    );
  }
);

export default SelectColor;
