import { Image } from 'expo-image';
import { ViewStyle, StyleProp, TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
// icons
import CheckmarkSmallIcon from '@/shared/ui/Icons/CheckmarkSmall';

type SearchImageProps = {
  /** @default false */
  isSelected?: boolean;
  img: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  width: number;
};

const SearchImage = (props: SearchImageProps) => {
  const { img, isSelected = false, style, onPress, width } = props;

  return (
    <TouchableOpacity style={[styles.container, { width }, style]} onPress={onPress}>
      <Image source={img} style={{ borderRadius: 12, flex: 1 }} contentFit="cover" />
      {isSelected && (
        <View style={styles.iconWrap}>
          <CheckmarkSmallIcon style={styles.icon} stroke={colors.primary.black} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SearchImage;
