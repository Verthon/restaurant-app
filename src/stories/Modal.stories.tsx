import React from 'react'

import { Modal } from '../ui/Modal/Modal'
import '../scss/index.scss'

const Component = {
  title: 'Modal',
  component: Modal
}

export default Component

export const DefaultModal = () => <Modal show>
  <h2>Modal content</h2>
  <p>Modal description</p>
</Modal>