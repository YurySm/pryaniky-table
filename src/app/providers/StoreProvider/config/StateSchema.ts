import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    Action,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { DocsSchema } from 'entities/Docs';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    docs?: DocsSchema
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReplaceReducer {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: Reducer<StateSchema, Action>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReplaceReducer;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T>  {
    rejectValue: T;
    extra: ThunkExtraArgs;
    state: StateSchema
}
