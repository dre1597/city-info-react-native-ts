import React from 'react';
import { View, Text, Image } from 'react-native';
import { ICityInfo } from '../../interfaces';
import { styles } from './styles';

interface ICityInfoProps {
    currentCity: ICityInfo;
}

const CityInfo: React.FC<ICityInfoProps> = ({
    currentCity: { city, country_code, state, country },
}) => {
    const imageUri = `https://www.countryflags.io/${country_code}/flat/64.png`;
    console.log(imageUri);
    return (
        <View style={styles.cityInfo}>
            <Text>{city}</Text>
            <Image
                style={styles.flag}
                source={{
                    uri: imageUri,
                }}
            />
            <Text style={styles.textPrimary}>{state}</Text>
            <Text style={styles.textSecondary}>{country}</Text>
        </View>
    );
};

export default CityInfo;
