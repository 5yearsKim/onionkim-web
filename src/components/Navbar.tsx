import {Stack, Container, Box, Typography} from '@mui/material'
import {ColorSchemeToggle} from './ColorSchemeToggle'


export function Navbar() {
  return (
    <Box width='100%'
      bgcolor={(theme) => theme.palette.mode ==='dark' ? 'none': 'white'}>
      <Container maxWidth='md'>
        <Stack direction="row" spacing={2} sx={{padding: 1}} alignItems='center' >

          <Box
            sx={{
              cursor: 'pointer',
            }}
          >
            <Typography fontSize={22} fontWeight='bold'>🧅 onion.kim</Typography>
          </Box>

          <Box flex={1}/>

          <ColorSchemeToggle/>
        </Stack>
      </Container>
    </Box>
  )
}