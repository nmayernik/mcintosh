import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";


export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-black">
      <div className="flex flex-wrap items-center justify-between max-w-4xl px-4 py-3 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="ml-3 text-lg font-bold text-white md:text-xl">
              Nick Mayernik
            </a>
          </Link>
        </div>

        <button
          className="flex items-center px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "About", route: "/about" },
            { title: "Projects", route: "/projects" },
            { title: "Writing", route: "/writing" },

          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-8" key={title}>
              <Link href={route}>
                <a className="block text-lg text-center text-white">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
