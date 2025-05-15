import { StyleSheet, Platform } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    width: '100%',
    backgroundColor: colors.primary.white,
    opacity: 0.95,
    paddingHorizontal: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  options: {
    position: 'absolute',
    bottom: 60,
    right: 16,
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    gap: 8,
    backgroundColor: colors.background.secondary,
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 13,
      },
    }),
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30,
    padding: 12,
    backgroundColor: colors.primary.white,
  },
});

export default styles;
