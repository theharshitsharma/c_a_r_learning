import { useState, useRef } from 'react';

function Generatorapp({ onGenerate }) {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  const passwordGenerator = () => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*()_+';

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
    if (onGenerate) onGenerate(pass); // Send to parent
  };

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-orange-400 rounded-2xl shadow-lg p-6 space-y-5">
      <h1 className="text-xl font-bold text-white text-center">
        🔐 Generate Password
      </h1>

      <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          className="w-full bg-gray-950 text-white px-4 py-2 text-sm font-mono outline-none"
          placeholder="Generated password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white text-sm font-semibold transition"
        >
          Copy
        </button>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="range"
          min={6}
          max={32}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <span className="text-white text-sm">
          Length: <strong className="text-orange-400">{length}</strong>
        </span>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="numberInput"
          checked={numberAllowed}
          onChange={() => setNumberAllowed(prev => !prev)}
          className="accent-orange-500 w-4 h-4"
        />
        <label htmlFor="numberInput" className="text-white text-sm">
          Include Numbers
        </label>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="characterInput"
          checked={characterAllowed}
          onChange={() => setCharacterAllowed(prev => !prev)}
          className="accent-orange-500 w-4 h-4"
        />
        <label htmlFor="characterInput" className="text-white text-sm">
          Include Symbols
        </label>
      </div>

      <div className="text-center">
        <button
          onClick={passwordGenerator}
          className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-white font-semibold shadow-lg transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default Generatorapp;
