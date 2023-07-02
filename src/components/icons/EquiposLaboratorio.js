import React from 'react'

const EquiposLaboratorio = ({color}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={67}
    height={67}
    fill="none"
   
  >
    <path
      fill={color}
      d="M20.916 41.832h1.569v2.092c0 1.155.936 2.091 2.091 2.091h5.23a2.091 2.091 0 0 0 2.09-2.091v-2.092h1.57a4.184 4.184 0 0 0 4.183-4.183V8.366a4.184 4.184 0 0 0-4.183-4.183V2.092A2.091 2.091 0 0 0 31.374 0h-8.366a2.091 2.091 0 0 0-2.092 2.092v2.091a4.184 4.184 0 0 0-4.183 4.183V37.65a4.184 4.184 0 0 0 4.183 4.183Zm39.74 16.733h-.168c3.99-4.446 6.443-10.301 6.443-16.733 0-13.841-11.258-25.1-25.099-25.1V25.1c9.227 0 16.733 7.506 16.733 16.733s-7.506 16.733-16.733 16.733H6.275A6.275 6.275 0 0 0 0 64.84c0 1.155.936 2.091 2.092 2.091H64.84a2.091 2.091 0 0 0 2.091-2.091 6.275 6.275 0 0 0-6.275-6.275Zm-47.06-4.183h27.19c.578 0 1.046-.468 1.046-1.046v-2.092c0-.578-.468-1.046-1.046-1.046h-27.19c-.578 0-1.046.468-1.046 1.046v2.092c0 .578.468 1.046 1.045 1.046Z"
    />
  </svg>
  )
}

export default EquiposLaboratorio