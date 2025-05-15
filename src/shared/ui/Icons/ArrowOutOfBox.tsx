import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const ArrowOutOfBox = ({ stroke = '#1A1A1A', ...props }: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20 12.75V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V12.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default ArrowOutOfBox;
