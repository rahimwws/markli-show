import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { Typography } from '@/shared/ui';
// icons
import PageTextSearchIcon from '@/shared/ui/Icons/PageTextSearch';

type SearchHeadProps = {
  isSelectMode: boolean;
  setIsSelectMode: (value: boolean) => void;
};

const SearchHead = (props: SearchHeadProps) => {
  const { isSelectMode, setIsSelectMode } = props;

  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.col}>
        <Typography font="semibold" align="left" size={20}>
          “Work”
        </Typography>
        <View style={[styles.row, styles.alignItemsCenter]}>
          <PageTextSearchIcon />
          <Typography font="medium" align="left" size={13}>
            Text Found
          </Typography>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => setIsSelectMode(!isSelectMode)}>
        <Typography font="medium" size={15} color="black">
          {isSelectMode ? 'Cancel' : 'Select'}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default SearchHead;
