import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const CircleDotsCenter2 = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.7461 12.0771C16.7075 12.4551 16.3882 12.75 16 12.75C15.5858 12.75 15.25 12.4142 15.25 12C15.25 11.5858 15.5858 11.25 16 11.25C16.4142 11.25 16.75 11.5858 16.75 12L16.7461 12.0771Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        {...props}
      />
      <Path
        d="M12.7461 12.0771C12.7075 12.4551 12.3882 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12L12.7461 12.0771Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        {...props}
      />
      <Path
        d="M8.74609 12.0771C8.70747 12.4551 8.38817 12.75 8 12.75C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25C8.41421 11.25 8.75 11.5858 8.75 12L8.74609 12.0771Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        {...props}
      />
      <Path
        d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
        stroke="#1A1A1A"
        strokeWidth="2"
        {...props}
      />
    </Svg>
  );
};

export default CircleDotsCenter2;
