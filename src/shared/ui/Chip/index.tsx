import { View } from 'react-native';

import Typography from '../Typography';

export const Chip = ({ text, color }: { text: string; color: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: color,
      }}>
      <Typography font="semibold" size={18}>
        {text}
      </Typography>
    </View>
  );
};
