import {  useColorScheme } from '@mui/material/styles';

import { DarkModeSwitch } from 'react-toggle-dark-mode';



export function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();

  const size = 32;

  return ( 
    <DarkModeSwitch
      checked={mode === 'dark'}
      onChange={(checked: boolean) => {
        setMode(checked ? 'dark' : 'light')
      }}
      size={size}

    />
  )


}