import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 70,
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '12px',
  },
  imageLeft: {
    marginRight: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: 35,
      color: 'rgba(0,183,255, 1)',
    },
    mainContainer: {
      flexDirection: "column-reverse",
    },
    image: {
      width: 60,
      height: 30,
      marginLeft: 0,
    },
    imageLeft: {
      width: 60,
      height: 30,
      marginRight: 0,
    },
  }

}));
