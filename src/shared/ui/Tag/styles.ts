import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 110,
    padding: 8,
    backgroundColor: colors.primary.white,
    borderColor: colors.background.element,
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagesContainer: {
    position: 'absolute',
    bottom: -75,
    right: 0,
    width: '60%',
    height: '70%',
  },
  image: {
    width: 65,
    height: 130,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
});

export default styles;
