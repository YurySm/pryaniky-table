import { StateSchema } from 'app/providers/StoreProvider';

export const getDocsIsLoading = (state: StateSchema) => state.docs?.isLoading || false;
