import React from 'react';

const HeaderSection = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MORENT
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
          <span className="text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent outline-none px-4 w-full"
          />
          <span className="text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M9.1 18h5.8a9 9 0 10-11.4 0h5.8z"
              />
            </svg>
          </span>
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.318c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8zM12 14v4M12 7v1"
              />
            </svg>
          </button>
          <button className="relative text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 8a6 6 0 00-12 0c0 1.39.5 2.66 1.35 3.64L9 16v2h6v-2l1.65-2.36A6.001 6.001 0 0018 8z"
              />
            </svg>
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full" />
          </button>
          <button className="text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5a2 2 0 114 0v2h-4V5zM7 8v2h10V8m-6 2v10m-2-2v-4a2 2 0 012-2h6a2 2 0 012 2v4m0 2h-8"
              />
            </svg>
          </button>
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <button className="md:hidden flex items-center text-gray-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default HeaderSection;
