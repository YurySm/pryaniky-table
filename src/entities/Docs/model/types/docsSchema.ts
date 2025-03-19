export interface DocsSchema {
    isLoading: boolean;
    error?: string;
    docs?: []
}

export interface DocsItemData {
    companySigDate: string
    companySignatureName: string
    documentName: string
    documentStatus: string
    documentType: string
    employeeNumber: string
    employeeSigDate: string
    employeeSignatureName: string
}


// {
//     "error_code": 2004,
//     "error_text": "Access deny",
//     "data": null,
//     "profiling": "pryaniky5-web-7567868d56-sjvqw at 03/19/2025 18:54:48\nMiniProfiler 0.16ms\n>> BaseController 0.16ms\n>>>> Action Filter (Execing): UnsupportedContentTypeFilter 0ms\n>>>> Action Filter (Execing): ModelStateInvalidFilter 0ms\n>>>> Action Filter (Exec): ReportApiVersions 0.05ms\n>>>>>> Action Filter (Execing): ResponseCacheFilter 0ms\n>>>>>> Controller Action: Pryaniky.Controllers.APIv3MockupController.GetUserDocuments 0.04ms\n",
//     "timings": null
// }