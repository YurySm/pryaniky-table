export interface ResponseDataReject {
    error_code: number,
    error_text: string,
    data:  null,
    profiling: string,
    timings: null
}

export interface ResponseDataSuccess<DataType> {
    error_code: number,
    error_message: string,
    data: DataType,
    profiling: string,
    timings: null
}