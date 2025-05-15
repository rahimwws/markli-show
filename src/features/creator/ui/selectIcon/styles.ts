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
  iconWrap: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  iconBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 38,
    width: 38,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: colors.primary.white,
  },
  emojiBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 38,
    width: 38,
  },
  inputContainer: {
    marginTop: 16,
    backgroundColor: colors.primary.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default styles;
