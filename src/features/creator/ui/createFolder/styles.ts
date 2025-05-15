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
  inputWrapper: {
    borderRadius: 12,
    backgroundColor: colors.background.element,
    borderColor: colors.text.disabled,
    paddingHorizontal: 20,
    gap: 4,
  },
  input: {
    paddingVertical: 10,
  },
  largeBtn: {
    flex: 1,
    width: 'auto',
    maxHeight: 52,
  },
  btnWrap: {
    flexDirection: 'column',
    paddingHorizontal: 18,
    paddingVertical: 4,
    backgroundColor: colors.primary.white,
    borderRadius: 12,
    marginBottom: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  btnRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  divider: {
    height: 1,
    backgroundColor: colors.background.secondary,
  },
  iconColor: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  largeBtnWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
});

export default styles;
