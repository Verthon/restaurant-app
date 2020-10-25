import React from 'react'

import { Input } from '../ui/Input/Input'
import '../scss/index.scss'

const Component = {
  title: 'Input',
  component: Input
}

export default Component

const containerStyle = {
  maxWidth: '400px',
  margin: 'auto'
}

export const PasswordInput = () => (
  <div style={containerStyle}>
    <Input type="password" placeholder="password" />
  </div>
)
export const EmailInput = () => (
  <div style={containerStyle}>
    <Input type="email" />
  </div>
)
export const TextInput = () => (
  <div style={containerStyle}>
    <Input type="text" />
  </div>
)
