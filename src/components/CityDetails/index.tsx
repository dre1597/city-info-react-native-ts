import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../globals/styles/theme';
import {
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
    Fontisto,
} from '@expo/vector-icons';
import { ICityInfo } from '../../interfaces';
import { styles } from './styles';

const { PRIMARY_COLOR, BORDER_COLOR } = theme.colors;

interface ICityDetailsProps {
    currentCity: ICityInfo;
}
const CityDetails: React.FC<ICityDetailsProps> = ({
    currentCity: {
        drive_on,
        speed_in,
        currency_name,
        currency_symbol,
        continent,
    },
}) => {
    return (
        <View>
            <View style={styles.cityDetails}>
                <View style={styles.cityDetailsRow}>
                    <View
                        style={{
                            ...styles.cityDetailsBox,
                            borderRightWidth: 1,
                            borderRightColor: BORDER_COLOR,
                        }}
                    >
                        <View style={styles.cityDetailsRow}>
                            <Fontisto
                                name='world-o'
                                size={25}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.cityDetailsItems}>
                                <Text>Continent:</Text>
                                <Text style={styles.textSecondary}>
                                    {continent}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cityDetailsBox}>
                        <View style={styles.cityDetailsRow}>
                            <MaterialIcons
                                name='attach-money'
                                size={30}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.cityDetailsItems}>
                                <Text>Currency:</Text>
                                <Text style={styles.textSecondary}>
                                    {currency_name}({currency_symbol})
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        ...styles.cityDetailsRow,
                        borderTopWidth: 1,
                        borderTopColor: BORDER_COLOR,
                    }}
                >
                    <View
                        style={{
                            ...styles.cityDetailsBox,
                            borderRightWidth: 1,
                            borderRightColor: BORDER_COLOR,
                        }}
                    >
                        <View style={styles.cityDetailsRow}>
                            <FontAwesome5
                                name='car'
                                size={30}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.cityDetailsItems}>
                                <Text>Drive side:</Text>
                                <Text style={styles.textSecondary}>
                                    {drive_on}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cityDetailsBox}>
                        <View style={styles.cityDetailsRow}>
                            <MaterialCommunityIcons
                                name='speedometer'
                                size={30}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.cityDetailsItems}>
                                <Text>Speed in:</Text>
                                <Text style={styles.textSecondary}>
                                    {speed_in}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CityDetails;
