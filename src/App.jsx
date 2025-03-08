import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-800 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justgify-between">
          <div className="text-2xl font-bold">My Website</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    <div></div>
    <div className='bg-slate-800'>
    </div>
    <div className='bg-sky-300 border border-red-800'>
      <h1 className='text-9xl font-black font-mono underline antialiased italic text-yellow-950'>Hello World</h1>
      <p className='tracking-tighter leading-10 text-justify text-slate-600 uppercase p-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat illum, nisi ducimus blanditiis debitis voluptatum provident voluptates officiis explicabo odit cupiditate incidunt hic quia nobis suscipit expedita qui pariatur eius numquam, officia dignissimos? Consectetur atque veritatis eius pariatur sed magnam molestiae cum ex sunt maiores nam rem quos enim, fuga temporibus eos nemo numquam! Qui quia quasi consequatur iste.</p>
    </div>
      
    </>
  )
}

export default App
