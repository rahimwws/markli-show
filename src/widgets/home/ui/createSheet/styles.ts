import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  justifySpaceBetween: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.text.disabled,
    width: 28,
    height: 28,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
  },
  createBtns: {
    gap: 8,
  },
  createBtn: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.primary.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});

export default styles;
