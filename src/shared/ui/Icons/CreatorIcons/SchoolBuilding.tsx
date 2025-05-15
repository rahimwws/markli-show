import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const SchoolBuilding = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 4C7.84315 4 6.5 5.34315 6.5 7V18H5.5V8C3.84315 8 2.5 9.34315 2.5 11V18C1.94772 18 1.5 18.4477 1.5 19C1.5 19.5523 1.94772 20 2.5 20H22.5C23.0523 20 23.5 19.5523 23.5 19C23.5 18.4477 23.0523 18 22.5 18V11C22.5 9.34315 21.1569 8 19.5 8V18H18.5V7C18.5 5.34315 17.1569 4 15.5 4H9.5ZM12.5 15C11.3954 15 10.5 15.8954 10.5 17V18H14.5V17C14.5 15.8954 13.6046 15 12.5 15Z"
        {...props}
      />
    </Svg>
  );
};

export default SchoolBuilding;
