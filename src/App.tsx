import {Container, Box, Stack } from '@mui/material'
import {Navbar} from 'components/Navbar';
import {Provider} from 'system/provider'
import {Introduction} from 'components/Introduction'
import {LinkTab} from 'components/LinkTab'
import {LaptopRenderer} from 'components/LaptopRenderer'

function App() {
  return (
    <Provider>
      <Stack direction='column'>
        <Navbar/>

        <Box height={16}/>

        <Container maxWidth="sm">

          <Box height={350} mb={2} width='100%'>
            <LaptopRenderer/>
          </Box>

          <Introduction/>
          <LinkTab/>
        </Container>
      </Stack>
    </Provider>
  );
}

export default App;
