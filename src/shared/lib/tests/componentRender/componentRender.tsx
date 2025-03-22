import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function componentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {},
) {
    const { route = '/', initialState, asyncReducers } = options;
    return render(
        <MemoryRouter initialEntries={ [route] }>
            <StoreProvider initialState={ initialState } asyncReducers={ asyncReducers }>
                {component}
            </StoreProvider>
        </MemoryRouter>,
    );
}
