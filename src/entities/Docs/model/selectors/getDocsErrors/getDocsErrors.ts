import { StateSchema } from 'app/providers/StoreProvider';

export const getDocsErrors = (state: StateSchema) => state.docs?.error;
