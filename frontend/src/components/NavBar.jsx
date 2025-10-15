import { AppBar, Box, Button, Container, Toolbar, Typography, Menu, MenuItem, Avatar, Chip } from '@mui/material'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Logout, AccountCircle, Dashboard } from '@mui/icons-material'
import { useAuth } from '../contexts/AuthContext'

function NavBar() {
  const { user, logout, isLoggedIn } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    handleMenuClose()
  }

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
              '&.active': { bgcolor: 'rgba(255,255,255,0.12)' }, borderRadius: 2
            }}>
              About
            </Button>
            
            {isLoggedIn ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                <Chip
                  label={`Welcome, ${user?.name || 'User'}`}
                  avatar={<Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 24, height: 24 }}>
                    {user?.name?.charAt(0) || 'U'}
                  </Avatar>}
                  sx={{ 
                    color: 'white', 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '& .MuiChip-avatar': { color: 'white' }
                  }}
                />
                <Button
                  color="inherit"
                  onClick={handleProfileMenuOpen}
                  startIcon={<AccountCircle />}
                  sx={{ borderRadius: 2 }}
                >
                  Account
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Dashboard sx={{ mr: 1 }} />
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Logout sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button 
                variant="contained" 
                color="inherit" 
                component={NavLink} 
                to="/login" 
                sx={{
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.15)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.25)',
                  }
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar