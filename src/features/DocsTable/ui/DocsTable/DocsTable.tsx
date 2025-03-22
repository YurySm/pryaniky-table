import { DocsResponseItem } from 'entities/Docs';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { DocsTableRow } from '../DocsTableRow/DocsTableRow';
import { DocsTableAddRow } from 'features/DocsTable/ui/DocsTableAddRow/DocsTableAddRow';

interface DocsTableProps {
    className?: string;
    docs: DocsResponseItem[]
}

export const DocsTable = (props: DocsTableProps) => {
    const {
        className,
        docs
    } = props

    return (
        <div className={ className }>
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
                        {docs.map((doc) => (
                            <DocsTableRow key={ doc.id } doc={ doc }/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DocsTableAddRow/>
        </div>
    );
}