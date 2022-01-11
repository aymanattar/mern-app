import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
//   [theme.breakpoints.down('sm')]: {
//     heading: {
//       fontSize: 35,
//       //color: 'rgba(0,183,255, 1)',
//       color: "#BA5BD7",
//     },
//     mainContainer: {
//       flexDirection: "column-reverse",
//     },
//     image: {
//       width: 80,
//       height: 40,
//       marginLeft: 0,
//     },
//   }
//
// }));
