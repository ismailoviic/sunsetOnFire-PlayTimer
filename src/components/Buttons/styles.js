import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  buttonsDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '100px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3px',
    marginRight: '3px',
    border: '1px solid #f3ac5f',
    borderRadius: '15px',
    backgroundColor: '#FB5D42',
    '&:hover': {
      backgroundColor: '#fb9133'
    }
  }
})
