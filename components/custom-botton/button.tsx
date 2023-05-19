import { ButtonProps } from '@/components/custom-botton/model/button.model';

function Button(props: ButtonProps) {
    const { click, label, variant, className, type } = props;
    return(
        <button
            className={`
            ${variant==='outlined' ? 
                'border-2 border-primary-main hover:border-primary-light' : variant === 'contained' ?
                    'bg-secondary-main hover:bg-secondary-dark' : '' }
                     text-center
                     py-[8px]
                     px-[12px]
                     text-text-main
                     hover:text-text-light
                     transition duration-200 ease-in-out
                     w-[120px]  
                     font-2        
                     rounded-[4px]
                     ${className}
                    `
            }
            type={type}
            onClick={click} >{label}</button>
    );
}

export default Button;