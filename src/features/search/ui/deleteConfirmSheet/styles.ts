import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  btn: {
    borderRadius: 16,
    padding: 12,
  },
  deleteBtn: {
    backgroundColor: colors.accent.red,
    marginBottom: 8,
  },
});

export default styles;
