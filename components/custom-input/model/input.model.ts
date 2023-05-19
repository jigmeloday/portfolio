export interface InputProps{
    value: string | ReadonlyArray<string> | number | undefined,
    name: string,
    label:string,
    placeholder?: string,
    onChange: any
    rows?: number,
    cols?: number,
    className?: string,
    width?: string;
}