import cls from './DocsTableEditRow.module.scss'
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, MenuItem, Modal, TextField, Typography } from '@mui/material';
import { modalStyle } from '../../model/lib/modalStyle';
import { DocsResponseItem, editDocsItem, getDocsIsLoading } from 'entities/Docs';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';

interface DocsTableEditRowProps {
    className?: string;
    doc: DocsResponseItem
}

export const DocsTableEditRow = (props: DocsTableEditRowProps) => {
    const {
        className,
        doc
    } = props

    const isLoading = useAppSelector(getDocsIsLoading);

    const [isChanged, setIsChanged] = useState<boolean>(false)

    const [isOpen, setIsOpen] = useState<boolean>(false)


    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    const dispatch = useAppDispatch();

    const handleEditDocsItem = useCallback((editedDoc: DocsResponseItem) => {
        dispatch(editDocsItem({ docId: editedDoc.id, doc: editedDoc }))
    }, [dispatch])

    const {
        control,
        handleSubmit,
        reset,
        watch,
    } = useForm<DocsResponseItem>({
        defaultValues: doc
    })

    const onSubmit = useCallback((data: DocsResponseItem) => {
        handleEditDocsItem(data)
    }, [handleEditDocsItem])

    const onReset = useCallback(() => {
        reset(doc)
    }, [reset, doc])

    useEffect(() => {
        const { unsubscribe } = watch((value) => {
            const isChanged = JSON.stringify(value) !== JSON.stringify(doc);
            setIsChanged(isChanged);
        })
        return () => unsubscribe()
    }, [doc, watch])

    return (
        <div className={ clsx(cls.DocsTableDeleteRow, className) }>
            <MenuItem onClick={ handleOpen }>
                <BorderColorOutlinedIcon/>
                Редактировать
            </MenuItem>

            <Modal
                open={ isOpen }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...modalStyle, width: '50vw' }}>
                    <div className={ cls.form }>
                        <Typography
                            variant="h5"
                            className={ cls.formTitle }
                            align={ 'center' }
                        >
                            Редактирование документа
                        </Typography>

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'documentName' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <TextField
                                    value={ value }
                                    onChange={ onChange }
                                    variant="outlined"
                                    label={ 'Название документа' }
                                    error={ invalid }
                                    helperText={ invalid && 'Поле обязательное' }
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'documentStatus' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <TextField
                                    value={ value }
                                    onChange={ onChange }
                                    label={ 'Статус документа' }
                                    error={ invalid }
                                    helperText={ invalid && 'Поле обязательное' }
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'documentType' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <TextField
                                    value={ value }
                                    onChange={ onChange }
                                    label={ 'Тип документа' }
                                    error={ invalid }
                                    helperText={ invalid && 'Поле обязательное' }
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'employeeNumber' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <TextField
                                    value={ value }
                                    onChange={ onChange }
                                    label={ 'Номер сотрудника' }
                                    error={ invalid }
                                    helperText={ invalid && 'Поле обязательное' }
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'employeeSigDate' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <DateTimePicker
                                    label={ 'Дата подписи сотрудника' }
                                    ampm={ false }
                                    // defaultValue={ null }
                                    value={ value ? dayjs(value) : null }
                                    onChange={ e => {
                                        onChange(e?.utc().format('YYYY-MM-DDTHH:mm:ss[Z]'))
                                    } }
                                    slotProps={{
                                        textField: {
                                            error: invalid,
                                            helperText: invalid && 'Поле обязательное',
                                        },
                                    }}
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'employeeSignatureName' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <TextField
                                    value={ value }
                                    onChange={ onChange }
                                    label={ 'Название подписи сотрудника' }
                                    error={ invalid }
                                    helperText={ invalid && 'Поле обязательное' }
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'companySigDate' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <DateTimePicker
                                    label="Дата подписи компании"
                                    ampm={ false }
                                    defaultValue={ null }
                                    value={ value ? dayjs(value) : null }
                                    onChange={ e => {
                                        onChange(e?.utc().format('YYYY-MM-DDTHH:mm:ss[Z]'))
                                    } }
                                    slotProps={{
                                        textField: {
                                            error: invalid,
                                            helperText: invalid && 'Поле обязательное',
                                        },
                                    }}
                                />
                            ) }
                        />

                        <Controller
                            rules={{ required: true }}
                            control={ control }
                            name={ 'companySignatureName' }
                            render={ ({ field: { value, onChange }, fieldState: { invalid } }) => (
                                <TextField
                                    value={ value }
                                    onChange={ onChange }
                                    label={ 'Название подписи компании' }
                                    error={ invalid }
                                    helperText={ invalid && 'Поле обязательное' }
                                />
                            ) }
                        />
                    </div>
                    <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'space-between', height: '42px' }}>
                        <Button
                            disabled={ !isChanged }
                            variant={ 'outlined' }
                            color={ 'error' }
                            onClick={ onReset }
                        >
                            Сбросить
                        </Button>

                        {
                            isLoading &&
                            <Box sx={{ width: 'auto', padding: 0, display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>
                        }

                        <Button
                            disabled={ isLoading || !isChanged }
                            variant={ 'contained' }
                            color={ 'primary' }
                            onClick={ handleSubmit(onSubmit) }
                        >
                            Сохранить
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};