export interface ExpModel {
    id: string
    title?: string;
    joined?: string;
    ended?: string;
    currently?: boolean
    description?: string;
    stack?: Stack[]
}

export interface Stack{
    id: string;
    name: string
}