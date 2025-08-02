import {Stack, Container} from '@mui/material'
import {ColorSchemeToggle} from './ColorSchemeToggle'


export function Navbar() {
  return (
    <Container maxWidth="lg">
      <Stack direction="row" spacing={2} sx={{padding: 2}}>
        <div>Logo</div>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <ColorSchemeToggle/>
      </Stack>
    </Container>
  )
}