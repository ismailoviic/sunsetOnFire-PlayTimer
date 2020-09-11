import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  logoPlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  logo: {
    height: '277',
    width: '215px',
    filter: theme => theme.on
  },
  play: {
    filter: 'drop-shadow(-1px 0px 1px #F3AB5F)',
    fontFamily: 'Harlow Solid',
    fontSize: '50px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: '0px'
  }
})
