import cn from 'classnames'
import React, { ReactNode } from 'react'

import { BulmaColor, BulmaSize, makeColorProps, makeSizeProps } from './utils'

export interface FieldProps {
  color?: BulmaColor
  size?: BulmaSize
  label?: string
  helpText?: string
  children?: ReactNode
}

export function Field({ label, helpText, color, size, children }: FieldProps) {
  return (
    <div className="field">
      <label className={cn('label', makeSizeProps(size))}>{label}</label>
      {children}
      {helpText && (
        <p className={cn('help', makeColorProps(color))}>{helpText}</p>
      )}
    </div>
  )
}
