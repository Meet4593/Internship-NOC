import { Box, Container, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Footer() {
  return (
    <Box component="footer" sx={{
      mt: 'auto',
      py: 4,
      background: 'linear-gradient(90deg, #0a3d62 0%, #0f5ea8 50%, #1273d1 100%)',
      color: '#fff'
    }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Typography variant="body2">© 2025 CHARUSAT</Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link component={RouterLink} to="/about" underline="hover" color="#fff">Contact</Link>
          <Link href="#" underline="hover" color="#fff">Privacy Policy</Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer


