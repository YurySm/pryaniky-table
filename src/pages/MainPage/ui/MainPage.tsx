import { useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { docsReducer, getDocsIsLoading, getDocsItems, getDocsList, } from 'entities/Docs';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { DocsTable } from 'features/DocsTable';
import { Header } from 'widgets/Header';
import cls from './MainPage.module.scss';
import { getUserAuthData } from 'entities/User';

const reducers: ReducersList = {
    docs: docsReducer
};

const MainPage = () => {
    const auth = useAppSelector(getUserAuthData)
    const docsItems = useAppSelector(getDocsItems);
    const isLoading = useAppSelector(getDocsIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(auth) {
            dispatch(getDocsList())
        }
    }, [auth])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <Header/>
            <Container
                className={ cls.container }
                maxWidth="xl">
                {
                    isLoading && !docsItems &&
                    <Box sx={{ width: '100%', padding: 5, display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                }
                {
                    docsItems && docsItems?.length > 0 &&
                    <DocsTable docs={ docsItems }/>
                }
                {
                    docsItems && docsItems?.length === 0 &&
                    <Typography variant="h6">
                        Список пуст
                    </Typography>
                }
            </Container>
        </DynamicModuleLoader>
    )
};

export default MainPage;


