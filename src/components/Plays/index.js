import React from 'react'
import { useStyles } from './styles'
import Play from '../Play'
export default props => {
  const classes = useStyles()

  return (
    <div className={classes.playsDiv}>
      <Play number={1} addToTable={props.addToTable} />
      <Play number={2} addToTable={props.addToTable} />
      <Play number={3} addToTable={props.addToTable} />
      <Play number={4} addToTable={props.addToTable} />
      <Play number={5} addToTable={props.addToTable} />
      <Play number={6} addToTable={props.addToTable} />
    </div>
    // <button onClick={(e, ..arg) => HandleClick(e)}
  )
}
// callback (props)  HandleClick  / HandleChange
// dumb / smart components
