import React, { Component, createContext } from 'react'
import '../scss/App.scss'
import Home from './Components/Home/Home'

const Context = createContext()

const globalState = {
  booking: {
    date: '2020-05-06T15:13:49.198Z',
    people: 1,
    name: 'John Doe',
    email: 'johndoe@xx.ox',
    confirmed: false
  }
}

const App = () => (
  <Context.Provider value={globalState}>
    <Home />
  </Context.Provider>
)

export const GlobalConsumer = Context.Consumer

export default App
