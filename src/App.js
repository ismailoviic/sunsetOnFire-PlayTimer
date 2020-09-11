import React, { useEffect, useState } from 'react'
import './App.css'
import LogoHistory from './components/LogoHistory'
import Plays from './components/Plays'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  AppDiv: {
    display: 'flex',
    justifyContent: 'center',
    alineAtimes: 'center',
    flexDirection: 'column'
  }
})

const App = () => {
  const [tableau, addData] = useState([])
  const addToTable = data => addData([...tableau, data])
  const deletFromTab = index =>
    addData(index => {
      let newTable = [...tableau]
      newTable.splice(index, 1)
      return newTable
    })

  return (
    <div className={useStyles.AppDiv}>
    
      <LogoHistory tableau={tableau} deletFromTab={deletFromTab} />
      <Plays addToTable={addToTable} />
    </div>
  )
}

export default App
