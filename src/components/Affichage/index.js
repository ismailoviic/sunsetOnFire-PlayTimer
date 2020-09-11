import React from 'react'
import { useStyles } from './styles'
import { secToSecMinHr, formater } from '../../helpers'
export default props => {
  const classes = useStyles()

  // let time = secToSecMinHr(props.secondes)
  // {time.hr} : {time.min} : {time.sec}

  return (
    <div className={classes.affichageDiv}>
      <p className={classes.affichage}>
        {formater(secToSecMinHr(props.secondes))}
      </p>
    </div>
  )
}
