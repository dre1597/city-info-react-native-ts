import { ICityInfo } from './../interfaces/index';
import * as Location from 'expo-location';

export const getUserLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            return {
                errorMessage: 'Access to location is needed to run the app',
            };
        }

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });

        const { latitude, longitude } = location.coords;

        return { latitude, longitude };
    } catch (error) {
        return {
            errorMessage: error.message,
        };
    }
};

export const fetchCityInfo = async (url: string): Promise<ICityInfo> => {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results[0];

    if (response.ok) {
        const {
            components: { city, state, country, state_code },
            annotations: {
                roadinfo: { drive_on, speed_in },
                currency: { name, symbol },
            },
        } = results;

        return {
            city,
            state,
            state_code,
            country,
            drive_on,
            speed_in,
            currency_name: name,
            currency_symbol: symbol,
        };
    } else {
        throw new Error('Error on fetch data');
    }
};
