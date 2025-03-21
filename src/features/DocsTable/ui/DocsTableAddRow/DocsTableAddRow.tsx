import cls from './DocsTableAddRow.module.scss'
import { useCallback, useState } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Modal,
    TextField,
    Typography
} from '@mui/material';
import { modalStyle } from '../../model/lib/modalStyle';
import { DocsResponseItem, getDocsIsLoading } from 'entities/Docs';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { addDocsItem } from 'entities/Docs/model/services/addDocsItem/addDocsItem';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import utc from 'dayjs/plugin/utc';
import ru from 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.locale(ru)

interface DocsTableEditRowProps {
    className?: string;
}

export const DocsTableAddRow = (props: DocsTableEditRowProps) => {
    const {
        className,
    } = props
    const isLoading = useAppSelector(getDocsIsLoading);

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    const dispatch = useAppDispatch();

    const handleEditDocsItem = useCallback((editedDoc: Omit<DocsResponseItem, 'id'>) => {
        dispatch(addDocsItem(editedDoc))
    }, [dispatch])

    const {
        control,
        handleSubmit,
        reset
    } = useForm<Omit<DocsResponseItem, 'id'>>({
        defaultValues: {}
    })

    const onSubmit = useCallback((data: Omit<DocsResponseItem, 'id'>) => {
        handleEditDocsItem(data)
    }, [handleEditDocsItem])

    const onReset = useCallback(() => {
        reset()
    }, [handleEditDocsItem, reset])

    return (
        <LocalizationProvider dateAdapter={ AdapterDayjs }>
            <div className={ className }>
                <Button
                    sx={{ marginTop: '1rem' }}
                    onClick={ handleOpen }>
                    <NoteAddOutlinedIcon/> Добавить
                </Button>

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
                                Создание документа
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
        </LocalizationProvider>
    );
};