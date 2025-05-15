import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 18,
    position: 'relative',
  },
  head: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
  tags: {
    marginTop: 6,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tag: {
    marginBottom: 16,
    flexDirection: 'row',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.primary.gray,
    borderStyle: 'dashed',
  },
  tag_active: {
    borderColor: colors.primary.black,
  },
  btns: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.primary.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    flex: 1,
    padding: 12,
    borderRadius: 16,
  },
  btn_black: {
    backgroundColor: colors.primary.black,
  },
});

export default styles;
