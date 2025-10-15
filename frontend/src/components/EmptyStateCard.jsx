/**
 * EmptyStateCard Component
 * Displays empty state with illustration and call-to-action
 * Used for main content areas when no data is available
 */

export default function EmptyStateCard({ 
  title, 
  description, 
  icon, 
  buttonText, 
  onButtonClick,
  className = "" 
}) {
  return (
    <div className={`card p-8 text-center ${className}`}>
      <div className="max-w-md mx-auto">
        {/* Empty state illustration */}
        <div className="mb-6">
          {icon}
        </div>
        
        {/* Title and description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        {/* Call to action button */}
        <button
          onClick={onButtonClick}
          className="btn-primary"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
