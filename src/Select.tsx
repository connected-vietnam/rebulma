import cn from 'classnames'
import React, { ReactNode } from 'react'

import { BulmaColor, BulmaSize, makeColorProps, makeSizeProps } from './utils'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  color?: BulmaColor
  size?: BulmaSize
  loading?: boolean
  rounded?: boolean
  options: SelectOption[]
  placeholder?: string
  icon?: ReactNode
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({
  color,
  size,
  loading,
  rounded,
  placeholder,
  icon,
  options,
  value,
  onChange,
}: SelectProps) {
  const wrapperClassName = cn('control', {
    'has-icons-left': icon,
  })
  const selectClassName = cn(
    'select',
    makeColorProps(color),
    makeSizeProps(size),
    {
      'is-loading': loading,
      'is-rounded': rounded,
    },
  )

  return (
    <p className={wrapperClassName}>
      <div className={selectClassName}>
        <select placeholder={placeholder} value={value} onChange={onChange}>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {icon && React.cloneElement(icon as any, { position: 'left' })}
    </p>
  )
}
