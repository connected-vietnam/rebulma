import cn from 'classnames'
import React from 'react'
import { ReactNode } from 'react'

import { BulmaColor, BulmaSize, makeColorProps, makeSizeProps } from './utils'

export interface InputProps {
  color?: BulmaColor
  size?: BulmaSize
  icon?: ReactNode
  iconAfter?: ReactNode
  type?: string
  placeholder?: string
  readOnly?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  color,
  size,
  icon,
  iconAfter,
  type,
  placeholder,
  readOnly,
  value,
  onChange,
}: InputProps) {
  const wrapperClassName = cn('control', {
    'has-icons-left': icon,
    'has-icons-right': iconAfter,
  })
  const inputClassName = cn('input', makeColorProps(color), makeSizeProps(size))

  return (
    <p className={wrapperClassName}>
      <input
        className={inputClassName}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
      {icon && React.cloneElement(icon as any, { position: 'left' })}
      {iconAfter && React.cloneElement(iconAfter as any, { position: 'right' })}
    </p>
  )
}
