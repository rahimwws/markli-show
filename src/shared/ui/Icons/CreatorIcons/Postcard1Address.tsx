import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const Postcard1Address = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 7C2.5 5.34315 3.84315 4 5.5 4H19.5C21.1569 4 22.5 5.34315 22.5 7V17C22.5 18.6569 21.1569 20 19.5 20H5.5C3.84315 20 2.5 18.6569 2.5 17V7ZM6.5 10C6.5 9.44772 6.94772 9 7.5 9H11.5C12.0523 9 12.5 9.44772 12.5 10C12.5 10.5523 12.0523 11 11.5 11H7.5C6.94772 11 6.5 10.5523 6.5 10ZM14.5 10C14.5 9.44772 14.9477 9 15.5 9H17.5C18.0523 9 18.5 9.44772 18.5 10V13C18.5 13.5523 18.0523 14 17.5 14H15.5C14.9477 14 14.5 13.5523 14.5 13V10ZM6.5 13.5C6.5 12.9477 6.94772 12.5 7.5 12.5H9.5C10.0523 12.5 10.5 12.9477 10.5 13.5C10.5 14.0523 10.0523 14.5 9.5 14.5H7.5C6.94772 14.5 6.5 14.0523 6.5 13.5Z"
        {...props}
      />
    </Svg>
  );
};

export default Postcard1Address;
