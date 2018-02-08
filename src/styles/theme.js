import {createMuiTheme} from 'material-ui/styles'
import grey from 'material-ui/colors/grey'
import orange from 'material-ui/colors/orange'

const fontWeightSemiBold = 700
const fontWeightRegular = 500
const fontWeightThin = 400
const primary = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea',
  contrastDefaultColor: 'light',
}

const theme = createMuiTheme({
  palette: {
    primary,
    secondary: orange,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: "'Alegreya Sans', sans-serif",
    color: grey[300],
    headline: {
      fontSize: '1.4rem',
      lineHeight: 2,
      fontWeight: fontWeightSemiBold,
      color: primary[500],
    },
    title: {
      fontSize: '2rem',
      lineHeight: 2,
      fontWeight: fontWeightSemiBold,
      color: grey[900],
    },
    subheading: {
      fontSize: '0.9rem',
      lineHeight: 1,
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
