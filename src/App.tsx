import React from 'react';
import {Container, Stack} from '@mui/material'
import {Navbar} from 'components/Navbar';
import {Introduction} from 'components/Introduction'
import {Provider} from 'system/provider'

function App() {
  return (
    <Provider>
      <Stack direction='column'>
        <Navbar/>

        <Container maxWidth="sm">
          <div>hello</div>
          <Introduction/>
        </Container>
      </Stack>
    </Provider>
  );
}

export default App;
