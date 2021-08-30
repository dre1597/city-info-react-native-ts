import React from 'react';

import { View, ActivityIndicator } from 'react-native';
import { theme } from '../../globals/styles/theme';

import { styles } from './styles';

const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.PRIMARY_COLOR} />
    </View>
  );
};

export default Load;
