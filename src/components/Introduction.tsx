import {Stack, Typography, Avatar} from '@mui/material'

export function Introduction() {
    return (
        <Stack direction='column'>
            <Stack direction='row'>
                <Stack direction='column'>
                    <Typography>Onion Kim</Typography>
                    <Typography>Technical enthusiast</Typography>
                </Stack>

                <Avatar
                    sizes="lg"
                    src="/oddish.webp"
                />

                    <img />
            </Stack>
        </Stack>
    )
}