import cls from './DocsTableRow.module.scss'
import clsx from 'clsx';
import { DocsResponseItem } from 'entities/Docs';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { IconButton, Menu, MenuItem, TableCell, TableRow, TextField } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { DocsTableDeleteRow } from '../DocsTableDeleteRow/DocsTableDeleteRow';
import { DocsTableEditRow } from '../DocsTableEditRow/DocsTableEditRow';

interface DocsTableRowProps {
    doc: DocsResponseItem
}

export const DocsTableRow = ({ doc }: DocsTableRowProps) => {
    const [prevDoc, setPrevDoc] = useState<DocsResponseItem>(doc)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [isEdit, setIsEdit] = useState<boolean>(false)

    const handleSetIsEdit = useCallback(() => {
        setIsEdit(prevState => !prevState)
    }, [setIsEdit])

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setPrevDoc(doc)
    }, [doc]);

    return (
        <>
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
                    {doc.employeeSigDate}
                </TableCell>

                <TableCell align="right">
                    {doc.employeeSignatureName}
                </TableCell>

                <TableCell align="right">
                    {doc.companySigDate}
                </TableCell>

                <TableCell align="right">
                    <>
                        {doc.companySignatureName}
                        <TextField
                            id="standard-basic"
                            label="Standard"
                            variant="standard"
                            value={ doc.companySignatureName }/>
                    </>
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
                            docId={ doc.id }
                        />
                        <DocsTableDeleteRow
                            docId={ doc.id }
                        />
                    </Menu>
                </TableCell>
            </TableRow>
        </>
    )
}