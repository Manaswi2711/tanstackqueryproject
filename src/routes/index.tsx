import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component:App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      
     
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
        WELCOME TO HOME PAGE 🚀
      </h1>

      <p className="text-center text-gray-600 mb-10">
        TanStack Router project with Counter, Todo & Products
      </p>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Counter App
          </h2>
          <p className="text-gray-600 mb-4">
            Increase & decrease numbers using state
          </p>
          <Link
            to="/counter"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Open Counter
          </Link>
        </div>

     
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Todo List
          </h2>
          <p className="text-gray-600 mb-4">
            Add & manage daily tasks
          </p>
          <Link
            to="/todolist"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Open Todo
          </Link>
        </div>

        
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">
            Products
          </h2>
          <p className="text-gray-600 mb-4">
            Fetch products from API
          </p>
          <Link
            to="/products"
            className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
          >
            Open Products
          </Link>
        </div>

      </div>
    </div>
  )
}
