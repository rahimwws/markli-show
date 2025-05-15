import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const ChevronLeftSmall = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.5858 16L10.2929 12.7071C9.90237 12.3166 9.90237 11.6834 10.2929 11.2929L13.5858 8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default ChevronLeftSmall;
