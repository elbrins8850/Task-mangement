import React from 'react'

const Button = ({text,color,onclick}) => {
  return (
    <button onClick={onclick} style={{backgroundColor: color}} className='btn'>
      {text}
    </button>
  )
}

export default Button
