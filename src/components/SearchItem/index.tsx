import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../globals/styles/theme';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ICityInfo } from '../../interfaces';
import { cityInfoActions } from '../../store/cityInfo';

type Props = {
    item: ICityInfo;
};

const SearchItem: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const pressItemHandler = () => {
        dispatch(cityInfoActions.setCurrentCity(item));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.prevSearchesItemContainer}>
            <View style={styles.prevSearchesItemRight}>
                <Text style={styles.prevSearchesCity}>{item.city}</Text>
                <Text>
                    {item.state_code}, {item.country}
                </Text>
            </View>
            <View>
                <RectButton onPress={pressItemHandler}>
                    <AntDesign
                        name='arrowright'
                        size={24}
                        color={theme.colors.PRIMARY_COLOR}
                    />
                </RectButton>
            </View>
        </View>
    );
};

export default SearchItem;
