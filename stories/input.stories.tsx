import { storiesOf } from '@storybook/react'
import React from 'react'

import { Icon } from '~/Icon'
import { Input } from '~/Input'
import { BulmaColor, BulmaSize } from '~/utils'

import { ListWrapper } from './components/ListWrapper'

const sizes = Object.values(BulmaSize)
const colors = Object.values(BulmaColor)

storiesOf('Input', module).add('Props', () => (
  <div>
    <h2 className="title is-2">Sizes</h2>
    <ListWrapper
      items={sizes}
      renderItem={size => <Input size={size} placeholder={size} />}
    />
    <h2 className="title is-2">Colors</h2>
    <ListWrapper
      items={colors}
      renderItem={color => <Input color={color} placeholder={color} />}
    />
    <h2 className="title is-2">With Icon</h2>
    <ListWrapper
      items={colors}
      renderItem={color => (
        <Input
          color={color}
          placeholder={color}
          icon={<Icon icon="fa fa-globe" />}
        />
      )}
    />
    <h2 className="title is-2">With Icon After</h2>
    <ListWrapper
      items={colors}
      renderItem={color => (
        <Input
          color={color}
          placeholder={color}
          iconAfter={<Icon icon="fa fa-globe" />}
        />
      )}
    />
    <h2 className="title is-2">With Icon before & after (custom color)</h2>
    <ListWrapper
      items={colors}
      renderItem={color => (
        <Input
          color={color}
          placeholder={color}
          icon={<Icon icon="fa fa-globe" />}
          iconAfter={<Icon icon="fa fa-check" color={color} />}
        />
      )}
    />
  </div>
))
