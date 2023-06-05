export interface ExpModel {
    id: string
    title?: string;
    company?: string
    joined?: string;
    ended?: string;
    description?: string;
    stack?: Stack[]
}

export interface Stack{
    id: string;
    name: string,
    duration: number
}