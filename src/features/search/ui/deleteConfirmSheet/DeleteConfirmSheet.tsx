import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { MutableRefObject, forwardRef } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
import { Sheet, Typography } from '@/shared/ui';

type DeleteConfirmSheetProps = {
  selectedItems: number[];
  onSheetClose?: () => void;
};

const DeleteConfirmSheet = forwardRef<BottomSheetModal, DeleteConfirmSheetProps>((props, ref) => {
  const { selectedItems, onSheetClose } = props;

  const onClose = () => {
    (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
    onSheetClose?.();
  };

  return (
    <Sheet
      sizes={['30%']}
      ref={ref}
      enableDynamicSizing={false}
      style={{ backgroundColor: colors.background.secondary }}>
      <View style={styles.container}>
        <Typography styles={{ paddingHorizontal: 40, marginBottom: 20 }} size={16} color="black">
          Do you want{' '}
          <Typography font="semibold" size={16} color="black">
            to delete
          </Typography>{' '}
          these {selectedItems.length} screenshots?
        </Typography>

        <TouchableOpacity style={[styles.btn, styles.deleteBtn]} onPress={onClose}>
          <Typography color="white" size={17}>
            Delete
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onClose}>
          <Typography color="black" size={17}>
            Cancel
          </Typography>
        </TouchableOpacity>
      </View>
    </Sheet>
  );
});

export default DeleteConfirmSheet;
