import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { School, TaskAlt, PictureAsPdf } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

function FeatureCard({ icon, title, description }) {
  return (
    <Card elevation={6} sx={{ borderRadius: 3, height: '100%',
      background: 'linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          <Box sx={{
            mr: 1.5,
            width: 44,
            height: 44,
            borderRadius: 2,
            display: 'grid',
            placeItems: 'center',
            bgcolor: '#e8f1ff',
            color: '#0f5ea8',
            boxShadow: 'inset 0 0 0 1px rgba(15,94,168,0.12)'
          }}>
            {icon}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

function Home() {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #f0f6ff 0%, #ffffff 60%)'
    }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        background: 'radial-gradient(1200px 400px at 20% -10%, rgba(18,115,209,0.18) 0%, rgba(18,115,209,0) 60%),\
                    radial-gradient(900px 300px at 80% 10%, rgba(10,61,98,0.18) 0%, rgba(10,61,98,0) 60%)'
      }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{
            fontWeight: 900,
            letterSpacing: 0.5,
            color: '#0a3d62',
            mb: 1,
            fontSize: { xs: 32, sm: 40, md: 56 }
          }}>
            CHARUSAT Internship NOC Portal
          </Typography>
          <Typography variant="h5" sx={{
            color: '#0f5ea8',
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: 18, md: 22 }
          }}>
            Seamless Internship Approval & NOC Generation System
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720, mx: 'auto', color: 'text.secondary', mb: 4 }}>
            Submit your internship company profile, track approvals, and download your NOC — all in one place.
          </Typography>
          <Button component={RouterLink} to="/login" size="large" variant="contained" sx={{
            px: 4,
            py: 1.4,
            fontWeight: 800,
            borderRadius: 3,
            textTransform: 'none',
            boxShadow: '0 10px 24px rgba(18,115,209,0.35)',
            background: 'linear-gradient(#0f5ea8)',
            '&:hover': { filter: 'brightness(1.05)', boxShadow: '0 14px 28px rgba(18,115,209,0.45)' }
          }}>
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<School />}
                title="Student Submission"
                description="Upload and track your company profile easily."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<TaskAlt />}
                title="Faculty Review"
                description="Two-level secure approval workflow."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                icon={<PictureAsPdf />}
                title="NOC Generation"
                description="Automatic NOC PDF download after final approval."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home


