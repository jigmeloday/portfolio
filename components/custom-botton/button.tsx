import { ButtonProps } from '@/components/custom-botton/model/button.model';

function Button(props: ButtonProps) {
    const { click, label } = props;
    return(
        <button onClick={click} >{label}</button>
    );
}

export default Button;