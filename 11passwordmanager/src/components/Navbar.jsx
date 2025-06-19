import React from 'react';

const Navbar = () => {
  return (
 <nav className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-6 py-4 flex justify-between items-center shadow-lg rounded-b-2xl">
  <div className="logo font-extrabold text-2xl text-white tracking-wide">
    🔐 Password Manager
  </div>
  <ul className="flex gap-6">
    <li>
      <a
        className="text-white hover:text--200 transition duration-300 ease-in-out font-medium"
        href="/"
      >
        Home
      </a>
    </li>
    <li>
      <a
        className="text-white hover:text-yellow-200 transition duration-300 ease-in-out font-medium"
        href="#"
      >
        About
      </a>
    </li>
    <li>
      <a
        className="text-white hover:text-yellow-200 transition duration-300 ease-in-out font-medium"
        href="#"
      >
        Contact
      </a>
    </li>
  </ul>
</nav>

  );
};

export default Navbar;
