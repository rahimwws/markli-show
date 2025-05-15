import { TouchableOpacity } from 'react-native';

import styles from './styles';

import { colors } from '@/shared/lib/theme';
import { Typography } from '@/shared/ui';
import SearchIcon from '@/shared/ui/Icons/Search';

type SearchInputProps = {
  onPress: () => void;
};

const SearchInput = (props: SearchInputProps) => {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SearchIcon width={22} height={22} fill={colors.primary.gray} />
      <Typography size={17} color="gray" font="medium">
        Search
      </Typography>
    </TouchableOpacity>
  );
};

export default SearchInput;
