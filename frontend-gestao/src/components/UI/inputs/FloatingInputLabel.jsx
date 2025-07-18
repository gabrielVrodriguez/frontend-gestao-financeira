// components/FloatingLabelInput.js
import React from 'react';

export default function FloatingLabelInput({ id, label, type = 'text', value, onChange, error, onBlur }) {

    const borderColor = error ? 'border-red-500' : 'border-primary-600';
    const textColor = error ? 'text-red-500' : 'text-primary-600';

    return (

        <div className='relative '>
            <input
                id={id}
                type={type}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                className={`block pt-4 pb-2 px-4 w-full big-subtitle 
                bg-transparent rounded border ${borderColor} focus:outline-none 
                focus:ring-0 focus:border-accent-500 peer`}
                placeholder=' '
            />
            <label
                htmlFor={id}
                className={`absolute big-subtitle ${textColor} duration-300 
                    transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                   peer-focus:scale-75 peer-focus:-translate-y-4
                   
                    motion-reduce:transition-none motion-reduce:transform-none
                    peer-placeholder-shown:motion-reduce:translate-y-0
                   `}


            >
                {label}
            </label>

        {error && <p className="text-red-500 big-subtitle mt-1">{error}</p>}

        </div>
    );
}