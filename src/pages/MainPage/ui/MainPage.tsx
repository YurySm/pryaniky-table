import { useCallback, useEffect } from 'react';
import { getDocsList } from 'entities/Docs/model/services/getDocsList/getDocsList';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { docsReducer } from 'entities/Docs';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';


const reducers: ReducersList = {
    docs: docsReducer,
};

const MainPage = () => {
    const dispatch = useAppDispatch();

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(getDocsList());
        // if (res.meta.requestStatus === 'fulfilled') {
        //     onSuccess();
        // }
    }, [dispatch]);

    useEffect(() => {
        onLoginClick()
    }, [])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div>{'Главная'}</div>
        </DynamicModuleLoader>
    )
};

export default MainPage;


