import { StyleSheet } from 'react-native';

import { colors, height, width } from '@/shared/lib/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    width: 160,
    height: height * 0.3,
    position: 'relative',
    borderRadius: 25,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -17.417,
    },
    shadowOpacity: 0.18,
    shadowRadius: 47.026,
    elevation: 5,
  },
  innerContainer: {
    overflow: 'hidden',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.text.disabled,
    margin: 1,
    zIndex: 1,
  },
  frontIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  image: {
    position: 'absolute',
    top: '-5%',
    width: 160,
    height: height * 0.4,
    borderRadius: 15,
    zIndex: 2,
  },
  front: {
    position: 'absolute',
    bottom: 0,
    zIndex: 101,
    width: '100%',
    flexDirection: 'column',
    paddingVertical: 40,
  },
});
