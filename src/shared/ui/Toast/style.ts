import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 0,
    paddingVertical: 20,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    zIndex: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  titleCard: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
