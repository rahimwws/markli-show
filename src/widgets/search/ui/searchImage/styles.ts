import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 140,
    marginRight: 8,
    marginBottom: 8,
  },
  iconWrap: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    padding: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.background.secondary,
    backgroundColor: colors.primary.white,
    width: 24,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
});

export default styles;
