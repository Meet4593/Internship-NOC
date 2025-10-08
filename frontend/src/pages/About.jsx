import { Box, Container, Typography } from '@mui/material'

function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#0a3d62' }}>
          About the Portal
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The CHARUSAT Internship NOC Portal streamlines internship documentation by enabling students to
          submit company profiles, supports multi-level faculty approval, and generates official NOC PDFs
          upon final approval.
        </Typography>
      </Container>
    </Box>
  )
}

export default About


