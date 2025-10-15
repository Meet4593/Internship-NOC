import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography, 
  Paper, 
  Alert, 
  CircularProgress,
  Divider,
  Chip
} from '@mui/material'
import { Google as GoogleIcon, Login as LoginIcon } from '@mui/icons-material'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login, isLoggedIn, isCharusatEmail } = useAuth()
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.')
      setLoading(false)
      return
    }

    // Check email domain
    if (!isCharusatEmail(formData.email)) {
      setError('Please use a valid CHARUSAT email address (@charusat.edu.in or @charusat.ac.in)')
      setLoading(false)
      return
    }

    try {
      const result = await login(formData.email, formData.password)
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    // Placeholder for future Google OAuth implementation
    setError('Google Sign-In will be available soon!')
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 8, 
      background: 'linear-gradient(180deg, #f0f6ff 0%, #ffffff 60%)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="sm">
        <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0a3d62' }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in to your CHARUSAT NOC Portal account
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 3 }}>
            <TextField 
              label="Email" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth 
              required 
              placeholder="your.email@charusat.edu.in"
              helperText="Use your CHARUSAT email address"
            />
            <TextField 
              label="Password" 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth 
              required 
            />
            
            <Button 
              type="submit"
              variant="contained" 
              size="large" 
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
              sx={{ 
                textTransform: 'none', 
                fontWeight: 700,
                py: 1.5,
                background: 'linear-gradient(45deg, #0f5ea8, #1976d2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0d4a8a, #1565c0)',
                }
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>

            <Divider sx={{ my: 2 }}>
              <Chip label="OR" size="small" />
            </Divider>

            <Button 
              variant="outlined" 
              size="large"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignIn}
              sx={{ 
                textTransform: 'none', 
                fontWeight: 600,
                py: 1.5,
                borderColor: '#db4437',
                color: '#db4437',
                '&:hover': {
                  borderColor: '#c23321',
                  backgroundColor: 'rgba(219, 68, 55, 0.04)',
                }
              }}
            >
              Sign in with Google
            </Button>
          </Box>

          <Box sx={{ mt: 4, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              <strong>Demo Credentials:</strong><br />
              Email: admin@charusat.edu.in<br />
              Password: 12345
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login


