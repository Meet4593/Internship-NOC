/**
 * Demo Express server - No MongoDB required
 * Simple authentication for the dashboard demo
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Demo server running',
    timestamp: new Date().toISOString()
  });
});

// Simple login endpoint
app.post('/api/auth/simple-login', (req, res) => {
  console.log('🔐 Login attempt:', req.body);
  
  try {
    const { email, password } = req.body;
    
    // Hardcoded credentials for demo
    const DEMO_EMAIL = 'admin@charusat.edu.in';
    const DEMO_PASSWORD = '12345';
    
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Generate a simple token for demo purposes
      const token = `demo-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      console.log('✅ Login successful for:', email);
      
      return res.json({
        success: true,
        email: DEMO_EMAIL,
        token: token,
        user: {
          id: 'demo-user-id',
          name: 'Admin User',
          email: DEMO_EMAIL,
          role: 'student'
        }
      });
    }
    
    console.log('❌ Login failed for:', email);
    
    return res.status(401).json({ 
      success: false,
      message: 'Invalid credentials. Use admin@charusat.edu.in / 12345' 
    });
  } catch (err) {
    console.error('💥 Login error:', err);
    return res.status(500).json({ 
      success: false,
      message: 'Login failed' 
    });
  }
});

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('🚀 Demo server started successfully!');
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔐 Login endpoint: http://localhost:${PORT}/api/auth/simple-login`);
  console.log('📝 Demo credentials: admin@charusat.edu.in / 12345');
  console.log('🔧 Ready to handle requests!');
});

module.exports = app;
