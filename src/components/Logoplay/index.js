import React from 'react'
import { useStyles } from './styles'

import pslogo from '../../images/pslogo.png'
export default props => {
  const classes = useStyles({
    on: props.on
      ? 'drop-shadow(0px 6px 6px orange)'
      : 'drop-shadow(0px 6px 6px rgba(176, 30, 30, 0.588))'
  })

  return (
    <div className={classes.logoPlay}>
      <img className={classes.logo} src={pslogo} alt='Sunset On Fire' />

      <p className={classes.play}>play {props.number}</p>
    </div>
  )
}
