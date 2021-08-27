import { configureStore } from '@reduxjs/toolkit';

import cityInfoReducer from './cityInfo';

const store = configureStore({
    reducer: {
        cityInfo: cityInfoReducer,
    },
});

export default store;
