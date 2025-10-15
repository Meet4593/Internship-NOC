/**
 * Index Page - Landing Page
 * Shows welcome screen with navigation options
 * Redirects authenticated users to dashboard
 */

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../src/components/AuthProvider'

export default function Home() {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    if (!loading && isAuthenticated) {
      // Redirect authenticated users immediately
      router.push('/dashboard')
    } else if (!loading && !isAuthenticated) {
      // Show welcome screen for unauthenticated users
      setShowWelcome(true)
    }
  }, [isAuthenticated, loading, router])

  const handleGetStarted = () => {
    router.push('/login')
  }

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Show welcome page for unauthenticated users
  if (!isAuthenticated && showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-teal-600">CHARUSAT Portal</h1>
              </div>
              <button
                onClick={handleGetStarted}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-teal-600">CHARUSAT</span>
              <br />
              Student Portal
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Manage your internship applications, company profiles, and track your progress 
              all in one place. Built for CHARUSAT students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleGetStarted}
                className="btn-primary text-lg px-8 py-3"
              >
                Sign In to Dashboard
              </button>
              <button
                onClick={() => router.push('/login')}
                className="btn-secondary text-lg px-8 py-3"
              >
                Login
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Management</h3>
                <p className="text-gray-600">Track and manage all your internship and placement applications in one place.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Profiles</h3>
                <p className="text-gray-600">Create and manage detailed company profiles for your applications.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600">Monitor your application status and track your progress over time.</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>© 2024 CHARUSAT Portal. Built for students, by students.</p>
              <p className="mt-2 text-sm">
                Demo credentials: <code className="bg-gray-100 px-2 py-1 rounded">admin@charusat.edu.in</code> / <code className="bg-gray-100 px-2 py-1 rounded">12345</code>
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // This shouldn't be reached, but just in case
  return null
}
