import { InputProps } from '@/components/custom-input/model/input.model';
import { useState } from 'react';

function TextArea(props: InputProps) {
    const [isFocus, setFocus] = useState<boolean>();
    const { label, name, value, onChange } = props;
    return(
        <div className='relative border w-fit px-2 rounded-[4px] my-[32px]'>
            <div className='flex absolute h-full'>
                <label className={`transition delay-150 duration-200 ease-in-out ${isFocus || value ? '-translate-y-[14px] bg-[#43455c]': 'top-0'}`}>
                    {label}
                </label>
            </div>
            <textarea
                className='flex bg-transparent resize-none h-full focus:border-transparent outline-none focus:ring-0'
                name={name}
                onChange={onChange}
                value={value}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            />
        </div>

    );
}

export default TextArea;