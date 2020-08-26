import React from 'react'

import { Input } from '../ui/Input/Input'
import '../scss/index.scss'

export default {
  title: 'Input',
  component: Input
}

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
