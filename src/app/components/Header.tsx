'use client'

import { useState } from 'react'
import Nav from './Nav'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0d1117]/90 backdrop-blur">
      <div className="mx-auto w-full px-25 sm:px-8 flex items-center justify-around py-5" >
        <h1 className="text-lg font-semibold tracking-wide text-white">Andson Alexandre</h1>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-200 transition-colors hover:bg-white/10 hover:text-emerald-400 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu de navegação"
        >
          <span className="text-xl leading-none">☰</span>
        </button>

        <Nav className="hidden md:flex" />
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#0d1117]/95 md:hidden">
          <div className="mx-auto w-full max-w-7xl px-6 py-4 sm:px-8">
            <Nav
              className="flex-col items-start gap-4"
              linkClassName="text-base"
              onItemClick={() => setMenuOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </header>
  )
}