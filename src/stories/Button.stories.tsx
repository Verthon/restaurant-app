import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from '../ui/Button/Button'
import '../scss/index.scss'

const Component = {
  title: 'Button',
  component: Button
}

export default Component

export const ButtonDark = () => <Button className="btn--dark" size="btn--large">book table</Button>

export const ButtonLight = () => <Button className="btn--light" size="btn--large">see menu</Button>
 
export const Link = () => <Button className="btn--transparent" href="https://reddit.com" onClick={action('clicked')}>Link transparent</Button>
