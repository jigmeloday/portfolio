import { InputProps } from '@/components/custom-input/model/input.model';
import { useState } from 'react';

function TextArea(props: InputProps) {
    const [isFocus, setFocus] = useState<boolean>();
    const { label, name, value, onChange, cols, rows } = props;
    return(
        <div className='relative border w-fit px-2 rounded-[4px] my-[32px]'>
            <div className='flex absolute pt-[12px]'>
                <label className={`transition delay-150 duration-200 ease-in-out ${isFocus || value ? '-translate-y-[24px] bg-[#43455c]': 'top-0'}`}>
                    {label}
                </label>
            </div>
            <textarea
                className='flex bg-transparent resize-none pt-[12px] h-full focus:border-transparent outline-none focus:ring-0'
                name={name}
                cols={cols || 50}
                rows={rows || 12}
                onChange={onChange}
                value={value}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            />
        </div>

    );
}

export default TextArea;