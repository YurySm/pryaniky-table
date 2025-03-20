import { useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { docsReducer, getDocsIsLoading, getDocsItems, getDocsList, } from 'entities/Docs';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { AppBar, Box, Button, CircularProgress, Toolbar, Typography } from '@mui/material';
import { DocsTable } from 'features/DocsTable';

const reducers: ReducersList = {
    docs: docsReducer,
};

const MainPage = () => {
    const docsItems = useAppSelector(getDocsItems);
    const isLoading = useAppSelector(getDocsIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getDocsList())
    }, [])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Главная
                    </Typography>
                    <Button
                        color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {
                isLoading &&
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

        </DynamicModuleLoader>
    )
};

export default MainPage;


