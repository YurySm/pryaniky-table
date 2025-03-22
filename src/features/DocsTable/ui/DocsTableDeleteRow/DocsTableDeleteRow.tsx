import clsx from 'clsx';
import cls from './DocsTableDeleteRow.module.scss'
import { Box, Button, MenuItem, Modal, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { modalStyle } from '../../model/lib/modalStyle';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { deleteDocsItem, DocsResponseItem } from 'entities/Docs';
import DeleteIcon from '@mui/icons-material/Delete';

interface DocsTableDeleteRowProps {
    className?: string;
    doc: DocsResponseItem
}

export const DocsTableDeleteRow = (props: DocsTableDeleteRowProps) => {
    const {
        className,
        doc
    } = props

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const handleDeleteDocsItem = useCallback(() => {
        dispatch(deleteDocsItem(doc.id))
    }, [dispatch])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    return (
        <div className={ clsx(className) }>
            <MenuItem
                onClick={ handleOpen }>
                <DeleteIcon/>
                Удалить
            </MenuItem>

            <Modal
                open={ isOpen }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...modalStyle, width: '36vw', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Typography
                        variant="h5"
                        component="h2"
                        align={ 'center' }
                    >
                        Удалить?
                    </Typography>

                    <Typography
                        variant="h6"
                        component="p"
                        align={ 'center' }
                    >
                        Удалить документ {doc.documentName}?
                    </Typography>

                    <Button
                        variant={ 'contained' }
                        color={ 'error' }
                        onClick={ handleDeleteDocsItem }
                    >
                        Удалить
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};