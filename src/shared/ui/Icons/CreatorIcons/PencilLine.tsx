import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const PencilLine = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M15.8787 2.70705C17.0503 1.53548 18.9497 1.53548 20.1213 2.70705L21.7929 4.37862C22.9645 5.55019 22.9645 7.44969 21.7929 8.62126L9.29289 21.1213C8.73028 21.6839 7.96722 21.9999 7.17157 21.9999H3.5C2.94772 21.9999 2.5 21.5522 2.5 20.9999V17.3284C2.5 16.5327 2.81607 15.7697 3.37868 15.207L15.8787 2.70705Z"
        {...props}
      />
      <Path
        d="M14.5 20C13.9477 20 13.5 20.4477 13.5 21C13.5 21.5523 13.9477 22 14.5 22H21.5C22.0523 22 22.5 21.5523 22.5 21C22.5 20.4477 22.0523 20 21.5 20H14.5Z"
        {...props}
      />
    </Svg>
  );
};

export default PencilLine;
