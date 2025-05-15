import { StyleSheet } from 'react-native';

import { height } from '@/shared/lib/theme';

export const styles = StyleSheet.create({
  container: {
    height: height / 2.5,
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    borderRadius: 40,
    position: 'relative',
  },
  form: {
    width: 55,
    height: 55,
    backgroundColor: '#EDEBEE33',
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    overflow: 'hidden',
  },
  camera: {
    width: 55,
    height: 55,
    backgroundColor: '#EDEBEE33',
    borderRadius: 100,
    position: 'absolute',
    top: 70,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    overflow: 'hidden',
  },
  gallery: {
    width: 55,
    height: 55,
    backgroundColor: '#EDEBEE33',
    borderRadius: 100,
    position: 'absolute',
    top: 130,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'hidden',
  },
  image: {
    height: height / 2.5,
    borderRadius: 40,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 100,
  },
});
