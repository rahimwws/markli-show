import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const FolderFront = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="150" height="96" viewBox="0 0 150 96" fill="none" {...props}>
      <Path
        d="M103.55 0.902954C109.789 0.902954 115.826 3.1227 120.579 7.16467C125.151 11.0527 130.958 13.1871 136.96 13.1871H149.5V71.4137C149.5 84.7158 138.716 95.4996 125.414 95.4996H24.5859C11.2838 95.4996 0.5 84.7158 0.5 71.4137V13.1871H14.0078C19.5684 13.1871 24.9425 11.18 29.1416 7.53479L29.9883 6.80042C34.3693 2.99729 39.9758 0.902954 45.7773 0.902954H103.55Z"
        fill="#E2E2E2"
        stroke="#E8E8E8"
        {...props}
      />
    </Svg>
  );
};

export default FolderFront;
