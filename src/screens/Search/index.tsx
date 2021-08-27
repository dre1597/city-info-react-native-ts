import React from 'react';
import { View } from 'react-native';
import Previous from '../../components/Previous';
import SearchForm from '../../components/SearchForm';
import { styles } from './styles';

const SearchScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <SearchForm />
            <Previous />
        </View>
    );
};

export default SearchScreen;
