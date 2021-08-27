import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import SearchFormButton from '../SearchFormButton';
import { ICityInfo, ILocation } from '../../interfaces';
import { fetchCityInfo, getUserLocation } from '../../utils';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { API_KEY } from '@env';
import { previousSearchesActions } from '../../store/previousSearches';
import { cityInfoActions } from '../../store/cityInfo';

const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json?';

const SearchForm: React.FC = () => {
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    async function load() {
        setErrorMessage('');
        try {
            const userLocation: ILocation = await getUserLocation();
            if (userLocation.errorMessage) {
                setErrorMessage(userLocation.errorMessage);
                return;
            }
            const { latitude, longitude } = userLocation;

            const url = `${BASE_URL}q=${latitude}+${longitude}&key=${API_KEY}&pretty=1`;

            fetchCityInfo(url).then((response: ICityInfo) => {
                dispatch(cityInfoActions.setCurrentCity(response));
                dispatch(previousSearchesActions.addSearch(response));
            });
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    async function loadInfoByCity() {
        setErrorMessage('');
        try {
            const url = `${BASE_URL}q=${city}&key=${API_KEY}&pretty=1`;

            fetchCityInfo(url).then((response: ICityInfo) => {
                dispatch(cityInfoActions.setCurrentCity(response));
                dispatch(previousSearchesActions.addSearch(response));
            });
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    const submitHandler = () => {
        loadInfoByCity().then(() => navigation.navigate('Home'));
    };

    const getLocationHandler = () => {
        load().then(() => navigation.navigate('Home'));
    };

    return (
        <>
            <StatusBar style='auto' />
            <Text style={styles.title}>Type your location here:</Text>
            <View>
                <TextInput
                    style={styles.inputCity}
                    onChangeText={setCity}
                    value={city}
                    placeholder='Your city'
                    keyboardType='default'
                />
            </View>
            <View style={styles.btnContainer}>
                <SearchFormButton onPress={submitHandler}>
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>
                        Submit
                    </Text>
                </SearchFormButton>
                <SearchFormButton onPress={getLocationHandler}>
                    <MaterialIcons
                        name='my-location'
                        size={24}
                        color='#ffffff'
                    />
                </SearchFormButton>
            </View>
        </>
    );
};

export default SearchForm;
