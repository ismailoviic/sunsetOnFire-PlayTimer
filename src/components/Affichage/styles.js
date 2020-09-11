import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  affichageDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  affichage: {
    fontFamily: 'Cooper',
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '-20px',
    marginBottom: '5px'
  }
})
