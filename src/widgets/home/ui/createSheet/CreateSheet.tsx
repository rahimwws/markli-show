import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';

// icons
import styles from './styles';

import { CreateFolder, CreateTag } from '@/features/creator';
import { colors } from '@/shared/lib/theme';
import { Sheet, Typography } from '@/shared/ui';
// icons
import CloseIcon from '@/shared/ui/Icons/Close';
import FolderOpenIcon from '@/shared/ui/Icons/FolderOpen';
import ImageSparkleIcon from '@/shared/ui/Icons/ImageSparkle';
import TagIcon from '@/shared/ui/Icons/Tag';

const CreateSheet = forwardRef<BottomSheetModal>(({ ...props }, ref) => {
  // const createSpaceRef = useRef<BottomSheetModal>(null);
  const createFolderRef = useRef<BottomSheetModal>(null);
  const createTagRef = useRef<BottomSheetModal>(null);

  const onClose = () => {
    (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
  };

  return (
    <>
      <Sheet
        sizes={['40%']}
        ref={ref}
        enableDynamicSizing={false}
        style={{ backgroundColor: colors.background.secondary }}>
        <View style={styles.container}>
          <View style={styles.justifySpaceBetween}>
            <Typography size={17} font="semibold" color="black">
              Start Creating Now
            </Typography>
            <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
              <CloseIcon fill={colors.primary.white} />
            </TouchableOpacity>
          </View>
          <View style={[{ marginTop: 16 }, styles.col, styles.createBtns]}>
            <TouchableOpacity style={styles.createBtn} onPress={() => {}}>
              <ImageSparkleIcon fill={colors.primary.black} />
              <Typography size={15} font="semibold" color="black">
                Upload a screenshot
              </Typography>
            </TouchableOpacity>
            <View style={[styles.row, styles.createBtns]}>
              {/* <TouchableOpacity
                style={styles.createBtn}
                onPress={() => {
                  onClose();
                  createSpaceRef.current?.present();
                }}>
                <SpaceIcon stroke={colors.primary.black} />
                <Typography size={15} font="semibold" color="black">
                  Space
                </Typography>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.createBtn}
                onPress={() => {
                  onClose();
                  createFolderRef.current?.present();
                }}>
                <FolderOpenIcon stroke={colors.primary.black} />
                <Typography size={15} font="semibold" color="black">
                  Folder
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.createBtn}
                onPress={() => {
                  onClose();
                  createTagRef.current?.present();
                }}>
                <TagIcon stroke={colors.primary.black} />
                <Typography size={15} font="semibold" color="black">
                  Tag
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Sheet>
      {/* <CreateSpace ref={createSpaceRef} /> */}
      <CreateFolder ref={createFolderRef} />
      <CreateTag ref={createTagRef} />
    </>
  );
});

export default CreateSheet;
