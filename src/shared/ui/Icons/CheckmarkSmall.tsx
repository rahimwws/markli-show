import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const CheckmarkSmall = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7 13L10 16L17 8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default CheckmarkSmall;
