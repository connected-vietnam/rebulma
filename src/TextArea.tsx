import cn from 'classnames'
import React from 'react'

import { BulmaColor, BulmaSize, makeColorProps, makeSizeProps } from './utils'

export interface TextAreaProps {
  color?: BulmaColor
  size?: BulmaSize
  loading?: boolean
  placeholder?: string
  readOnly?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea({
  color,
  size,
  loading,
  placeholder,
  readOnly,
  value,
  onChange,
}: TextAreaProps) {
  const wrapperClassName = cn('control', makeSizeProps(size), {
    'is-loading': loading,
  })
  const inputClassName = cn(
    'textarea',
    makeColorProps(color),
    makeSizeProps(size),
  )

  return (
    <p className={wrapperClassName}>
      <textarea
        className={inputClassName}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    </p>
  )
}
