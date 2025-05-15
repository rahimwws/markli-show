import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchWrapperShadow: {
    ...Platform.select({
      android: {
        elevation: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.32,
        shadowRadius: 26,
      },
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 13,
      },
    }),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  search: {
    fontFamily: 'medium',
    fontSize: 16,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default styles;
