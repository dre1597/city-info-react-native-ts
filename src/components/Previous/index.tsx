import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import SearchItem from '../SearchItem';
import { useSelector } from 'react-redux';
import { ICityInfo } from '../../interfaces';

const Previous: React.FC = () => {
    const getPreviousSearches = useSelector(
        (state: any) => state.previousSearches.cityInfoList
    );
    const previousSearchesRef = useRef<ICityInfo[] | undefined>();

    const [previousSearches, setPreviousSearches] = useState<ICityInfo[]>([]);

    useEffect(() => {
        if (getPreviousSearches) {
            previousSearchesRef.current = getPreviousSearches;
        }
        if (previousSearchesRef.current) {
            setPreviousSearches(previousSearchesRef.current);
        }
    }, [getPreviousSearches]);

    let previousSearchesList;
    if (previousSearches) {
        previousSearchesList = previousSearches.map((search: ICityInfo) => {
            return <SearchItem key={Math.random()} item={search} />;
        });
    }

    return (
        <View>
            <Text style={styles.prevSearchesTitle}>Previous Searches</Text>
            {previousSearches.length > 0 && previousSearchesList}
        </View>
    );
};

export default Previous;
