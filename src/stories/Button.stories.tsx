import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button/Button'

export default {
  title: 'Button',
  component: Button
}

export const ButtonDark = () => <Button className="btn--dark" size="btn--large">book table</Button>

export const ButtonLight = () => <Button className="btn--light" size="btn--large">see menu</Button>
 
export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>

const handleAction = () => {
  console.log('test');
}

export const Emoji = () => (
  <Button onClick={action('handleAction')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
