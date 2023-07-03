import React from 'react'

const IconMenuOne = ({ open }, props) => {
    return (
        <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={25}
            fill="none"
            {...props}>
            <path
                fill="#EEEFF3"
                d="M1.214 4.592h31.572c.67 0 1.214-.457 1.214-1.02V1.02C34 .457 33.456 0 32.786 0H1.214C.544 0 0 .457 0 1.02v2.551c0 .564.544 1.02 1.214 1.02Zm0 10.204h31.572c.67 0 1.214-.457 1.214-1.02v-2.551c0-.564-.544-1.02-1.214-1.02H1.214c-.67 0-1.214.456-1.214 1.02v2.55c0 .564.544 1.02 1.214 1.02Zm0 10.204h31.572c.67 0 1.214-.457 1.214-1.02v-2.551c0-.564-.544-1.02-1.214-1.02H1.214c-.67 0-1.214.456-1.214 1.02v2.55C0 24.544.544 25 1.214 25Z"
            />
        </svg>
    )
}

export default IconMenuOne
