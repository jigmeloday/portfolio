import { useState } from 'react';
import { InputProps } from '@/components/custom-input/model/input.model';

function Input(props: InputProps){
    const { value, name, onChange, label, className } = props;
    const [isFocus, setFocus] = useState<boolean>();
    return (
        <div className={` ${className} relative ${isFocus || value ? 'border-primary-dark': 'border-primary-main'} transition delay-150 duration-200 ease-in-out h-[48px] border-2 border-primary-main px-2 my-[32px] rounded-[4px]`}>
            <div className='flex items-center absolute h-full'>
                <label className={`transition delay-150 duration-200 ease-in-out ${isFocus || value ? '-translate-y-[24px] bg-[#43455c]': 'top-0'}`}>
                    {label}
                </label>
            </div>
            <input className={`flex bg-transparent h-full focus:border-transparent outline-none focus:ring-0 ${className}`}
                   name={name}
                   onChange={onChange}
                   value={value}
                   onBlur={() => setFocus(false)}
                   onFocus={() => setFocus(true)} />
        </div>
    );
}

export default Input;