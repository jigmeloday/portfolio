export interface InputProps{
    value: string | ReadonlyArray<string> | number | undefined,
    name: string,
    label:string,
    placeholder?: string,
    onChange: any
    width?: string;
}