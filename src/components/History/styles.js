import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  historyDiv: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '100%'
  },
  title: {
    height: '30px',
    width: '100%',
    backgroundColor: '#fb6143',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray',
  },
  post: {
    fontWeight: 'bold',
    marginLeft: '10px',
    marginRight: '30px',
    flex: '1.5'
  },
  time: {
    fontWeight: 'bold',
    flex: '1.5'
  },
  cost: {
    fontWeight: 'bold',
    flex: '1,5'
  },
  delete: {
    fontWeight: 'bold',
    fontSize: '15px',
    marginLeft: '20px',
    flex: '1'
  },
  table: {
    height: '270px',
    width: '100%',
    backgroundColor: '#fb9133'
,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll'
  }
})
