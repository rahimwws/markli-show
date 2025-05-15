import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const ToqueChefsCapCook = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M17.6967 4.99927L17.6994 5.0039C20.3684 5.10856 22.5 7.30535 22.5 10C22.5 12.0503 21.2659 13.8124 19.5 14.584V16H5.5V14.584C3.7341 13.8124 2.5 12.0503 2.5 10C2.5 7.30541 4.63152 5.10867 7.30043 5.00391C8.3373 3.20835 10.2775 2 12.5 2C14.7221 2 16.6608 3.20848 17.6967 4.99927Z"
        {...props}
      />
      <Path
        d="M5.5 18V19C5.5 20.6569 6.84315 22 8.5 22H16.5C18.1569 22 19.5 20.6569 19.5 19V18H5.5Z"
        {...props}
      />
    </Svg>
  );
};

export default ToqueChefsCapCook;
