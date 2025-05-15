import { memo, ReactNode } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

const Row = memo(
  ({
    children,
    justify = 'center',
    gap,
    style,
  }: {
    children: ReactNode;
    justify?:
      | 'center'
      | 'space-between'
      | 'flex-start'
      | 'flex-end'
      | 'space-around'
      | 'space-evenly'
      | undefined;
    gap?: string | number | undefined;
    style?: StyleProp<ViewStyle>;
  }) => {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: justify,
            gap,
          },
          style,
        ]}>
        {children}
      </View>
    );
  }
);
Row.displayName = 'Row';
export default Row;
