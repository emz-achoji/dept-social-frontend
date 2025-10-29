import React from "react";

export default function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Service Managers
        </h1>
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-sm">
          Toggle Theme
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-center py-3 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Department Social
      </footer>
    </div>
  );
}
