import { ComponentProps } from 'react';
import { Svg, Path } from 'react-native-svg';

const FashionWearClothesTShirt = (props: ComponentProps<typeof Svg>) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0084 3.53525C9.65665 3.03676 9.00864 2.74071 8.46075 3.00905L2.75237 5.80492C1.88754 6.2285 1.44736 7.20825 1.705 8.13613L1.94191 8.98938C2.24634 10.0858 3.4029 10.7076 4.48539 10.3569L5.50023 10.0282V18C5.50023 19.6568 6.84338 21 8.50023 21H16.5002C18.1571 21 19.5002 19.6568 19.5002 18V10.0282L20.515 10.3569C21.5975 10.7076 22.7541 10.0858 23.0585 8.9894L23.2954 8.13615C23.5531 7.20826 23.1129 6.22849 22.2481 5.80491L16.5397 3.00905C15.9918 2.7407 15.3438 3.03676 14.992 3.53524C13.7483 5.29796 11.2521 5.29797 10.0084 3.53525Z"
        {...props}
      />
    </Svg>
  );
};

export default FashionWearClothesTShirt;
