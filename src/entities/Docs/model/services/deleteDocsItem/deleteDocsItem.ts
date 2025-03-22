import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseDataReject, ResponseDataSuccess } from 'shared/api/api.types';
import { getDocsList } from 'entities/Docs';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const deleteDocsItem = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess<null>,
    string,
    ThunkConfig<string>
>('docs/deleteDocsItem', async (id: string, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;
    try {
        const response = await extra.api.post<ResponseDataReject | ResponseDataSuccess<null>>(`userdocs/delete/${id}`);


        // Для примера, При обновлении сделано через фильтр в слайсе
        if(response.data.error_code === 0) {
            dispatch(getDocsList())
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
