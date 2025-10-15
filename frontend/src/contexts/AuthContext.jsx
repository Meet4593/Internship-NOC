import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Default credentials for testing
  const DEFAULT_CREDENTIALS = {
    email: 'admin@charusat.edu.in',
    password: '12345'
  }

  // Check if user is logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('charusat_noc_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem('charusat_noc_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simple validation - replace with API call later
    if (email === DEFAULT_CREDENTIALS.email && password === DEFAULT_CREDENTIALS.password) {
      const userData = {
        id: 1,
        email: email,
        name: 'Admin User',
        role: 'admin',
        domain: email.split('@')[1]
      }
      
      setUser(userData)
      localStorage.setItem('charusat_noc_user', JSON.stringify(userData))
      return { success: true }
    } else {
      return { success: false, error: 'Invalid email or password.' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('charusat_noc_user')
  }

  const isCharusatEmail = (email) => {
    const allowedDomains = ['@charusat.edu.in', '@charusat.ac.in']
    return allowedDomains.some(domain => email.endsWith(domain))
  }

  const value = {
    user,
    login,
    logout,
    loading,
    isCharusatEmail,
    isLoggedIn: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
