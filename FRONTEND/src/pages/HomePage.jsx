

// import React from 'react'
// import UrlForm from '../components/UrlForm'

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//     <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//       <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
//       <UrlForm/>
//     </div>
//   </div>
//   )
// }

// export default HomePage

import React from 'react'
import UrlForm from '../components/UrlForm'
import { Link } from '@tanstack/react-router'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 pt-20 px-4 flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-white mb-4">
          ShrinkX: Simplify Your Links
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Paste your long URL and get a clean, short link instantly.
        </p>
      </div>

      {/* URL Shortener Form */}
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <UrlForm />
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
          Want to create custom URLs and track visits?
        </p>
        <Link
          to="/auth"
          className="inline-block bg-indigo-700 text-white px-6 py-2 rounded-full hover:text-indigo-500 transition"
        >
          Sign In to Unlock More Features
        </Link>
      </div>
    </div>
  )
}

export default HomePage
