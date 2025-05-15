import { ComponentProps } from 'react';
import { Svg, Defs, ClipPath, Rect, G, Path } from 'react-native-svg';

const Web3CryptoSpaceNft = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <G clipPath="url(#clip0_437_10661)">
        <Path
          d="M3.49894 12.1157C2.20789 12.8109 1.49769 13.4385 1.61635 13.8814C1.90223 14.9483 6.89104 14.5386 12.7592 12.9662C18.6273 11.3938 23.1526 9.25428 22.8667 8.18735C22.7481 7.7445 21.8192 7.55605 20.3535 7.59954M3.49894 12.1157C3.50886 12.8477 3.6089 13.5902 3.80702 14.3297C5.0935 19.1308 10.0285 21.9801 14.8297 20.6936C19.6309 19.4071 22.4802 14.4721 21.1937 9.67091C20.9956 8.9315 20.7109 8.23839 20.3535 7.59954M3.49894 12.1157C3.44444 8.09495 6.10919 4.3953 10.171 3.30695C14.2328 2.2186 18.3903 4.09021 20.3535 7.59954"
          strokeWidth="1.5"
          {...props}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_437_10661">
          <Rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Web3CryptoSpaceNft;
