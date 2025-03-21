import { DocsResponseItem } from 'entities/Docs';
import { MouseEvent, useState } from 'react';
import { IconButton, Menu, TableCell, TableRow } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { DocsTableDeleteRow } from '../DocsTableDeleteRow/DocsTableDeleteRow';
import { DocsTableEditRow } from '../DocsTableEditRow/DocsTableEditRow';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import utc from 'dayjs/plugin/utc';
import ru from 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.locale(ru)

interface DocsTableRowProps {
    doc: DocsResponseItem
}

export const DocsTableRow = ({ doc }: DocsTableRowProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {doc.documentName}
                    </TableCell>

                    <TableCell align="right">
                        {doc.documentStatus}
                    </TableCell>

                    <TableCell align="right">
                        {doc.documentType}
                    </TableCell>

                    <TableCell align="right">
                        {doc.employeeNumber}
                    </TableCell>

                    <TableCell align="right">
                        <span>{(dayjs.utc(doc.employeeSigDate).format('D MMMM YYYY, HH:mm')).toString()}</span>
                    </TableCell>

                    <TableCell align="right">
                        {doc.employeeSignatureName}
                    </TableCell>

                    <TableCell align="right">
                        <span>{(dayjs.utc(doc.companySigDate).format('D MMMM YYYY, HH:mm')).toString()}</span>
                    </TableCell>

                    <TableCell align="right">
                        {doc.companySignatureName}
                    </TableCell>
                    <TableCell align="right">
                        <IconButton
                            size="large"
                            aria-label="display more actions"
                            edge="end"
                            color="inherit"
                            onClick={ handleMenu }
                        >
                            <MoreIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={ anchorEl }
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'left',
                            }}
                            open={ Boolean(anchorEl) }
                            onClose={ handleClose }
                        >
                            <DocsTableEditRow
                                doc={ doc }
                            />
                            <DocsTableDeleteRow
                                doc={ doc }
                            />
                        </Menu>
                    </TableCell>
                </TableRow>
            </LocalizationProvider>
        </>
    )
}