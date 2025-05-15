import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

// icons
import { colors } from '@/shared/lib/theme';
import { Typography } from '@/shared/ui';
import ArrowRight from '@/shared/ui/Icons/ArrowRight';
import StarIcon from '@/shared/ui/Icons/Star';

const MenuList = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listItem}>
        <StarIcon fill={colors.primary.black} />
        <Typography color="black" size={15} styles={{ marginLeft: 10 }}>
          Upgrade to Pro Plan
        </Typography>
        <View
          style={{
            marginLeft: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#7F7FFF', '#E07FFF', '#FFA07F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.badge}>
            <Typography color="white" font="semibold" size={15}>
              PRO
            </Typography>
          </LinearGradient>
          <ArrowRight stroke={colors.primary.gray} />
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.listItem}>
        <StarIcon fill={colors.primary.black} />
        <Typography color="black" size={15} styles={{ marginLeft: 10 }}>
          Upgrade to Pro Plan
        </Typography>
        <View style={{ marginLeft: 'auto' }}>
          <ArrowRight stroke={colors.primary.gray} />
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.listItem}>
        <StarIcon fill={colors.primary.black} />
        <Typography color="black" size={15} styles={{ marginLeft: 10 }}>
          Upgrade to Pro Plan
        </Typography>
        <View style={{ marginLeft: 'auto' }}>
          <ArrowRight stroke={colors.primary.gray} />
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.listItem}>
        <StarIcon fill={colors.primary.black} />
        <Typography color="black" size={15} styles={{ marginLeft: 10 }}>
          Upgrade to Pro Plan
        </Typography>
        <View style={{ marginLeft: 'auto' }}>
          <ArrowRight stroke={colors.primary.gray} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuList;
