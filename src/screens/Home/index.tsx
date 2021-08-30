import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { theme } from '../../globals/styles/theme';
import { ICityInfo, ILocation } from '../../interfaces';
import { styles } from './styles';
import { getUserLocation } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '../../components/SearchIcon';
import { API_KEY } from '@env';
import CityDetails from '../../components/CityDetails';
import CityInfo from '../../components/CityInfo';
import ReloadIcon from '../../components/ReloadIcon';

const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json?';

const HomeScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [currentCity, setCurrentCity] = useState<ICityInfo>();
  const getCurrentCity = useSelector((state: any) => state.cityInfo);
  const currentCityRef = useRef<ICityInfo | undefined>();

  useEffect(() => {
    if (getCurrentCity) {
      currentCityRef.current = getCurrentCity;
    }
    if (currentCityRef.current) {
      setCurrentCity(currentCityRef.current);
    }
  }, [getCurrentCity]);

  if (currentCity && currentCity.city !== '') {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.main}>
          <SearchIcon />
          <ReloadIcon />
          <CityInfo currentCity={currentCity} />
        </View>
        <CityDetails currentCity={currentCity} />
      </View>
    );
  } else if (currentCity && currentCity.city === '') {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <SearchIcon />
        <View style={styles.main}>
          <Text style={styles.welcome}>Please search for a location</Text>
        </View>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <SearchIcon />
        <ReloadIcon />
        <Text style={styles.error}>{errorMessage}</Text>
        <StatusBar style='auto' />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <ActivityIndicator size='large' color={theme.colors.PRIMARY_COLOR} />
      </View>
    );
  }
};

export default HomeScreen;
