import React from 'react'
import { useStyles } from './styles'
import logo from '../../images/soflogo.png'
export default () => {
  const classes = useStyles()

  return (
    <div  onClick={() => {}}>
      <img src={logo} className={classes.logo} alt='Sunset On Fire' />
    </div>
  )
}
