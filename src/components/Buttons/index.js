import React from 'react'
import { useStyles } from './styles'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import PauseIcon from '@material-ui/icons/Pause'

export default props => {
  const classes = useStyles()

  if (props.buttonsState === 1) {
    return (
      <div className={classes.buttonsDiv}>
        <div className={classes.button} onClick={props.onStart}>
          <PlayArrowIcon />
        </div>

        <div className={classes.button} onClick={props.onReset}>
          <RotateLeftIcon />
        </div>
      </div>
    )
  } else if (props.buttonsState === 2) {
    return (
      <div className={classes.buttonsDiv}>
        <div className={classes.button} onClick={props.onPause}>
          <PauseIcon />
        </div>

        <div className={classes.button} onClick={props.onReset}>
          <RotateLeftIcon />
        </div>
      </div>
    )
  } else {
    return (
      <div className={classes.buttonsDiv}>
        <div className={classes.button} onClick={props.onContinu}>
          <PlayArrowIcon />
        </div>

        <div className={classes.button} onClick={props.onReset}>
          <RotateLeftIcon />
        </div>
      </div>
    )
  }
}
