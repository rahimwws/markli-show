import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const Spaces = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M11.25 10.5V22H7.81C4.17 22 2 19.83 2 16.19V10.5H11.25Z" {...props} />
      <Path d="M22 10.5V16.19C22 19.83 19.83 22 16.19 22H12.75V10.5H22Z" {...props} />
      <Path d="M22 7.81V9H2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" {...props} />
    </Svg>
  );
};

export default Spaces;
