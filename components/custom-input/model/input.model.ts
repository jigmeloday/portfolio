export interface InputProps{
    value: string | ReadonlyArray<string> | number | undefined,
    name: string,
    onChange: any
    width?: string;
}