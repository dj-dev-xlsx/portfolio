import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-8 bg-white shadow-lg rounded-lg sm:flex-row sm:items-center sm:gap-6 sm:p-10">
        <img
          className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Erin Lindford"
        />
        <div className="space-y-3 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xl font-semibold text-gray-800">Erin Lindford</p>
            <p className="text-md font-medium text-gray-500">Product Engineer</p>
          </div>
          <div className="flex justify-center sm:justify-start gap-4">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 active:bg-purple-800 transition duration-200">
              Message
            </button>
            <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 active:bg-sky-800 transition duration-200">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
