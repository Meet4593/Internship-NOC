import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material'

function Login() {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(180deg, #f0f6ff 0%, #ffffff 60%)' }}>
      <Container maxWidth="sm">
        <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#0a3d62' }}>
            Login
          </Typography>
          <Box component="form" sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button variant="contained" size="large" sx={{ textTransform: 'none', fontWeight: 700 }}>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login


