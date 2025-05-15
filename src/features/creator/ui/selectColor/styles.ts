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
  colorWrap: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  colorBtn: {
    borderRadius: 12,
    height: 45,
    width: 45,
    padding: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  colorBtnInner: {
    borderRadius: 8,
    flex: 1,
  },
});

export default styles;
