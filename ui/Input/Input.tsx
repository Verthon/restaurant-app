import React from 'react'

import './Input.scss'

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({type, name, required, min, max, defaultValue, onChange}) => {
  return <input type={type} className="input" required={required} min={min} max={max} name={name} defaultValue={defaultValue} onChange={onChange}/>
}
