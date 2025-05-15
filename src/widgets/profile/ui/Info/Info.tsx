import { useMemo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import { Typography } from '@/shared/ui';

type InfoProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const Info = (props: InfoProps) => {
  const { firstName, lastName, email } = props;
  const firstLetter = useMemo(() => {
    return firstName.slice(0, 1);
  }, [firstName]);
  const secondLetter = useMemo(() => {
    return lastName.slice(0, 1);
  }, [lastName]);

  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Typography size={39} font="semibold" color="white">
          {firstLetter}
          {secondLetter}
        </Typography>
      </View>
      <Typography font="semibold" color="black" size={20}>
        {firstName} {lastName}
      </Typography>
      <Typography size={15} color={['text', 'secondary']}>
        {email}
      </Typography>
    </View>
  );
};

export default Info;
