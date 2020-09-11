import React from 'react'
import { useStyles } from './styles'

import PostHistory from '../PostHistory'

export default props => {
  const classes = useStyles()
  const deletPostStart = (post, start) => {}

  return (
    <div className={classes.historyDiv}>
      <div className={classes.title}>
        <p className={classes.post}>Post</p>
        <p className={classes.time}>Start</p>
        <p className={classes.time}>End</p>
        <p className={classes.time}>Duration</p>
        <p className={classes.cost}>Cost DH</p>
        <p className={classes.delete}>delete</p>
      </div>
      <div className={classes.table}>
        {props.tableau.map((item, index) => (
          <PostHistory
            key={index}
            Post={item.Post}
            Start={item.Start}
            End={item.End}
            Duration={item.Duration}
            Cost={item.Cost}
            delete={() => {
              props.deletFromTab(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
