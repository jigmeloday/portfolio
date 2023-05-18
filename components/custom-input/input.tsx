import { useState } from 'react';
import { InputProps } from '@/components/custom-input/model/input.model';

function Input(props: InputProps){
    const { value, name, onChange, width, label } = props;
    const [isFocus, setFocus] = useState<boolean>();
    return (
        <div className='relative h-[44px] border w-fit px-2 rounded-[4px]'>
            <div className='flex items-center absolute h-full'>
                <label className={`transition delay-150 duration-200 ease-in-out ${isFocus || value ? '-translate-y-[24px] bg-[#43455c]': 'top-0'}`}>
                    {label}
                </label>
            </div>
            <input className={`flex bg-transparent h-full focus:border-transparent outline-none focus:ring-0 w-[${width}]`}
                   name={name}
                   onChange={onChange}
                   value={value}
                   onBlur={() => setFocus(false)}
                   onFocus={() => setFocus(true)} />
        </div>
    );
}

export default Input;