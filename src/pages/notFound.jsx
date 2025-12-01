import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-linear-to-br from-primary via-white to-accent text-secondary px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

