import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../globals/styles/theme';

const Home = () => {
    const navigation = useNavigation();

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
