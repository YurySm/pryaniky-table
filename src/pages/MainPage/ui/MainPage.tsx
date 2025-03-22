import { useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { docsReducer } from 'entities/Docs';
import { Container } from '@mui/material';
import { DocsTable } from 'features/DocsTable';
import { Header } from 'widgets/Header';
import cls from './MainPage.module.scss';

const reducers: ReducersList = {
    docs: docsReducer
};

const MainPage = () => {
    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Header/>
            <Container
                className={ cls.container }
                maxWidth="xl"
            >
                <DocsTable/>
            </Container>
        </DynamicModuleLoader>
    )
};

export default MainPage;


