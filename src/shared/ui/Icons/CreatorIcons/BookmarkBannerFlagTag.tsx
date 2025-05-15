import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const BookmarkBannerFlagTag = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M7.5 2C5.84314 2 4.5 3.34315 4.5 5V19.9948C4.5 21.6146 6.32485 22.5625 7.65006 21.6311L11.925 18.6265C12.27 18.384 12.73 18.384 13.075 18.6265L17.3499 21.6311C18.6751 22.5625 20.5 21.6146 20.5 19.9948V5C20.5 3.34315 19.1569 2 17.5 2H7.5Z"
        {...props}
      />
    </Svg>
  );
};

export default BookmarkBannerFlagTag;
