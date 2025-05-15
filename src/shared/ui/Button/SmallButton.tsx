import { memo, ReactNode } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import Typography from '../Typography';

import { SoftTouch } from '@/shared/lib/heptics';
import { useAppNavigation } from '@/shared/lib/navigation';
import { AppParamList } from '@/shared/lib/navigation/useAppNavigation';
import { ColorsT, useTheme } from '@/shared/lib/theme';

interface Props {
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

const SmallButton = memo(
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
  }: Props) => {
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
            padding: 8,
            backgroundColor: bg ? colors.background[bg] : colors.primary.black,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
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

SmallButton.displayName = 'SmallButton';

export default SmallButton;
