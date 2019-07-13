import cn from 'classnames'
import React from 'react'
import { ReactNode } from 'react'

import { BulmaColor, BulmaSize, makeColorProps, makeSizeProps } from './utils'

export interface ButtonProps {
  color?: BulmaColor
  size?: BulmaSize
  outlined?: boolean
  inverted?: boolean
  rounded?: boolean
  active?: boolean
  loading?: boolean
  icon?: ReactNode
  iconAfter?: ReactNode
  children?: ReactNode
}
export function Button({
  color,
  size,
  outlined,
  inverted,
  rounded,
  active,
  loading,
  icon,
  iconAfter,
  children,
}: ButtonProps) {
  const className = cn('button', makeSizeProps(size), makeColorProps(color), {
    'is-outlined': outlined,
    'is-inverted': inverted,
    'is-rounded': rounded,
    'is-active': active,
    'is-loading': loading,
  })
  if (!icon && !iconAfter) {
    return <button className={className}>{children}</button>
  }
  return (
    <a className={className}>
      {icon}
      {children && <span>{children}</span>}
      {iconAfter}
    </a>
  )
}
