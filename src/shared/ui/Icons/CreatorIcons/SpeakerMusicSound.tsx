import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const SpeakerMusicSound = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M12.5 12C11.3954 12 10.5 12.8954 10.5 14C10.5 15.1046 11.3954 16 12.5 16C13.6046 16 14.5 15.1046 14.5 14C14.5 12.8954 13.6046 12 12.5 12Z"
        {...props}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 2C5.84315 2 4.5 3.34315 4.5 5V19C4.5 20.6569 5.84315 22 7.5 22H17.5C19.1569 22 20.5 20.6569 20.5 19V5C20.5 3.34315 19.1569 2 17.5 2H7.5ZM8.5 14C8.5 11.7909 10.2909 10 12.5 10C14.7091 10 16.5 11.7909 16.5 14C16.5 16.2091 14.7091 18 12.5 18C10.2909 18 8.5 16.2091 8.5 14ZM10.5 6C9.94772 6 9.5 6.44772 9.5 7C9.5 7.55228 9.94772 8 10.5 8H14.5C15.0523 8 15.5 7.55228 15.5 7C15.5 6.44772 15.0523 6 14.5 6H10.5Z"
        {...props}
      />
    </Svg>
  );
};

export default SpeakerMusicSound;
