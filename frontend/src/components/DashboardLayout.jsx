/**
 * DashboardLayout Component
 * Main layout wrapper for dashboard pages
 * Combines Sidebar and Topbar with main content area
 */

import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useAuth } from './AuthProvider'

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar user={user} onLogout={logout} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar user={user} />
        
        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
