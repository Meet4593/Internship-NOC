/**
 * Topbar Component
 * Top navigation bar with welcome message, user info, and action buttons
 * Contains stats strip below main topbar
 */

import { useState } from 'react'

const stats = [
  { label: 'Total Applications', count: 12, icon: TotalIcon, color: 'teal' },
  { label: 'Pending', count: 3, icon: PendingIcon, color: 'yellow' },
  { label: 'Company Profiles', count: 2, icon: CompanyIcon, color: 'blue' },
  { label: 'Approved', count: 7, icon: ApprovedIcon, color: 'green' },
  { label: 'Rejected', count: 2, icon: RejectedIcon, color: 'red' },
  { label: 'This Month', count: 5, icon: MonthIcon, color: 'purple' },
]

function TotalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function PendingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function CompanyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}

function ApprovedIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function RejectedIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function MonthIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Topbar({ user }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const getDisplayName = (email) => {
    if (!email) return 'Student'
    const name = email.split('@')[0]
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Main Topbar */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Welcome message */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Welcome back, {getDisplayName(user?.email)}!
            </h1>
          </div>

          {/* Right side - User info and actions */}
          <div className="flex items-center space-x-4">
            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="User menu"
              >
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-medium text-sm">
                    {getDisplayName(user?.email).charAt(0)}
                  </span>
                </div>
                <span className="hidden sm:block">{user?.email}</span>
                <ChevronDownIcon />
              </button>

              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Account
                  </a>
                  <hr className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help & Support
                  </a>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <button className="btn-secondary text-sm">
              Company Profile
            </button>
            <button className="btn-primary text-sm">
              + NEW APPLICATION
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="card p-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${
                  stat.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                  stat.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                  stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  stat.color === 'green' ? 'bg-green-50 text-green-600' :
                  stat.color === 'red' ? 'bg-red-50 text-red-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  <stat.icon />
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-gray-600">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
