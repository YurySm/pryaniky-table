import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    ResponseDataReject,
    ResponseDataSuccess
} from '../../types/loginSchema';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess,
    LoginByUsernameProps,
    ThunkConfig<string>
>('loginForm/loginByUsername', async (data, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<ResponseDataReject | ResponseDataSuccess>('/login', data);

        if (!response.data.data) {
            throw new Error(response.data.error_text);
        }

        localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data.data.token),
        );
        dispatch(userActions.setAuthData(response.data.data.token));

        if(extra?.navigate) {
            extra.navigate('/');
        }

        return response.data;
    } catch {
        return rejectWithValue('error');
    }
});
