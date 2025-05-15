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
  folders: {
    marginTop: 6,
    flexDirection: 'column',
    alignItems: 'center',
  },
  folder: {
    width: '100%',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.text.disabled,
    backgroundColor: colors.background.secondary,
  },
  folderContent: {
    flexDirection: 'row',
    gap: 12,
  },
  folderCol: {
    flexDirection: 'column',
  },
  folderCheckbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.text.disabled,
    width: 30,
    height: 30,
  },
  folderCheckbox_active: {
    backgroundColor: colors.primary.black,
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
