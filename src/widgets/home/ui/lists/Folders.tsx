import { FlatList, TouchableOpacity, View } from 'react-native';

import { AppNavigation, useAppNavigation } from '@/shared/lib/navigation';
import { useTheme } from '@/shared/lib/theme';
import { SmallButton, Typography } from '@/shared/ui';
import Folder from '@/shared/ui/Folder';
// icons
import ArrowRightIcon from '@/shared/ui/Icons/ArrowRight';
import PlusIcon from '@/shared/ui/Icons/Plus';

export const Folders = () => {
  const { colors } = useTheme();
  const navigation = useAppNavigation();
  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(AppNavigation.HOME_STACK.ROOT, {
            screen: AppNavigation.HOME_STACK.ALL_FOLDERS,
          })
        }
        activeOpacity={0.7}
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
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
            All folders
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
            title: 'Work',
            itemCount: 28,
            images: [
              'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600',
            ],
            emoji: '✨',
          },
          {
            id: 2,
            title: 'Design',
            itemCount: 21,
            images: [
              'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
            ],
            emoji: '🎨',
          },
          {
            id: 3,
            title: 'Development',
            itemCount: 16,
            images: [
              'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=600',
            ],
            emoji: '🔧',
          },
        ]}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ padding: 20, gap: 12 }}
        renderItem={({ item }) => (
          <Folder
            title={item.title}
            itemCount={item.itemCount}
            images={item.images}
            emoji={item.emoji}
          />
        )}
      />
    </View>
  );
};
