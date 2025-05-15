import { Image } from 'expo-image';
import { FC, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { styles } from './style';

import { Typography } from '@/shared/ui';

// icons
import FolderFrontIcon from '@/shared/ui/Icons/FolderFront';
import { RectangleFolder } from '@/shared/ui/Icons/RectangleFolder';

interface FolderProps {
  image: string;
}

const AiFolder: FC<FolderProps> = ({ image }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.innerContainer}>
        <Image source={image} style={[styles.image]} contentFit="contain" />
      </View>
      <View style={styles.frontIcon}>
        <RectangleFolder />
      </View>
      <View style={styles.front}>
        <Typography size={15} styles={{ fontFamily: 'GeneralSans-Medium' }}>
          Put into folder
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

AiFolder.displayName = 'AiFolder';

export default memo(AiFolder);
