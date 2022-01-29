import React from 'react'

import s from './Button.module.scss'

export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = () => {
  return <button className={s.Button}>test</button>
}
