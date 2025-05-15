import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 25,
  },
  innerContainer: {
    overflow: 'hidden',
    flex: 1,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: colors.text.disabled,
    margin: 1,
  },
  frontIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  imageWrap: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  image: {
    flex: 1,
  },
  front: {
    position: 'absolute',
    bottom: 0,
    zIndex: 101,
    width: '100%',
    flexDirection: 'column',
    padding: 20,
  },
});
