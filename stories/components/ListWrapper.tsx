import React, { ReactNode } from 'react'

export function ListWrapper<T>({
  items,
  renderItem,
}: {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginRight: 8, marginBottom: 8 }}>
          {renderItem(item, idx)}
        </div>
      ))}
    </div>
  )
}
