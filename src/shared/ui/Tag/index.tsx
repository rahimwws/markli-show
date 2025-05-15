import { Image } from 'expo-image';
import { FC } from 'react';
import { Pressable, View } from 'react-native';

import Typography from '../Typography';
import styles from './styles';

import { colors } from '@/shared/lib/theme';

interface TagProps {
  label: string;
  itemCount: number;
  images: string[];
  onPress?: () => void;
}

const Tag: FC<TagProps> = ({ label = '#Wedding', itemCount, images = [], onPress }) => {
  const imageVerticalOffset = 7;
  const imageHorizontalOffset = 12;

  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <Typography size={12} font="medium" color="black" align="left">
        {label}
      </Typography>
      <Typography size={11} font="medium" color="gray" align="left">
        {itemCount} items
      </Typography>
      <View style={styles.imagesContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[
              styles.image,
              {
                position: 'absolute',
                bottom: index * imageVerticalOffset,
                right: index * imageHorizontalOffset,
                zIndex: images.length - index,
              },
            ]}
            contentFit="cover"
          />
        ))}
      </View>
    </Pressable>
  );
};

Tag.displayName = 'Tag';

export default Tag;
