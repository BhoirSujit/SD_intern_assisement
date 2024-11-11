import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex border-b bg-gray-100">
        <div className="logo px-8 py-4 flex items-center space-x-3">
          <img src="./vite.svg" alt="logo" className="h-8 w-8" />
          <h1 className="text-xl font-semibold">My Company</h1>
        </div>
      </header>

      <div className="flex flex-grow">
        <aside className="h-full w-48 border-r px-7 py-5 bg-gray-50">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-colors ${
                    isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-800 hover:bg-gray-200 hover:text-blue-600"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-colors ${
                    isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-800 hover:bg-gray-200 hover:text-blue-600"
                  }`
                }
              >
                User Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manage"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-colors ${
                    isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-800 hover:bg-gray-200 hover:text-blue-600"
                  }`
                }
              >
                User Management
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="flex-grow p-4">{children}</main>
      </div>

      <footer className="text-center py-4 border-t bg-gray-100">
        <p>
          Made with love by <a href="https://github.com/bhoirsujit" className="text-blue-600 hover:underline">Bhoir Sujit</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
