import React from 'react'

const IconBuscador = ({ open, fill = '#EEEFF3' }, props) => {
    return (
        <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={23}
            fill="none"
            {...props}>
            <path
                fill={fill}
                d="M17.153 14.465h-1.084l-.385-.355c1.345-1.499 2.155-3.445 2.155-5.562C17.839 3.827 13.846 0 8.919 0 3.993 0 0 3.827 0 8.548c0 4.72 3.993 8.548 8.92 8.548a9.11 9.11 0 0 0 5.804-2.065l.37.368v1.039L21.955 23 24 21.04l-6.847-6.575Zm-8.234 0c-3.416 0-6.175-2.643-6.175-5.917 0-3.275 2.759-5.918 6.175-5.918 3.417 0 6.175 2.643 6.175 5.918 0 3.274-2.758 5.917-6.175 5.917Z"
            />
        </svg>
    )
}

export default IconBuscador
