import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
import { Sheet, Typography } from '@/shared/ui';
// icons
import CirclePlusAddIcon from '@/shared/ui/Icons/CirclePlusAdd';
import CircleXFilledIcon from '@/shared/ui/Icons/CircleXFilled';
import CloseIcon from '@/shared/ui/Icons/Close';
import PlusIcon from '@/shared/ui/Icons/Plus';

const tags = [
  '#Sunglasses',
  '#UI/UXdesign',
  '#backendcoding1',
  '#Sunglasses1',
  '#backendcoding2',
  '#Weddingday1',
  '#Sunglasses2',
  '#Weddingday2',
  '#Footballday1',
  '#Footballday2',
  '#Footballday3',
  '#Footballday4',
];

type AddTagsSheetProps = {
  onSheetClose?: () => void;
  onPressSave?: (tags: string[]) => void;
  onPressAddTags?: () => void;
};

const AddTagsSheet = forwardRef<BottomSheetModal, AddTagsSheetProps>((props, ref) => {
  const { onSheetClose, onPressSave, onPressAddTags } = props;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleItemSelection = useCallback((selectedTag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(selectedTag)) {
        return prev.filter((tag) => tag !== selectedTag);
      } else {
        return [...prev, selectedTag];
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
      sizes={['80%']}
      enableDynamicSizing={false}
      enablePanDownToClose={false}
      style={{ backgroundColor: colors.background.secondary }}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        contentContainerStyle: { paddingBottom: 50 },
      }}
      footerComponent={() => {
        return (
          <View style={styles.btns}>
            <TouchableOpacity style={[styles.btn]} onPress={() => onPressAddTags?.()}>
              <PlusIcon stroke={colors.primary.black} />
              <Typography color="black" size={17}>
                Add tag
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btn_black]}
              onPress={() => onPressSave?.(selectedTags)}>
              <Typography color="white" size={17}>
                Save
              </Typography>
            </TouchableOpacity>
          </View>
        );
      }}
      headerComponent={() => {
        return (
          <View style={styles.head}>
            <Typography size={17} font="semibold" color="black">
              Add Tags
            </Typography>
            <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
              <CloseIcon fill={colors.primary.white} />
            </TouchableOpacity>
          </View>
        );
      }}>
      <View style={styles.container}>
        <View style={styles.tags}>
          {tags.map((item) => {
            const isActive = selectedTags.includes(item);
            return (
              <TouchableOpacity
                key={item}
                style={[styles.tag, isActive && styles.tag_active]}
                onPress={() => toggleItemSelection(item)}>
                <Typography
                  styles={{ marginRight: 10 }}
                  size={20}
                  font="semibold"
                  color={isActive ? 'black' : 'gray'}>
                  {item}
                </Typography>
                {isActive ? <CircleXFilledIcon /> : <CirclePlusAddIcon />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Sheet>
  );
});

export default AddTagsSheet;
