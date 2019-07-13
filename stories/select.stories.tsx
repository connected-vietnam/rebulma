import { storiesOf } from '@storybook/react'
import React from 'react'

import { Icon } from '~/Icon'
import { Select, SelectOption } from '~/Select'
import { BulmaColor, BulmaSize } from '~/utils'

import { ListWrapper } from './components/ListWrapper'

const sizes = Object.values(BulmaSize)
const colors = Object.values(BulmaColor)

const options: SelectOption[] = `
Afghanistan
Albania
Algeria
Andorra
Angola
Antigua and Barbuda
Argentina
Armenia
Australia
Austria
Azerbaijan
`
  .split(/\n/g)
  .filter(Boolean)
  .map(x => ({ label: x, value: x }))

storiesOf('Select', module).add('Props', () => (
  <div>
    <h2 className="title is-2">Sizes</h2>
    <ListWrapper
      items={sizes}
      renderItem={size => (
        <Select options={options} size={size} placeholder={size} />
      )}
    />
    <h2 className="title is-2">Colors</h2>
    <ListWrapper
      items={colors}
      renderItem={color => (
        <Select options={options} color={color} placeholder={color} />
      )}
    />
    <h2 className="title is-2">With Icon</h2>
    <ListWrapper
      items={colors}
      renderItem={color => (
        <Select
          options={options}
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
        <Select options={options} color={color} placeholder={color} />
      )}
    />
    <h2 className="title is-2">With Icon before & after (custom color)</h2>
    <ListWrapper
      items={colors}
      renderItem={color => (
        <Select
          options={options}
          color={color}
          placeholder={color}
          icon={<Icon icon="fa fa-globe" />}
        />
      )}
    />
  </div>
))
