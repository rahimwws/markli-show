import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const FolderOpen = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.44076 19H18.0296C18.9044 19 19.6777 18.4315 19.9386 17.5965L21.5943 12.2983C21.7955 11.6543 21.3144 11 20.6398 11H20M4.44076 19C5.07093 19 5.62798 18.5905 5.81594 17.989L7.56142 12.4034C7.82234 11.5685 8.59561 11 9.47038 11H20M4.44076 19C3.64505 19 3 18.3549 3 17.5592V7C3 5.34315 4.34315 4 6 4H8.39445C9.39751 4 10.3342 4.5013 10.8906 5.3359L11.4063 6.1094C11.7772 6.6658 12.4017 7 13.0704 7H18C19.1046 7 20 7.89543 20 9V11"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default FolderOpen;
