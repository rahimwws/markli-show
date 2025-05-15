import { useEffect, useMemo, useState } from 'react';
import {
  View,
  TextInput,
  Animated as RNAnimated,
  TouchableOpacity,
  TextInputProps,
  Keyboard,
} from 'react-native';
import { useKeyboardAnimation } from 'react-native-keyboard-controller';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
// icons
import ClearIcon from '@/shared/ui/Icons/Clear';
import MicrophoneIcon from '@/shared/ui/Icons/Microphone';
import SearchIcon from '@/shared/ui/Icons/Search';

type SearchInputProps = TextInputProps & {
  onKeyBoardVisibleChange?: (value: boolean) => void;
};

const SearchInput = ({ onKeyBoardVisibleChange, ...props }: SearchInputProps) => {
  const { height, progress } = useKeyboardAnimation();
  const [searchValue, setSearchValue] = useState('');
  const [iskeyboardVisible, setIsKeyboardVisible] = useState(false);
  const color = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', '#D2D5DB'],
  });

  const searchShadowStyle = useMemo(() => {
    if (iskeyboardVisible) return null;
    return styles.searchWrapperShadow;
  }, [iskeyboardVisible]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
      onKeyBoardVisibleChange?.(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
      onKeyBoardVisibleChange?.(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <RNAnimated.View
      style={{
        backgroundColor: color,
        transform: [{ translateY: height }],
        paddingHorizontal: 16,
      }}>
      {/* <FlatList
        data={tags}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderTagItem(item)}
      /> */}
      <View style={[styles.searchContainer, searchShadowStyle]}>
        <SearchIcon width={22} height={22} fill={colors.primary.gray} style={{ marginRight: 10 }} />
        <TextInput
          keyboardAppearance="light"
          style={styles.search}
          keyboardType="default"
          returnKeyType="search"
          placeholder="Search screenshots"
          placeholderTextColor={colors.primary.gray}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          multiline={false}
          {...props}
        />
        {searchValue.length ? (
          <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => setSearchValue('')}>
            <ClearIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => {}}>
            <MicrophoneIcon width={22} height={22} />
          </TouchableOpacity>
        )}
      </View>
    </RNAnimated.View>
  );
};

export default SearchInput;
