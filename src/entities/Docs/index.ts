export { DocsSchema, DocsResponseItem } from './model/types/docsSchema';

export { docsReducer } from './model/slice/docsSlice'

export { getDocsItems } from './model/selectors/getDocsItems/getDocsItems'
export { getDocsIsLoading } from './model/selectors/getDocsIsLoading/getDocsIsLoading'
export { getDocsErrors } from './model/selectors/getDocsErrors/getDocsErrors'

export { getDocsList } from './model/services/getDocsList/getDocsList'
export { deleteDocsItem } from './model/services/deleteDocsItem/deleteDocsItem'
export { editDocsItem } from './model/services/editDocsItem/editDocsItem'







