export interface ButtonProps{
    click: () => void,
    label: string,
    variant: 'outlined' | 'contained' | 'text',
    className?: string,
}