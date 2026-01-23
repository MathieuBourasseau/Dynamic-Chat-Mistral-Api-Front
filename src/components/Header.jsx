import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="p-4">

        {/* MOBILE NAV */}
        <nav 
            className="flex items-center justify-between md:hidden">
            <GiHamburgerMenu />
            <h1 className="font-bold">Projet LLM</h1>
            <span>user data</span>
        </nav>
    </header>
  )
}
