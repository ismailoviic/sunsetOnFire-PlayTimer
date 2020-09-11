import React from 'react'
import { useStyles } from './styles'
import { calculeCost } from '../../helpers'

export default props => {
  const classes = useStyles()

  return (
    <div className={classes.costDiv}>
      <p className={classes.cost}>{calculeCost(props.secondes)} DH</p>
    </div>
  )
}
