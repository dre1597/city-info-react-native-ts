import React from 'react';
import { View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { cityInfoActions } from '../../store/cityInfo';
import { theme } from '../../globals/styles/theme';

const ReloadIcon: React.FC = () => {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';

  const getPreviousSearches = useSelector(
    (state: any) => state.previousSearches.cityInfoList
  );
  const dispatch = useDispatch();

  const lastSearch = getPreviousSearches[2];

  const reloadHandler = () => {
    if (lastSearch) {
      dispatch(cityInfoActions.setCurrentCity(lastSearch));
    }
  };

  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={reloadHandler}
        name={reloadIconName}
        size={24}
        color={theme.colors.PRIMARY_COLOR}
      />
    </View>
  );
};

export default ReloadIcon;
