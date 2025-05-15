import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const MacbookLaptopComputer = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 6C3.5 4.34315 4.84315 3 6.5 3H18.5C20.1569 3 21.5 4.34315 21.5 6V15H22.5C23.0523 15 23.5 15.4477 23.5 16V18C23.5 19.6569 22.1569 21 20.5 21H4.5C2.84315 21 1.5 19.6569 1.5 18V16C1.5 15.4477 1.94772 15 2.5 15H3.5V6ZM3.5 17V18C3.5 18.5523 3.94772 19 4.5 19H20.5C21.0523 19 21.5 18.5523 21.5 18V17H3.5Z"
        {...props}
      />
    </Svg>
  );
};

export default MacbookLaptopComputer;
