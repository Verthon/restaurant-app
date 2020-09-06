import React from 'react'
import { motion } from 'framer-motion'
import { pageTransitions } from '../../constants/config'
import bookTableImg from '../../assets/images/brooke-lark-book-table.jpg'
import { Navbar } from '../../ui/Navbar/Navbar'
import { Spinner } from '../../ui/Spinner/Spinner'
import { Button } from '../../ui/Button/Button'
import { Label } from '../../ui/Label/Label'
import { Input } from '../../ui/Input/Input'
import { Props } from './Login.types'

export const Login: React.FC<Props> = ({ onSubmit, state, handleChange, error }) => {
  const links = [{ name: 'Menu', link: 'menu' }, { name: 'Book Table', link: 'book-table' }]

  if (state.isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Navbar links={links} hashlink={false} />
      <motion.div initial="exit" animate="enter" exit="exit" variants={pageTransitions} className="container row">
        <div className="section section__col login">
          <h1 className="heading">Login</h1>
          <form method="POST" className="login__form" onSubmit={onSubmit}>
            <Label htmlFor="email" className="label login__label">
              Email
            </Label>
            <Input type="email" name="email" required onChange={handleChange} />
            <Label htmlFor="email" className="label login__label">
              Password
            </Label>
            <Input type="password" name="password" required onChange={handleChange} />
            <p className="login__error">{error ? error.message : null}</p>
            <Button data-testid="login-submit" type="submit" className="btn--dark">
              Login
            </Button>
          </form>
        </div>
        <div className="section section__col">
          <picture>
            <img src={bookTableImg} alt="" className="table-booking__image" />
          </picture>
        </div>
      </motion.div>
    </>
  )
}
