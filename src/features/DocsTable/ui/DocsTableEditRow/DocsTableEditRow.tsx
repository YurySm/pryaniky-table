import cls from './DocsTableEditRow.module.scss'
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { Box, MenuItem, Modal, Typography } from '@mui/material';
import { modalStyle } from '../../model/lib/modalStyle';

interface DocsTableEditRowProps {
    className?: string;
    docId: string
}

export const DocsTableEditRow = (props: DocsTableEditRowProps) => {
    const {
        className
    } = props
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    return (
        <div className={ clsx(cls.DocsTableDeleteRow, {}, [className]) }>
            <MenuItem onClick={ handleOpen }>edit</MenuItem>

            <Modal
                open={ isOpen }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ modalStyle }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};