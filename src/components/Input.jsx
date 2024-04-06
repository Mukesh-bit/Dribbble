import React from 'react'

const Input = ({bgColor, placeholder}) => {
  return (
    <>
      <input type="text" style={{backgroundColor: bgColor}}  className="h-[2.5rem] rounded-lg mt-1 outline-none px-3 w-full" placeholder={placeholder}/>
    </>
  )
}

export default Input