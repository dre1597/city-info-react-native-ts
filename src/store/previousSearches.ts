import { ICityInfoList } from './../interfaces/index';
import { ICityInfo } from '../interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialPreviousSearchesState: ICityInfoList = {
    cityInfoList: [],
};

const previousSearchesSlice = createSlice({
    name: 'previousSearches',
    initialState: initialPreviousSearchesState,
    reducers: {
        addSearch(state: ICityInfoList, action?: PayloadAction<ICityInfo>) {
            if (action) {
                if (state.cityInfoList.length === 3) {
                    state.cityInfoList.shift();
                    state.cityInfoList.push(action.payload);
                } else {
                    state.cityInfoList.push(action.payload);
                }
            }
        },
    },
});

export const previousSearchesActions = previousSearchesSlice.actions;
export default previousSearchesSlice.reducer;
