import { View } from 'react-native';

import { styles } from './style';

import { AppNavigation, useAppNavigation } from '@/shared/lib/navigation';
import { SmallButton } from '@/shared/ui';
// icons
import BellIcon from '@/shared/ui/Icons/Bell';
import PlusIcon from '@/shared/ui/Icons/Plus';
import StarIcon from '@/shared/ui/Icons/Star';
import { useTheme } from '@/theme/useTheme';

export const HomeHeader = ({ onPress }: { onPress: () => void }) => {
  const { colors } = useTheme();
  const navigation = useAppNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <SmallButton
          text="Free plan"
          textColor="gray"
          bg="primary"
          icon={<StarIcon fill={colors.primary.gray} />}
          action={() =>
            navigation.navigate(AppNavigation.HOME_STACK.ROOT, {
              screen: AppNavigation.HOME_STACK.PAYWALL,
            })
          }
        />
        <SmallButton
          textColor="gray"
          bg="primary"
          icon={<BellIcon width={20} height={20} fill={colors.primary.gray} />}
          action={() =>
            navigation.navigate(AppNavigation.HOME_STACK.ROOT, {
              screen: AppNavigation.HOME_STACK.NOTIFICATIONS,
            })
          }
        />
      </View>
      <SmallButton
        text="Create"
        icon={<PlusIcon width={16} height={16} stroke={colors.primary.white} />}
        action={onPress}
      />
    </View>
  );
};

export default HomeHeader;
