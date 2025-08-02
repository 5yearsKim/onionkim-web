import { createTheme } from '@mui/material/styles';
import {teal} from '@mui/material/colors'


export const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: teal['A200'],
        }
      }
    },
  },
  palette: {
    primary: {
      main: teal[500],
    }
  }
});

