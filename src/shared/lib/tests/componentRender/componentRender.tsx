import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {},
) {
    const { route = '/', initialState } = options;
    return render(
        <MemoryRouter initialEntries={ [route] }>
            <StoreProvider initialState={ initialState }>
                {component}
            </StoreProvider>
        </MemoryRouter>,
    );
}
