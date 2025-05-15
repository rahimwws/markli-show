import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const CirclePlusAdd = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M16.2426 12.5005H7.75736M12 16.7431V8.25781M21.25 12.5C21.25 17.6086 17.1086 21.75 12 21.75C6.89137 21.75 2.75 17.6086 2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5Z"
        stroke="#6B6B6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        {...props}
      />
    </Svg>
  );
};

export default CirclePlusAdd;
