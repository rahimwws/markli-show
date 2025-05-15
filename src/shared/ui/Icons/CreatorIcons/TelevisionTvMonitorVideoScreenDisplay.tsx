import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const TelevisionTvMonitorVideoScreenDisplay = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M2.5 6C2.5 4.34315 3.84315 3 5.5 3H19.5C21.1569 3 22.5 4.34315 22.5 6V14C22.5 15.6569 21.1569 17 19.5 17H5.5C3.84315 17 2.5 15.6569 2.5 14V6Z"
        {...props}
      />
      <Path
        d="M6.82554 20.9456C8.60859 20.3323 10.5161 20 12.5003 20C14.4845 20 16.392 20.3323 18.175 20.9456C18.6973 21.1253 19.2663 20.8475 19.4459 20.3253C19.6255 19.803 19.3478 19.234 18.8255 19.0544C16.8366 18.3702 14.7094 18 12.5003 18C10.2911 18 8.16398 18.3702 6.175 19.0544C5.65275 19.234 5.37501 19.803 5.55465 20.3253C5.73429 20.8475 6.30329 21.1253 6.82554 20.9456Z"
        {...props}
      />
    </Svg>
  );
};

export default TelevisionTvMonitorVideoScreenDisplay;
