import { useCallback, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Typography } from '@/shared/ui';

const tags = ['#Backend', '#Onboarding', '#Illustration', '#Something'];

const SearchTagList = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const handleTagPress = useCallback((item: string) => {
    setActiveTags((prevTags) => {
      if (prevTags.includes(item)) {
        return prevTags.filter((tag) => tag !== item);
      }
      return [...prevTags, item];
    });
  }, []);

  const renderTagItem = useCallback(
    (item: string) => {
      const isActive = activeTags?.some((tag) => tag === item);
      return (
        <TouchableOpacity
          style={[styles.tag, isActive && styles.tag_active]}
          onPress={() => handleTagPress(item)}>
          <Typography color={isActive ? 'white' : 'black'} font="medium" size={15}>
            {item}
          </Typography>
        </TouchableOpacity>
      );
    },
    [activeTags]
  );

  return (
    <FlatList
      data={tags}
      renderItem={({ item }) => renderTagItem(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 12, padding: 16 }}
      keyExtractor={(item) => item}
    />
  );
};

export default SearchTagList;
