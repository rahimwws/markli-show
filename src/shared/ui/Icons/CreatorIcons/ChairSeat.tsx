import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const ChairSeat = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 5C5.5 3.34315 6.84315 2 8.5 2H16.5C18.1569 2 19.5 3.34315 19.5 5V8C19.5 9.30622 18.6652 10.4175 17.5 10.8293V13H19.5C20.0523 13 20.5 13.4477 20.5 14C20.5 14.5523 20.0523 15 19.5 15V21C19.5 21.5523 19.0523 22 18.5 22C17.9477 22 17.5 21.5523 17.5 21V19H7.5V21C7.5 21.5523 7.05228 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21V15C4.94772 15 4.5 14.5523 4.5 14C4.5 13.4477 4.94772 13 5.5 13H7.5V10.8293C6.33481 10.4175 5.5 9.30622 5.5 8V5ZM9.5 11V13H15.5V11H9.5ZM17.5 15V17H7.5V15H17.5Z"
        {...props}
      />
    </Svg>
  );
};

export default ChairSeat;
