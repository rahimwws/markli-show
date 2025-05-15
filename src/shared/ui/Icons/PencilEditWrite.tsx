import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const PencilEditWrite = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8.83301 4.16679L10.7235 2.27627C11.2442 1.75557 12.0885 1.75557 12.6091 2.27627L13.7235 3.39065C14.2442 3.91135 14.2442 4.75557 13.7235 5.27627L11.833 7.16679M8.83301 4.16679L2.22353 10.7763C1.97348 11.0263 1.83301 11.3655 1.83301 11.7191V14.1668H4.28072C4.63435 14.1668 4.97348 14.0263 5.22353 13.7763L11.833 7.16679M8.83301 4.16679L11.833 7.16679"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default PencilEditWrite;
