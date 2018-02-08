import amber from 'material-ui/colors/amber'
import {createMuiTheme} from 'material-ui/styles'
import grey from 'material-ui/colors/grey'
import indigo from 'material-ui/colors/indigo'

const fontWeightSemiBold = 700
const fontWeightRegular = 500
const fontWeightThin = 400

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    title: {
      fontSize: '2rem',
      lineHeight: 1.2,
      fontWeight: fontWeightSemiBold,
      color: grey[900],
    },
    headline: {
      fontSize: '1.4rem',
      lineHeight: 2,
      fontWeight: fontWeightSemiBold,
    },
    subheading: {
      fontSize: '1.2rem',
      lineHeight: 1.3,
      fontWeight: fontWeightThin,
      color: grey[700],
    },
    caption: {
      fontSize: '1rem',
      lineHeight: 1.4,
      fontWeight: fontWeightRegular,
      color: grey[900],
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1,
      fontWeight: fontWeightThin,
      color: grey[700],
      fontStyle: 'italic',
    },
  },
})

export default theme
