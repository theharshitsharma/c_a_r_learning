import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef() 

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-orange-400 rounded-3xl shadow-2xl p-8 my-10 space-y-6">

  <h1 className="text-3xl font-extrabold text-white text-center tracking-wide">
    🔐 Password Generator
  </h1>

  <div className="flex items-center border border-gray-600 rounded-xl overflow-hidden shadow-inner">
    <input
      type="text"
      value={password}
      className="w-full bg-gray-950 text-white px-5 py-3 text-lg tracking-wide font-mono outline-none"
      placeholder="Generated password"
      readOnly
      ref={passwordRef}
    />
    <button
      onClick={copyPasswordToClipboard}
      className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all px-5 py-3 text-white font-semibold"
    >
      Copy
    </button>
  </div>

  <div className="flex items-center gap-4">
    <input
      type="range"
      min={6}
      max={100}
      value={length}
      onChange={(e) => setLength(e.target.value)}
      className="cursor-pointer w-full accent-orange-500"
    />
    <span className="text-white font-medium">
      Length: <span className="text-orange-400 font-bold">{length}</span>
    </span>
  </div>

  <div className="flex items-center gap-4">
    <input
      type="checkbox"
      checked={numberAllowed}
      id="numberInput"
      onChange={() => setNumberAllowed(prev => !prev)}
      className="accent-orange-500 w-5 h-5"
    />
    <label htmlFor="numberInput" className="text-white font-medium">
      Include Numbers
    </label>
  </div>

  <div className="flex items-center gap-4">
    <input
      type="checkbox"
      checked={characterAllowed}
      id="characterInput"
      onChange={() => setCharacterAllowed(prev => !prev)}
      className="accent-orange-500 w-5 h-5"
    />
    <label htmlFor="characterInput" className="text-white font-medium">
      Include Symbols
    </label>
  </div>
</div>

    </>
  )
}

export default App
