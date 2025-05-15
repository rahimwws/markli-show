import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  image: string;
}

const Screenshot: FC<Props> = ({ image }) => {
  return (
    <View style={[styles.wrapper]}>
      <LinearGradient style={[styles.gradient]} colors={['#FFFFFF', '#EFEFEF']}>
        <View style={[styles.image]}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 12,
            }}
            contentFit="cover"
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 110,

    backgroundColor: 'transparent',
  },
  gradient: {
    padding: 1,
    width: '100%',
    height: 230,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default Screenshot;
