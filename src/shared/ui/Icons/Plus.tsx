import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const Plus = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8.00033 2.66666V7.99999M8.00033 7.99999V13.3333M8.00033 7.99999H2.66699M8.00033 7.99999H13.3337"
        strokeWidth="2"
        strokeLinecap="round"
        {...props}
      />
    </Svg>
  );
};

export default Plus;
