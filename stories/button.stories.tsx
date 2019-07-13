import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '~/Button'
import { Icon } from '~/Icon'
import { BulmaColor, BulmaSize } from '~/utils'

import { ListWrapper } from './components/ListWrapper'

const sizes = Object.values(BulmaSize)
const colors = Object.values(BulmaColor)

storiesOf('Buttons', module)
  .add('Props', () => (
    <div>
      <h2 className="title is-2">Sizes</h2>
      <ListWrapper
        items={sizes}
        renderItem={size => <Button size={size}>{size}</Button>}
      />
      <h2 className="title is-2">Colors</h2>
      <ListWrapper
        items={colors}
        renderItem={color => <Button color={color}>{color}</Button>}
      />
      <h2 className="title is-2">Loading</h2>
      <ListWrapper
        items={colors}
        renderItem={color => (
          <Button color={color} loading>
            {color}
          </Button>
        )}
      />
      <h2 className="title is-2">Outline</h2>
      <ListWrapper
        items={colors}
        renderItem={color => (
          <Button color={color} outlined>
            {color}
          </Button>
        )}
      />
      <h2 className="title is-2">Rounded</h2>
      <ListWrapper
        items={colors}
        renderItem={color => (
          <Button color={color} rounded>
            {color}
          </Button>
        )}
      />
      <h2 className="title is-2">Combined</h2>
      <ListWrapper
        items={colors}
        renderItem={color => (
          <Button color={color} rounded outlined>
            {color}
          </Button>
        )}
      />
    </div>
  ))
  .add('With Icons', () => (
    <div>
      <h2 className="title is-2">Left Icon</h2>
      <Button
        size={BulmaSize.Large}
        color={BulmaColor.Primary}
        icon={<Icon icon="fa fa-globe" size={BulmaSize.Large} />}
      >
        Left Icon
      </Button>
      <h2 className="title is-2">Right Icon</h2>
      <Button
        size={BulmaSize.Large}
        color={BulmaColor.Primary}
        iconAfter={<Icon icon="fa fa-globe" size={BulmaSize.Large} />}
      >
        Right Icon
      </Button>
      <h2 className="title is-2">Only Icons</h2>
      <ListWrapper
        items={colors}
        renderItem={color => (
          <Button
            color={color}
            icon={<Icon icon="fa fa-globe" size={BulmaSize.Large} />}
          ></Button>
        )}
      />
    </div>
  ))
