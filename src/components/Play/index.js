import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'

import LogoPlay from '../Logoplay'
import Affichage from '../Affichage'
import Buttons from '../Buttons'
import Cost from '../Cost'
import { formater, secToSecMinHr, calculeCost, converter } from '../../helpers'

export default props => {
  const [start, setStart] = useState(0)
  const [pause, setPause] = useState(0)
  const [seconde, setSeconde] = useState(0)
  const [logoOn, setLogoOn] = useState(0)
  const [startTime, setStaerTime] = useState(0)
  const [theStart, setTheStart] = useState(0)
  const [inc, setInc] = useState(0)
  const classes = useStyles()

  const [theTime, seTheTime] = useState(0)

  const [buttonsState, setButtonsState] = useState(1)

  const onStart = () => {
    setButtonsState(2)
    setStart(1)
    seTheTime(0)
    setLogoOn(1)
    const now = new Date()
    let hr = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds()
    setTheStart(now)
    setStaerTime(formater({ hr, min, sec }))
  }
  const onPause = () => {
    setButtonsState(3)
    setPause(1)
    seTheTime(seconde)
  }
  const onContinu = () => {
    setButtonsState(2)
    setPause(0)
    const now = new Date()
    setTheStart(now)
  }
  const onReset = () => {
    setButtonsState(1)
    setPause(0)
    setStart(0)

    let now = new Date()
    let hr = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds()
    props.addToTable({
      Post: props.number,
      Start: startTime,
      End: formater({ hr, min, sec }),
      Duration: formater(secToSecMinHr(Math.floor(seconde))),
      Cost: calculeCost(Math.floor(seconde))
    })
    setLogoOn(0)
    setTimeout(() => {
      setSeconde(0)
    }, 300)
  }
  useEffect(() => {
    if (start) {
      setTimeout(() => {
        let now = new Date()
        let hr = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds()

        if (!pause) {
          setSeconde(
            converter(
              hr,
              min,
              sec,
              theStart.getHours(),
              theStart.getMinutes(),
              theStart.getSeconds()
            ) + theTime
          )
        } else {
        }
        setInc(inc + 1)
      }, 200)
    }
  }, [start, inc])

  /*
console.log({
  Post: props.number,
  Start: startTime,
  End: formater({ hr, min, sec }),
  Duration: formater(secToSecMinHr(Math.floor(seconde))),
  Cost: calculeCost(Math.floor(seconde))
})

  */
  return (
    <div className={classes.playDiv}>
      <LogoPlay number={props.number} on={logoOn} />
      <Affichage secondes={Math.floor(seconde)} />
      <Buttons
        buttonsState={buttonsState}
        onStart={onStart}
        onPause={onPause}
        onContinu={onContinu}
        onReset={onReset}
      />
      <Cost secondes={seconde} />
    </div>
  )
}
