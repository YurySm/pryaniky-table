import cls from './DocsTable.module.scss'
import clsx from 'clsx';
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
        <div className={ clsx(cls.DocsTable, {}, [className]) }>
            <TableContainer component={ Paper }>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>documentName</TableCell>
                            <TableCell align="right">documentStatus</TableCell>
                            <TableCell align="right">documentType</TableCell>
                            <TableCell align="right">employeeNumber</TableCell>
                            <TableCell align="right">employeeSigDate</TableCell>
                            <TableCell align="right">employeeSignatureName</TableCell>
                            <TableCell align="right">companySigDate</TableCell>
                            <TableCell align="right">companySignatureName</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {docs.map((doc) => (
                            <DocsTableRow key={ doc.id } doc={ doc }/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}