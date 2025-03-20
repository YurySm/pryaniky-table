import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseDataReject, ResponseDataSuccess } from 'shared/api/api.types';
import { DocsResponseItem, getDocsList } from 'entities/Docs';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const editDocsItem = createAsyncThunk<
    ResponseDataReject | ResponseDataSuccess<DocsResponseItem>,  // поправить
    {docId: string, doc: DocsResponseItem},
    ThunkConfig<string>
>('docs/editDocsItem', async ({ docId, doc }, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;
    try {
        const response = await extra.api.post<ResponseDataReject | ResponseDataSuccess<DocsResponseItem>>(`userdocs/set/${docId}`, doc);

        console.log(response.data);
        
        if(response.data.error_code === 0) {
            // dispatch(getDocsList())
            return response.data;
        }

        throw new Error();
    } catch {
        return rejectWithValue('error');
    }
});
