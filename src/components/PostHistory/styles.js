import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  postHistoryDiv: {
    height: '35px',
    width: '98%',
    marginTop: '3px',
    backgroundColor: 'white',
    border: '1px solid gray',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  post: {
    fontSize: '20px',
    marginLeft: '10px',
    marginRight: '30px',
    flex: '1.5'
  },
  time: {
    fontSize: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    fontWeight: 'bold',
    flex: '2'
  },
  cost: {
    fontSize: '25px',
    marginLeft: '20px',
    marginRight: '20px',
    fontWeight: 'bold',
    flex: '1'
  },
  delete: {
    fontSize: '15px',
    fontWeight: 'bold',
    marginLeft: '10px',
    marginRight: '5px',
    flex: '1',
    '&:hover': {
      color: 'red'
    }
  }
})
