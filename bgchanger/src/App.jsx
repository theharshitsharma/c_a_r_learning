import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    
      <div className="w-full h-screen duration-200"
      style={{
        background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <div className="f2lex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold mb-4">Vite + React + Tailwind CSS</h1>
          <div className="flex items-center">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
              <img src="https://tailwindcss.com/_next/static/media/logo-dark.2f3b4c0c.svg" className="logo tailwind" alt="Tailwind CSS logo" />
            </a>
          </div>
          <div className="flex items-center mt-4">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>  
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </div>
        
></div>
    
  )
}

export default App
