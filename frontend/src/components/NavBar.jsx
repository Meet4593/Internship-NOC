import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <AppBar position="sticky" color="primary" elevation={8} sx={{
      background: 'linear-gradient( #0f5ea8 )'
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #ffffff 0%, #d7e6ff 100%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                mr: 1.5
              }}
            />
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, letterSpacing: 0.4 }}>
              CHARUSAT NOC Portal
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button color="inherit" component={NavLink} to="/" sx={{
              '&.active': { bgcolor: 'rgba(255,255,255,0.12)' }, borderRadius: 2
            }}>
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/about" sx={{
              '&.active': { bgcolor: '#0f5ea8' }, borderRadius: 2
            }}>
              About
            </Button>
            <Button variant="contained" color="inherit" component={NavLink} to="/login" sx={{
              // ml: 1, fontWeight: 700, borderRadius: 2, textTransform: 'none',
              // boxShadow: '0 6px 12px rgba(0,0,0,0.2)',        
              borderRadius: 2,
              bgcolor: '#0f5ea8' 
            }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar


