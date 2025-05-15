import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  btn: {
    flex: 1,
    width: 'auto',
    maxHeight: 52,
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
