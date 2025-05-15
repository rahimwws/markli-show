import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const ArmchairSeatChill = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M5.5 10V6C5.5 4.34315 6.84315 3 8.5 3H16.5C18.1569 3 19.5 4.34315 19.5 6V10C17.8431 10 16.5 11.3431 16.5 13H8.5C8.5 11.3431 7.15685 10 5.5 10Z"
        {...props}
      />
      <Path
        d="M5 12C4.17157 12 3.5 12.6716 3.5 13.5V16C3.5 17.6569 4.84315 19 6.5 19L6.5 20C6.5 20.5523 6.94772 21 7.5 21C8.05228 21 8.5 20.5523 8.5 20V19H16.5V20C16.5 20.5523 16.9477 21 17.5 21C18.0523 21 18.5 20.5523 18.5 20V19C20.1569 19 21.5 17.6569 21.5 16V13C21.5 12.1716 20.8284 11.5 20 11.5C19.1716 11.5 18.5 12.1716 18.5 13V15H6.5V13.5C6.5 12.6716 5.82843 12 5 12Z"
        {...props}
      />
    </Svg>
  );
};

export default ArmchairSeatChill;
