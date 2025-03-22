import { getDocsErrors, getDocsIsLoading, getDocsItems, getDocsList } from 'entities/Docs';
import {
    Box, CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography,
} from '@mui/material';
import { DocsTableRow } from '../DocsTableRow/DocsTableRow';
import { DocsTableAddRow } from 'features/DocsTable/ui/DocsTableAddRow/DocsTableAddRow';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData } from 'entities/User';
import { useEffect } from 'react';

interface DocsTableProps {
    className?: string;
}

export const DocsTable = (props: DocsTableProps) => {
    const {
        className,
    } = props

    const auth = useAppSelector(getUserAuthData)
    const isLoading = useAppSelector(getDocsIsLoading)
    const error = useAppSelector(getDocsErrors)
    const docsItems = useAppSelector(getDocsItems);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(auth) {
            dispatch(getDocsList())
        }
    }, [auth, dispatch])

    return (
        <div className={ className }>
            {
                error &&
                <>
                    <Typography
                        color={ 'error' }
                        align={ 'center' }
                        variant="h5">
                        Что-то пошло не так
                    </Typography>
                    <Typography
                        color={ 'error' }
                        align={ 'center' }
                        variant="h6">
                        Перезагрузите страницу
                    </Typography>
                </>
            }
            {
                isLoading && !docsItems &&
                <Box sx={{ width: '100%', padding: 5, display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            {
                docsItems && docsItems?.length === 0 &&
                <Typography variant="h6">
                    Список пуст
                </Typography>
            }
            {
                docsItems && docsItems?.length > 0 &&
                <TableContainer component={ Paper }>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название док-та</TableCell>
                                <TableCell align="right">Статус</TableCell>
                                <TableCell align="right">Тип</TableCell>
                                <TableCell align="right">Номер сотрудника</TableCell>
                                <TableCell align="right">Дата подписи сотрудника</TableCell>
                                <TableCell align="right">Название подписи сотрудника</TableCell>
                                <TableCell align="right">Дата подписи компании</TableCell>
                                <TableCell align="right">Название подписи компании</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {docsItems.map((doc) => (
                                <DocsTableRow key={ doc.id } doc={ doc }/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }

            {
                !isLoading && !error &&
                <DocsTableAddRow/>
            }
        </div>
    );
}