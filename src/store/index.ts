import { configureStore } from '@reduxjs/toolkit';

import cityInfoReducer from './cityInfo';
import previousSearchesReducer from './previousSearches';

const store = configureStore({
    reducer: {
        cityInfo: cityInfoReducer,
        previousSearches: previousSearchesReducer,
    },
});

export default store;
