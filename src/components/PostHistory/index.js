import React from 'react'
import { useStyles } from './styles'

export default props => {
  const classes = useStyles()

  return (
    <div className={classes.postHistoryDiv}>
      <p className={classes.post}>Post {props.Post}</p>
      <p className={classes.time}>{props.Start}</p>
      <p className={classes.time}>{props.End}</p>
      <p className={classes.time}>{props.Duration}</p>
      <p className={classes.cost}>{props.Cost}</p>
      <p className={classes.delete} onClick={props.delete}>
        delete
      </p>
    </div>
  )
}
