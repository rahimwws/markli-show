import { memo, ReactNode } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import Typography from '../Typography';

import { SoftTouch } from '@/shared/lib/heptics';
import { useAppNavigation } from '@/shared/lib/navigation';
import { AppParamList } from '@/shared/lib/navigation/useAppNavigation';
import { ColorsT } from '@/shared/lib/theme/';
import { useTheme } from '@/shared/lib/theme/useTheme';

interface LargeButtonProps {
  text?: string;
  isRoute?: boolean;
  route?: keyof AppParamList;
  action?: () => void;
  heptic?: boolean;
  disabled?: boolean;
  bg?: keyof ColorsT['background'];
  styles?: StyleProp<ViewStyle>;
  icon?: ReactNode;
  textColor?: keyof ColorsT['primary'];
}

const LargeButton = memo(
  ({
    text,
    isRoute = false,
    route,
    action,
    heptic = true,
    disabled = false,
    bg,
    styles,
    icon,
    textColor,
  }: LargeButtonProps) => {
    const navigation = useAppNavigation();
    const { colors } = useTheme();
    const HandleClick = () => {
      if (isRoute && route) navigation.navigate(route);
      if (action) action();
      if (heptic) SoftTouch();
    };
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          {
            width: '100%',
            backgroundColor: bg ? colors.background[bg] : colors.primary.black,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            opacity: disabled ? 0.5 : 1,
            gap: 7,
            flexDirection: 'row',
          },
          styles && styles,
        ]}
        disabled={disabled}
        onPress={HandleClick}>
        {icon ? icon : null}
        {text ? (
          <Typography font="medium" color={textColor ? textColor : 'white'}>
            {text}
          </Typography>
        ) : null}
      </TouchableOpacity>
    );
  }
);
LargeButton.displayName = 'LargeButton';
export default LargeButton;
