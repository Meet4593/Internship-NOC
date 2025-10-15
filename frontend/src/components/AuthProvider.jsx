import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAuth, clearAuth, isAuthenticated } from '../utils/auth'

/**
 * Authentication Context Provider
 * Manages global authentication state across the application
 * Provides login/logout functionality and user data
 */

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check for existing authentication on app load
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = getAuth()
        if (authData && authData.token) {
          setUser(authData)
        }
      } catch (error) {
        console.error('Error checking auth:', error)
        clearAuth()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Login function
  const login = (authData) => {
    setUser(authData)
    // Redirect to dashboard after successful login
    router.push('/dashboard')
  }

  // Logout function
  const logout = () => {
    setUser(null)
    clearAuth()
    // Redirect to login page after logout
    router.push('/login')
  }

  // Protected route wrapper
  const requireAuth = (WrappedComponent) => {
    return function ProtectedRoute(props) {
      useEffect(() => {
        if (!loading && !user) {
          router.push('/login')
        }
      }, [user, loading, router])

      if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
          </div>
        )
      }

      if (!user) {
        return null
      }

      return <WrappedComponent {...props} />
    }
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading,
    requireAuth,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
