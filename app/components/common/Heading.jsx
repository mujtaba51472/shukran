import React from 'react'

const Heading = ({children , color , bold}) => {
  return (
              <div className={`text-3xl lg:text-4xl  mb-4  ${color ? color : 'text-black'} ${bold ? 'font-bold' : 'font-normal'}`}>
        {children}</div>
  )
}

export default Heading