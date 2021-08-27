import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../globals/styles/theme';
import { fetchCityInfo, getUserLocation } from '../../utils';
import { API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { cityInfoActions } from '../../store/cityInfo';
import { ICityInfo } from '../../interfaces';

const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json?';

const Home = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const load = async () => {
        const userLocation = await getUserLocation();

        const { latitude, longitude } = userLocation;

        const url = `${BASE_URL}q=${latitude}+${longitude}&key=${API_KEY}&pretty=1`;

        const data: ICityInfo = await fetchCityInfo(url);

        dispatch(cityInfoActions.setCurrentCity(data));
    };

    useEffect(() => {
        load();
    }, [load]);

    const searchInHandler = () => {
        navigation.navigate('Search');
    };

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>Home page</Text>
            <View>
                <Ionicons
                    onPress={searchInHandler}
                    name='search'
                    size={24}
                    color={theme.colors.PRIMARY_COLOR}
                />
            </View>
        </View>
    );
};

export default Home;
