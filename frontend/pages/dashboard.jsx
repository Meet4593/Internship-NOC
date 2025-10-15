/**
 * Dashboard Page
 * Main dashboard with stats and empty state cards
 * Shows Company Profile Applications and Other Applications sections
 */

import { useAuth } from '../src/components/AuthProvider'
import DashboardLayout from '../src/components/DashboardLayout'
import EmptyStateCard from '../src/components/EmptyStateCard'

// Empty state illustrations as SVG components
function CompanyProfileIcon() {
  return (
    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}

function ApplicationsIcon() {
  return (
    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

export default function Dashboard() {
  const { user } = useAuth()

  const handleCreateCompanyProfile = () => {
    // TODO: Navigate to company profile creation
    console.log('Navigate to create company profile')
  }

  const handleCreateApplication = () => {
    // TODO: Navigate to application creation
    console.log('Navigate to create application')
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your applications and company profiles
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Company Profile Applications */}
          <EmptyStateCard
            title="Company Profile Applications"
            description="Create and manage your company profiles to apply for internships and placements."
            icon={<CompanyProfileIcon />}
            buttonText="+ Create Company Profile"
            onButtonClick={handleCreateCompanyProfile}
            className="min-h-[400px]"
          />

          {/* Other Applications */}
          <EmptyStateCard
            title="Other Applications"
            description="Submit applications for internships, placements, and other opportunities."
            icon={<ApplicationsIcon />}
            buttonText="CREATE FIRST APPLICATION"
            onButtonClick={handleCreateApplication}
            className="min-h-[400px]"
          />
        </div>

        {/* Additional sections can be added here */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-card border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="text-center py-8">
              <p className="text-gray-500">No recent activity to display</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
