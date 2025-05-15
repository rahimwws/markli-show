import { View } from 'react-native';

import { colors } from '@/shared/lib/theme';
import { SmallButton, Typography } from '@/shared/ui';
import PencilEditWrite from '@/shared/ui/Icons/PencilEditWrite';

const Head = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Typography size={20} font="semibold" color="black">
        Profile
      </Typography>
      <SmallButton
        bg="secondary"
        action={() => {}}
        icon={<PencilEditWrite stroke="#000" />}
        text="Edit"
        textColor="black"
        styles={{
          borderColor: colors.background.element,
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default Head;
