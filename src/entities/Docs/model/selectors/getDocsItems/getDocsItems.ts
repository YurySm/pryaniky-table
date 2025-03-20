import { StateSchema } from 'app/providers/StoreProvider';

export const getDocsItems = (state: StateSchema) => state.docs?.docsItems;
