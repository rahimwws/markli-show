import { Image } from 'expo-image';
import { FC, memo } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';

import Typography from '../Typography';
import { styles } from './style';

// icons
import FolderFrontIcon from '@/shared/ui/Icons/FolderFront';

interface FolderProps {
  title?: string;
  itemCount?: number;
  images?: string[];
  emoji?: string;
}

const Folder: FC<FolderProps> = ({ title = 'Work', itemCount = 28, images = [], emoji = '✨' }) => {
  const imageSpacing = images.length > 1 ? 35 / (images.length - 1) : 0;

  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <View style={styles.innerContainer}>
        {images.map((image, index) => {
          return (
            <View
              key={index}
              style={[
                styles.imageWrap,
                {
                  top: index * imageSpacing, // Stagger the images vertically
                  zIndex: index,
                },
              ]}>
              <Image source={image} style={[styles.image]} contentFit="cover" />
            </View>
          );
        })}
      </View>
      <View style={styles.frontIcon}>
        <FolderFrontIcon />
      </View>
      <View style={styles.front}>
        <Typography size={20}>{emoji}</Typography>
        <Typography size={15} font="semibold">
          {title}
        </Typography>
        <Typography size={11}>{itemCount} items</Typography>
      </View>
    </Pressable>
  );
};

Folder.displayName = 'Folder';

export default memo(Folder);
