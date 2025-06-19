import React, { useState } from 'react';
import Generatorapp from './Generatorapp';

const Manager = () => {
  const [showGenerator, setShowGenerator] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 flex flex-col items-center px-4 py-8 font-sans">
      {/* Header */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center w-full max-w-6xl rounded-xl shadow-lg mb-8">
        <div className="text-2xl font-bold tracking-wide">
          &lt;<span className="text-green-400">PasswordVault</span>/&gt;
        </div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition"
        >
          GitHub
        </a>
      </nav>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Secure Your <span className="text-purple-600">Passwords</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="🔗 Website URL"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="text"
            placeholder="👤 Username"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <div className="relative col-span-full">
            <input
              type="text"
              placeholder="🔐 Password"
              value={generatedPassword}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 pr-12 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
            <button
              className="absolute right-3 top-2/4 -translate-y-1/2 text-sm bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition"
              onClick={() => setShowGenerator(!showGenerator)}
            >
              Generate
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transition">
            ➕ Save Credential
          </button>
        </div>
      </div>

      {/* Password Generator */}
      {showGenerator && (
        <div className="mt-8 w-full max-w-xl animate-fade-in-up">
          <Generatorapp onGenerate={(pass) => setGeneratedPassword(pass)} />
        </div>
      )}

      {/* Saved Passwords */}
      <div className="w-full max-w-4xl mt-10 text-gray-700">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Stored Credentials</h3>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-center text-gray-500">No credentials saved yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Manager;