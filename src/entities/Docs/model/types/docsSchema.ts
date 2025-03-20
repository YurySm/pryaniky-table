export interface DocsSchema {
    isLoading: boolean;
    error?: string;
    docsItems?: DocsResponseItem[]
}

export interface DocsResponseItem {
    id: string
    documentName: string
    documentStatus: string
    documentType: string
    employeeNumber: string
    employeeSigDate: string
    employeeSignatureName: string
    companySigDate: string
    companySignatureName: string
}