
import {Grid, Stack, Typography, Button} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BlogIcon from '@mui/icons-material/Edit';

const SOCIAL_LINKS: {title: string, Icon: any, link: string}[] = [ 
  {title: 'YouTube', Icon: YouTubeIcon, link: "https://www.youtube.com/@5yearsKim"},
  {title: 'LinkedIn', Icon: LinkedInIcon, link: "www.linkedin.com/in/hyunwoo-kim-371976229"},
  {title: 'Github', Icon: GitHubIcon, link: "https://github.com/5yearsKim"},
  {title: 'Blog', Icon: BlogIcon, link: "https://onionkim.tistory.com/"},
]


export function LinkTab() {
  return (
    <Stack>
      <Typography fontSize={22} fontWeight='bold'>On the web</Typography>

      <Grid container>
        {SOCIAL_LINKS.map((item) => (
          <Grid size={{xs: 12, md: 6}}>
            <Button
              fullWidth
              startIcon={<item.Icon sx={{ fontSize: 32 }} />}
              sx={{ fontSize: '1.2rem', justifyContent: 'flex-start' }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </Button>

          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}