import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseDataReject, ResponseDataSuccess } from 'features/AuthByUsername/model/types/loginSchema';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const getDocsList = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess,
    void,
    ThunkConfig<string>
>('docs/getDocsList', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<ResponseDataReject | ResponseDataSuccess>('/userdocs/get');

        console.log(response.data)

        if (!response.data.data) {
            throw new Error(response.data.error_text);
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
