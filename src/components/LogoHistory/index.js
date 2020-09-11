import React, { useState } from 'react'
import { useStyles } from './styles'

import Logo from '../Logo'
import History from '../History'

export default props => {
  const classes = useStyles()
  const [showHistory, setShowHistory] = useState(0)
  const ReturnHistory = () => {
    if (showHistory) {
      return (
        <History tableau={props.tableau} deletFromTab={props.deletFromTab} />
      )
    } else return null
  }
  return (
    <div className={classes.logoHistory}>
      <div className={classes.boxBig}>
        <ReturnHistory />
      </div>

      <div
        className={classes.boxSmall}
        onClick={() => {
          showHistory ? setShowHistory(0) : setShowHistory(1)
        }}
      >
        <Logo />
      </div>

      <div className={classes.boxBig}></div>
    </div>
  )
}
