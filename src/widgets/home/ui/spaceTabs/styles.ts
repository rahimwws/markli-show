import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    position: 'relative',
  },
  tabStyle: {
    width: 'auto',
    marginHorizontal: 8,
    paddingBottom: 4,
  },
  tabStyle_active: {
    borderBottomWidth: 2,
    borderBottomColor: colors.accent.primary,
  },
  btnWrapper: {
    position: 'absolute',
    top: -5,
    right: 16,
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 80,
    height: 30,
  },
});

export default styles;
