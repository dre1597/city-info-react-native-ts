import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { theme } from '../../globals/styles/theme';
import { ICityInfo, ILocation } from '../../interfaces';
import { styles } from './styles';
import { getUserLocation } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '../../components/SearchIcon';
import { API_KEY } from '@env';
import CityDetails from '../../components/CityDetails';
import CityInfo from '../../components/CityInfo';

const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json?';

const HomeScreen: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const [currentCity, setCurrentCity] = useState<ICityInfo>();
    const getCurrentCity = useSelector((state: any) => state.cityInfo);
    const currentCityRef = useRef<ICityInfo | undefined>();
    const dispatch = useDispatch();

    console.log(currentCity);

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
                    <CityInfo currentCity={currentCity} />
                </View>
                <CityDetails currentCity={currentCity} />
            </View>
        );
    } else if (currentCity && currentCity.city === '') {
        return (
            <View style={styles.container}>
                <SearchIcon />
                <Text style={{ textAlign: 'center' }}>
                    Please search for a location
                </Text>
                <StatusBar style='auto' />
            </View>
        );
    } else if (errorMessage) {
        return (
            <View style={styles.container}>
                <SearchIcon />
                <Text style={{ textAlign: 'center' }}>{errorMessage}</Text>
                <StatusBar style='auto' />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>{errorMessage}</Text>
                <ActivityIndicator
                    size='large'
                    color={theme.colors.PRIMARY_COLOR}
                />
            </View>
        );
    }
};

export default HomeScreen;
