import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Search = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>Search page</Text>
        </View>
    );
};

export default Search;
