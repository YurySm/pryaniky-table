import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

const initialState: UserSchema = {
    _inited: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<string>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
                state._inited = true;
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
