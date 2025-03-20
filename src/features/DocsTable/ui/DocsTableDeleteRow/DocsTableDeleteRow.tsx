import clsx from 'clsx';
import cls from './DocsTableDeleteRow.module.scss'
import { Box, Button, MenuItem, Modal, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { modalStyle } from '../../model/lib/modalStyle';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { deleteDocsItem } from 'entities/Docs';

interface DocsTableDeleteRowProps {
    className?: string;
    docId: string
}

export const DocsTableDeleteRow = (props: DocsTableDeleteRowProps) => {
    const {
        className,
        docId
    } = props

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const handleDeleteDocsItem = useCallback(() => {
        dispatch(deleteDocsItem(docId))
    }, [dispatch])

    useEffect(() => {
    }, [])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    return (
        <div className={ clsx(cls.DocsTableDeleteRow, {}, [className]) }>
            <MenuItem onClick={ handleOpen }>delete</MenuItem>

            <Modal
                open={ isOpen }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ modalStyle }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Удалить?
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