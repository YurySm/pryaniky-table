import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { docsReducer } from 'entities/Docs';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    docs: docsReducer,
};

export function StoreDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) {
    return (
        // eslint-disable-next-line react/display-name
        (Story: StoryFn) => (
            <StoreProvider
                initialState={ state }
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error*/}
                <Story />
            </StoreProvider>
        )
    );
}
