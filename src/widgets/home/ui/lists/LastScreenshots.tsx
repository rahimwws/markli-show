import { FlatList, TouchableOpacity, View } from 'react-native';

import { AppNavigation, useAppNavigation } from '@/shared/lib/navigation';
import { useTheme } from '@/shared/lib/theme';
import { Screenshot, SmallButton, Typography } from '@/shared/ui';
// icons
import ArrowRightIcon from '@/shared/ui/Icons/ArrowRight';
import PlusIcon from '@/shared/ui/Icons/Plus';

export const LastScreenshots = () => {
  const { colors } = useTheme();
  const navigation = useAppNavigation();
  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(AppNavigation.HOME_STACK.ROOT, {
            screen: AppNavigation.HOME_STACK.LAST_SCREENSHOTS,
          })
        }
        activeOpacity={0.7}
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}>
          <Typography size={20} color="black" font="semibold">
            Last screenshots
          </Typography>

          <SmallButton
            textColor="gray"
            bg="primary"
            icon={<PlusIcon width={16} height={16} stroke={colors.primary.gray} />}
            action={() => {}}
          />
        </View>
        <ArrowRightIcon width={20} height={20} stroke={colors.primary.gray} />
      </TouchableOpacity>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          {
            id: 1,
            image:
              'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 2,
            image:
              'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 3,
            image:
              'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 4,
            image:
              'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 5,
            image:
              'https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ]}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ padding: 20, gap: 10 }}
        renderItem={({ item }) => <Screenshot image={item.image} />}
      />
    </View>
  );
};
