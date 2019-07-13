import cn from 'classnames'
import React from 'react'

import { BulmaColor, BulmaSize, makeColorProps, makeSizeProps } from './utils'

export interface IconProps {
  color?: BulmaColor
  size?: BulmaSize
  icon: string
  position?: 'left' | 'right'
}

export function Icon({ icon, color, size, position }: IconProps) {
  const className = cn(
    'icon',
    makeColorProps(color, 'has-text'),
    makeSizeProps(size),
    position &&
      {
        left: 'is-left',
        right: 'is-right',
      }[position],
  )
  return (
    <span className={className}>
      <i className={icon}></i>
    </span>
  )
}
