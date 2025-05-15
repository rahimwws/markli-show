import { Dimensions, StyleSheet } from 'react-native';

import { ColorsT } from '@/shared/lib/theme/colors';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export const createStyles = (colors: ColorsT) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      overflow: 'hidden',
      paddingBottom: '20%',
      height: '130%',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      opacity: 1,
    },
    mainImage: {
      width: '100%',
      height: 550,
      borderRadius: 40,
    },
    button: {
      width: '100%',
      backgroundColor: colors.primary.black,
      height: 54,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      marginTop: 16,
    },
    buttonText: {
      fontFamily: 'GeneralSans-Semibold',
      fontSize: 16,
      fontWeight: '600',
      color: colors.primary.white,
    },
    shareContainer: {
      backgroundColor: colors.primary.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      borderRadius: 33,
    },
    aiImage: {},
  });
