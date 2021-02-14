import React from 'react'

import styles from './Input.module.scss'

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({type, name, required, min, max, defaultValue, onChange}) => {
  return <input type={type} className={styles.input} required={required} min={min} max={max} name={name} defaultValue={defaultValue} onChange={onChange}/>
}
