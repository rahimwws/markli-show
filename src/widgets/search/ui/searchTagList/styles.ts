import { Platform, StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  tag: {
    backgroundColor: colors.primary.white,
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 12,
    marginRight: 8,
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
  tag_active: {
    backgroundColor: colors.primary.black,
  },
});

export default styles;
