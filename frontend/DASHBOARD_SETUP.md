# Student Dashboard Setup Guide

## Overview
This is a clean, responsive Student Dashboard UI built with **Next.js (pages router)** and **Tailwind CSS**. It includes authentication, dashboard layout, and empty state components ready for extension.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Backend server running on port 4000

### Installation

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔐 Authentication

### Demo Credentials
- **Email:** `admin@charusat.edu.in`
- **Password:** `12345`

### Login Flow
1. Visit `/login` - Simple form with demo credentials
2. Use the "Use demo credentials" button for quick login
3. After login, you'll be redirected to `/dashboard`
4. Logout clears localStorage and redirects to `/login`

## 📁 Project Structure

```
frontend/
├── pages/
│   ├── _app.js              # App wrapper with AuthProvider
│   ├── index.js             # Redirects to dashboard/login
│   ├── login.jsx            # Login page
│   └── dashboard.jsx        # Main dashboard
├── src/
│   ├── components/
│   │   ├── AuthProvider.jsx # Authentication context
│   │   ├── DashboardLayout.jsx # Main layout wrapper
│   │   ├── Sidebar.jsx      # Left navigation
│   │   ├── Topbar.jsx       # Top navigation with stats
│   │   ├── StatCard.jsx     # Statistics card component
│   │   └── EmptyStateCard.jsx # Empty state component
│   └── utils/
│       └── auth.js          # Authentication utilities
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Styling

### Tailwind Configuration
- **Primary Color:** Teal (#14b8a6)
- **Custom Components:** `.btn-primary`, `.card`, `.sidebar-item`
- **Responsive Design:** Mobile-first approach
- **Shadows:** Custom soft shadows for cards

### Key CSS Classes
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling  
- `.card` - Card component with shadow and border
- `.sidebar-item` - Navigation item styling
- `.sidebar-item-active` - Active navigation item

## 🔧 Customization

### Adding New Pages
1. Create new `.jsx` files in `pages/` directory
2. Use `DashboardLayout` wrapper for protected pages
3. Add navigation items to `Sidebar.jsx`

### Modifying Stats
Edit the `stats` array in `Topbar.jsx`:
```javascript
const stats = [
  { label: 'Total Applications', count: 12, icon: TotalIcon, color: 'teal' },
  // Add more stats here
]
```

### Updating Sample Data
- **Dashboard Stats:** Edit `Topbar.jsx` stats array
- **User Data:** Modify demo credentials in backend controller
- **Empty States:** Update `EmptyStateCard` components in `dashboard.jsx`

## 🔌 Backend Integration

### Current Setup
- Backend runs on `http://localhost:4000`
- Uses `/api/auth/simple-login` endpoint
- Returns demo token and user data

### API Endpoints
- `POST /api/auth/simple-login` - Demo login with hardcoded credentials
- `POST /api/auth/login` - Database-based login (existing)
- `POST /api/auth/register` - User registration (existing)

### Environment Variables
Set in your `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 🔐 Google OAuth Integration (Future)

### Implementation Steps
1. Install Google OAuth library:
   ```bash
   npm install @google-cloud/oauth2
   # or
   npm install react-google-login
   ```

2. Add domain validation in `auth.js`:
   ```javascript
   // After Google OAuth success, enforce:
   if (!email.endsWith('@charusat.edu.in') && !email.endsWith('@charusat.ac.in')) {
     throw new Error('Please use your Charusat email address')
   }
   ```

3. Replace `loginRequest` function with Google OAuth flow
4. Update backend to handle Google tokens

### Domain Restrictions
- Only `@charusat.edu.in` emails allowed
- Only `@charusat.ac.in` emails allowed
- Validation happens on both frontend and backend

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Setup
1. Set `NEXT_PUBLIC_API_URL` to your production backend URL
2. Configure backend CORS for your domain
3. Update authentication endpoints if needed

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 640px - Collapsible sidebar
- **Tablet:** 640px - 1024px - Adjusted grid layouts
- **Desktop:** > 1024px - Full layout with sidebar

### Mobile Features
- Responsive navigation
- Touch-friendly buttons
- Optimized card layouts
- Accessible form controls

## 🛠️ Development Notes

### File Extensions
- Uses `.jsx` for React components (no TypeScript)
- Uses `.js` for utility files and configuration
- Follows Next.js pages router conventions

### State Management
- React Context for authentication
- localStorage for persistence
- No external state management libraries

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Focus management

## 🔍 Troubleshooting

### Common Issues

1. **Login not working:**
   - Check backend server is running on port 4000
   - Verify demo credentials: `admin@charusat.edu.in` / `12345`

2. **Styling issues:**
   - Ensure Tailwind CSS is properly configured
   - Check PostCSS configuration

3. **Build errors:**
   - Clear `.next` folder and rebuild
   - Check for missing dependencies

4. **Authentication redirects:**
   - Clear localStorage if stuck in redirect loops
   - Check browser console for errors

### Debug Mode
Add `console.log` statements in:
- `AuthProvider.jsx` - Authentication state changes
- `auth.js` - API requests and responses
- Backend controller - Login attempts

## 📝 Next Steps

1. **Connect Real APIs:**
   - Replace demo data with actual API calls
   - Implement CRUD operations for applications
   - Add real user management

2. **Enhance UI:**
   - Add loading states and error handling
   - Implement form validation
   - Add more interactive components

3. **Security:**
   - Implement proper JWT validation
   - Add rate limiting
   - Secure API endpoints

4. **Features:**
   - File uploads for applications
   - Real-time notifications
   - Advanced filtering and search
