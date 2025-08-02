import {Stack, Typography, Avatar, Box} from '@mui/material'

export function Introduction() {
  return (
    <Stack direction='column'>
      <Stack direction='row' alignItems='center'>
        <Stack direction='column' flex={1}>
          <Typography fontSize={28} fontWeight='bold'>Onion Kim</Typography>
          <Typography fontSize={22}>Technical Enthusiast</Typography>
        </Stack>

        <Avatar
          alt='avatar'
          src="/oddish.webp"
          sx={{
            width: 80,
            height: 80,
            boxShadow: 2,
            cursor:'pointer',
          }}
        />
      </Stack>

      <Box
        borderRadius={2}
        mt={2}
        mb={2}
        padding={2}
        bgcolor='rgba(255, 213, 0, 0.1)'
      >
        <Typography>Hi. I'm a software engineer / technical writer living in South Korea.</Typography>

      </Box>
    </Stack>
  )
}