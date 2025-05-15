import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { useTheme, width } from '@/shared/lib/theme';
import { SmallButton, Tag, Typography } from '@/shared/ui';
// icons
import ArrowRightIcon from '@/shared/ui/Icons/ArrowRight';
import PlusIcon from '@/shared/ui/Icons/Plus';

const tags = [
  {
    id: 1,
    title: 'Work',
    itemCount: 28,
    images: [
      'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: 2,
    title: 'Design',
    itemCount: 21,
    images: [
      'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: 3,
    title: 'Development',
    itemCount: 16,
    images: [
      'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
  {
    id: 4,
    title: 'Development',
    itemCount: 16,
    images: [
      'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
];

const Tags = () => {
  const { colors } = useTheme();
  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate(AppNavigation.HOME_STACK.ROOT, {
          //   screen: AppNavigation.HOME_STACK.ALL_FOLDERS,
          // })
        }}
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
            All tags
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
      <View style={styles.row}>
        {tags.map((tag) => {
          return (
            <View key={tag.id} style={[styles.col, { flexBasis: '33%' }]}>
              <Tag label={tag.title} itemCount={tag.itemCount} images={tag.images} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Tags;
