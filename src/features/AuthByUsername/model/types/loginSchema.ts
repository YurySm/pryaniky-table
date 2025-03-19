export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}

export interface ResponseDataReject {
    error_code: number,
    error_text: string,
    data:  null,
    profiling: string,
    timings: null
}

export interface ResponseDataSuccess {
    error_code: number,
    error_message: string,
    data: {
        token: string,
    },
    profiling: string,
    timings: null
}
