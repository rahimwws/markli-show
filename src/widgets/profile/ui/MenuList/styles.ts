import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.background.element,
    borderRadius: 20,
    backgroundColor: colors.background.secondary,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 19,
    paddingHorizontal: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.background.element,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 999,
    marginRight: 8,
  },
});

export default styles;
