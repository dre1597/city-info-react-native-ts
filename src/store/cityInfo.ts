import { ICityInfo } from './../interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialCityInfoState: ICityInfo = {
    city: '',
    state: '',
    state_code: '',
    country: '',
    drive_on: '',
    speed_in: '',
    currency_name: '',
    currency_symbol: '',
};

const cityInfoSlice = createSlice({
    name: 'weather',
    initialState: initialCityInfoState,
    reducers: {
        setCurrentCity(state: ICityInfo, action?: PayloadAction<ICityInfo>) {
            if (action && action.payload) {
                const newCity = action.payload;
                state.city = newCity.city;
                state.state = newCity.state;
                state.state_code = newCity.state_code;
                state.country = newCity.country;
                state.drive_on = newCity.drive_on;
                state.speed_in = newCity.speed_in;
                state.currency_name = newCity.currency_name;
                state.currency_symbol = newCity.currency_symbol;
            }
        },
    },
});

export const cityInfoActions = cityInfoSlice.actions;
export default cityInfoSlice.reducer;
