import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
import { Sheet, Typography } from '@/shared/ui';
// icons
import CheckmarkSmallIcon from '@/shared/ui/Icons/CheckmarkSmall';
import CloseIcon from '@/shared/ui/Icons/Close';
import PlusIcon from '@/shared/ui/Icons/Plus';

const folders = [
  {
    id: 1,
    emoji: '😄',
    name: 'Work',
    itemsCount: 17,
  },
  {
    id: 2,
    emoji: '😄',
    name: 'Work',
    itemsCount: 17,
  },
  {
    id: 3,
    emoji: '😄',
    name: 'Work',
    itemsCount: 17,
  },
  {
    id: 4,
    emoji: '😄',
    name: 'Work',
    itemsCount: 17,
  },
];

type AddTagsSheetProps = {
  onSheetClose?: () => void;
  onPressMove?: (folders: number[]) => void;
  onPressAddFolder?: () => void;
};

const AddTagsSheet = forwardRef<BottomSheetModal, AddTagsSheetProps>((props, ref) => {
  const { onSheetClose, onPressMove, onPressAddFolder } = props;
  const [selectedFolders, setSelectedFolders] = useState<number[]>([]);

  const toggleItemSelection = useCallback((selectedFolder: number) => {
    setSelectedFolders((prev) => {
      if (prev.includes(selectedFolder)) {
        return prev.filter((id) => id !== selectedFolder);
      } else {
        return [...prev, selectedFolder];
      }
    });
  }, []);

  const onClose = () => {
    (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
    onSheetClose?.();
  };

  return (
    <Sheet
      ref={ref}
      sizes={['70%']}
      enableDynamicSizing={false}
      enablePanDownToClose={false}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        contentContainerStyle: { paddingBottom: 50 },
      }}
      footerComponent={() => {
        return (
          <View style={styles.btns}>
            <TouchableOpacity style={[styles.btn]} onPress={() => onPressAddFolder?.()}>
              <PlusIcon stroke={colors.primary.black} />
              <Typography color="black" size={17}>
                Add folder
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btn_black]}
              onPress={() => onPressMove?.(selectedFolders)}>
              <Typography color="white" size={17}>
                Move
              </Typography>
            </TouchableOpacity>
          </View>
        );
      }}
      headerComponent={() => {
        return (
          <View style={styles.head}>
            <Typography size={17} font="semibold" color="black">
              Select folder to move
            </Typography>
            <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
              <CloseIcon fill={colors.primary.white} />
            </TouchableOpacity>
          </View>
        );
      }}>
      <View style={styles.container}>
        <View style={styles.folders}>
          {folders.map((item) => {
            const isActive = selectedFolders.includes(item.id);
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.folder}
                onPress={() => toggleItemSelection(item.id)}>
                <View style={styles.folderContent}>
                  <Typography size={30}>{item.emoji}</Typography>
                  <View style={styles.folderCol}>
                    <Typography
                      styles={{ marginRight: 10 }}
                      size={15}
                      font="semibold"
                      color="black">
                      {item.name}
                    </Typography>
                    <Typography styles={{ marginRight: 10 }} size={13} color="black">
                      {item.itemsCount} Items
                    </Typography>
                  </View>
                </View>
                <View style={[styles.folderCheckbox, isActive && styles.folderCheckbox_active]}>
                  {isActive && <CheckmarkSmallIcon stroke={colors.primary.white} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Sheet>
  );
});

export default AddTagsSheet;
