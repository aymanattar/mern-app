import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  heading: {
    //color: 'rgba(0,183,255, 1)',
    color: "#BA5BD7",
    textDecoration: 'none',
  },
  image: {
    marginLeft: '12px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '300px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: 35,
      //color: 'rgba(0,183,255, 1)',
      color: "#BA5BD7",
    },
    mainContainer: {
      flexDirection: "column-reverse",
    },
    image: {
      width: 80,
      height: 40,
      marginLeft: 0,
    },
  }

}));
