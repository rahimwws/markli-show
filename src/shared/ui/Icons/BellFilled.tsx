import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const BellFilled = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C8.10602 2 4.89608 5.05346 4.70162 8.94258L4.53269 12.3213C4.51886 12.5977 4.44781 12.8683 4.32404 13.1159L3.19098 15.382C3.06539 15.6332 3 15.9101 3 16.191C3 17.1901 3.80992 18 4.80902 18H7.10002C7.56329 20.2822 9.58104 22 12 22C14.419 22 16.4367 20.2822 16.9 18H19.191C20.1901 18 21 17.1901 21 16.191C21 15.9101 20.9346 15.6332 20.809 15.382L19.676 13.1159C19.5522 12.8683 19.4811 12.5977 19.4673 12.3213L19.2984 8.94258C19.1039 5.05346 15.894 2 12 2ZM12 20C10.6938 20 9.58254 19.1652 9.17071 18H14.8293C14.4175 19.1652 13.3062 20 12 20Z"
        {...props}
      />
    </Svg>
  );
};

export default BellFilled;
