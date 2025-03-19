import { DocsSchema } from '../types/docsSchema';
import { createSlice } from '@reduxjs/toolkit';
import { getDocsList } from 'entities/Docs/model/services/getDocsList/getDocsList';


const initialState: DocsSchema = {
    isLoading: false,
};

export const docsSlice = createSlice({
    name: 'docs',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getDocsList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(getDocsList.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(getDocsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: docsActions } = docsSlice;
export const { reducer: docsReducer } = docsSlice;