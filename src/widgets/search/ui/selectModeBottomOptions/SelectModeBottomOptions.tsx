import { useState } from 'react';
import { View, TouchableOpacity, Share } from 'react-native';
import Animated from 'react-native-reanimated';

import styles from './styles';

import useAnimatedAppearance from '@/shared/lib/hooks/useAnimatedAppearance';
import { colors } from '@/shared/lib/theme';
import { Typography } from '@/shared/ui';
// icons
import ArrowOutOfBoxIcon from '@/shared/ui/Icons/ArrowOutOfBox';
import CircleDotsCenter2Icon from '@/shared/ui/Icons/CircleDotsCenter2';
import FolderOpenIcon from '@/shared/ui/Icons/FolderOpen';
import TagSaleFilledIcon from '@/shared/ui/Icons/TagSaleFilled';
import TrashCanIcon from '@/shared/ui/Icons/TrashCan';

type SelectModeBottomOptionsProps = {
  countSelectedPhotos?: number;
  onPressDelete?: () => void;
  onPressMoveToFolder?: () => void;
  onPressAddTags?: () => void;
};

const SelectModeBottomOptions = (props: SelectModeBottomOptionsProps) => {
  const { countSelectedPhotos, onPressDelete, onPressMoveToFolder, onPressAddTags } = props;
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const { animatedStyle } = useAnimatedAppearance(isOptionsVisible);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'some content!',
        url: 'https://example.com', // iOS only
        title: 'Share via', // Android only
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type (iOS only)
          console.log('Shared with', result.activityType);
        } else {
          // Shared (Android/iOS)
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => onShare()}>
        <ArrowOutOfBoxIcon />
      </TouchableOpacity>
      {!!countSelectedPhotos && <Typography>{countSelectedPhotos} Photos Selected</Typography>}
      <View style={styles.actions}>
        <TouchableOpacity onPress={onPressDelete}>
          <TrashCanIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsOptionsVisible((prev) => !prev)}>
          <CircleDotsCenter2Icon />
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.options, animatedStyle]}>
        <TouchableOpacity style={styles.option} onPress={onPressMoveToFolder}>
          <Typography size={17} color="black">
            Move to Folder
          </Typography>
          <FolderOpenIcon fill={colors.primary.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={onPressAddTags}>
          <Typography size={17} color="black">
            Add Tags
          </Typography>
          <TagSaleFilledIcon fill={colors.primary.black} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SelectModeBottomOptions;
