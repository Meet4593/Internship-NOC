/**
 * Authentication utility functions
 * Handles localStorage operations and API calls for authentication
 * TODO: Replace with Google OAuth that enforces @charusat.edu.in and @charusat.ac.in domains
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

/**
 * Login request to backend API
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} - Response from API
 */
export async function loginRequest(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/simple-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }

    return data
  } catch (error) {
    console.error('Login request failed:', error)
    throw error
  }
}

/**
 * Save authentication data to localStorage
 * @param {Object} authData - Authentication data containing token and user info
 */
export function saveAuth(authData) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth', JSON.stringify(authData))
  }
}

/**
 * Clear authentication data from localStorage
 */
export function clearAuth() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth')
  }
}

/**
 * Get authentication data from localStorage
 * @returns {Object|null} - Authentication data or null if not found
 */
export function getAuth() {
  if (typeof window !== 'undefined') {
    try {
      const authData = localStorage.getItem('auth')
      return authData ? JSON.parse(authData) : null
    } catch (error) {
      console.error('Error parsing auth data:', error)
      return null
    }
  }
  return null
}

/**
 * Check if user is authenticated
 * @returns {boolean} - True if user is authenticated
 */
export function isAuthenticated() {
  const auth = getAuth()
  return auth && auth.token
}

/**
 * Validate email domain for Charusat (for future Google OAuth integration)
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is from allowed Charusat domains
 */
export function isValidCharusatEmail(email) {
  return email.endsWith('@charusat.edu.in') || email.endsWith('@charusat.ac.in')
}

// Google OAuth integration notes:
// 1. Install @google-cloud/oauth2 or use react-google-login
// 2. After successful Google OAuth, validate domain:
//    if (!isValidCharusatEmail(email)) {
//      throw new Error('Please use your Charusat email address')
//    }
// 3. Exchange Google token for your backend JWT
// 4. Save auth data using saveAuth()
