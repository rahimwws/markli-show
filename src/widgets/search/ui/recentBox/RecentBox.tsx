import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

import { Typography } from '@/shared/ui';

type RecentBoxProps = {
  txt: string;
  img: string;
  onPress: () => void;
};

const RecentBox = (props: RecentBoxProps) => {
  const { txt, img, onPress } = props;

  return (
    <TouchableOpacity style={styles.col} onPress={onPress}>
      <Image style={styles.image} source={img} contentFit="cover" transition={1000} />
      <Typography align="left" size={17} color="black" font="semibold">
        {txt}
      </Typography>
    </TouchableOpacity>
  );
};

export default RecentBox;
