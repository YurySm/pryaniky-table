export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}

export interface LoginResponse {
    token: string,
}
