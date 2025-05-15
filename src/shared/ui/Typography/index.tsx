import React, { memo } from 'react';
import { Text, StyleProp, TextStyle, TextProps, FlexStyle } from 'react-native';

import { ColorsT, fontsT } from '@/shared/lib/theme';
import { useTheme } from '@/theme/useTheme';
type AlignSetting = 'auto' | 'left' | 'right' | 'center' | 'justify';
type ColorPair = { [K in keyof ColorsT]: [K, keyof ColorsT[K]] }[keyof ColorsT];
type Props = {
  children: React.ReactNode;
  size?: number;
  color?: keyof ColorsT['primary'] | ColorPair;
  font?: keyof fontsT;
  align?: AlignSetting;
  styles?: StyleProp<TextStyle>;
  textProps?: TextProps;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  uppercase?: boolean;
  width?: FlexStyle['width'];
};

const Typography = memo(
  ({
    children,
    size = 16,
    color = 'black',
    font = 'regular',
    align = 'center',
    width = 'auto',
    styles,
    textProps,
    top,
    bottom,
    left,
    right,
    uppercase,
  }: Props) => {
    const { colors } = useTheme();
    let resolvedColor = colors.primary.black;

    if (typeof color === 'string') {
      resolvedColor = colors.primary[color] ?? colors.primary.black;
    } else if (Array.isArray(color)) {
      const [section, key] = color;
      const sectionColors = colors[section] as Record<string, string>;
      resolvedColor = sectionColors?.[key] ?? colors.primary.black;
    }

    return (
      <Text
        allowFontScaling={false}
        style={{
          width,
          fontFamily: font,
          fontSize: size,
          color: resolvedColor,
          textAlign: align,
          marginTop: top ? `${top}%` : undefined,
          marginBottom: bottom ? `${bottom}%` : undefined,
          marginLeft: left ? `${left}%` : undefined,
          marginRight: right ? `${right}%` : undefined,
          textTransform: uppercase ? 'uppercase' : 'none',
          ...(styles as object),
        }}
        {...textProps}>
        {children}
      </Text>
    );
  }
);
export default Typography;
