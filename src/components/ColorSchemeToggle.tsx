import {  useColorScheme } from '@mui/material/styles';

import { DarkModeSwitch } from 'react-toggle-dark-mode';



export function ColorSchemeToggle() {
const { mode, setMode } = useColorScheme();



  return ( 
    <div>
        <DarkModeSwitch
              style={{ marginBottom: '2rem' }}
            checked={mode == 'dark'}
            onChange={(checked: boolean) => {
                setMode(checked ? 'dark' : 'light')
            }}
            size={40}

        />
    </div>
  )


}