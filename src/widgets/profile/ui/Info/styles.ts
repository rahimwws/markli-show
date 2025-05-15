import { StyleSheet } from 'react-native';

import { colors } from '@/shared/lib/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 40,
  },
  photo: {
    borderWidth: 4,
    borderColor: colors.background.element,
    borderRadius: 30,
    backgroundColor: colors.primary.black,
    width: 100,
    height: 100,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
