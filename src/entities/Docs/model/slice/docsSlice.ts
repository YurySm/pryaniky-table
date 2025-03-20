import { DocsSchema } from '../types/docsSchema';
import { createSlice } from '@reduxjs/toolkit';
import { getDocsList } from '../services/getDocsList/getDocsList';
import { deleteDocsItem } from '../services/deleteDocsItem/deleteDocsItem';
import { editDocsItem } from '../services/editDocsItem/editDocsItem';

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
        builder.addCase(getDocsList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            if(payload.data) {
                state.docsItems = payload.data
            }
        });
        builder.addCase(getDocsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(editDocsItem.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(editDocsItem.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            if(payload.data) {
                if(state.docsItems) {
                    state.docsItems = [
                        ...state.docsItems.filter(item => item.id !== payload.data.id),
                        payload.data
                    ]
                } else {
                    state.docsItems = [ payload.data]
                }
            }
        });
        builder.addCase(editDocsItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(deleteDocsItem.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(deleteDocsItem.fulfilled, (state) => {
            state.isLoading = false;
            // if(payload.data) {
            //     state.docsItems = payload.data
            // }
        });
        builder.addCase(deleteDocsItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: docsActions } = docsSlice;
export const { reducer: docsReducer } = docsSlice;