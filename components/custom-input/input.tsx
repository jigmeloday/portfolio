import { useState } from 'react';
import { InputProps } from '@/components/custom-input/model/input.model';

function Input(props: InputProps){
    const { value, name, onChange } = props;
    const [isFocus, setFocus] = useState<boolean>();
    // console.log(value)
    return (
        <div className='relative  border w-fit px-2 h-[44px] rounded-[4px]'>
            <label className={`flex items-center absolute transition h-full  delay-150 duration-300 ease-in-out ${isFocus || value ? '-translate-y-[22px]': 'top-0'}`}>hello</label>
            <input className='flex bg-transparent h-full focus:border-transparent outline-none focus:ring-0 '
                   name={name}
                   onChange={onChange}
                   value={value}
                   onBlur={() => setFocus(false)}
                   onFocus={() => setFocus(true)} />
        </div>
    );
}

export default Input;