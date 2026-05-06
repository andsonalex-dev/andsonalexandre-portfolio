'use client'

import { useEffect, useRef } from 'react'
import Nav from './Nav'

type BootstrapCollapseModule = {
  Collapse: {
    getOrCreateInstance: (element: HTMLElement) => {
      hide: () => void
    }
  }
}

export default function Header() {
  const bootstrapRef = useRef<BootstrapCollapseModule | null>(null)

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrapModule) => {
      bootstrapRef.current = bootstrapModule as BootstrapCollapseModule
    })
  }, [])

  const handleMobileNavClick = () => {
    if (typeof window === 'undefined') {
      return
    }

    if (window.innerWidth >= 768) {
      return
    }

    const collapseElement = document.getElementById('portfolioNavbar')

    if (!collapseElement) {
      return
    }

    const bootstrapModule = bootstrapRef.current

    if (!bootstrapModule) {
      return
    }

    const collapse = bootstrapModule.Collapse.getOrCreateInstance(collapseElement)
    collapse.hide()
  }

  return (
    <header className="portfolio-header fixed-top">
      <nav className="navbar navbar-expand-md py-3 py-lg-4 bg-dark bg-opacity-75">
        <div className="container">
          <h1 className="portfolio-logo mb-0">Andson Alexandre</h1>

          <button
            type="button"
            className="navbar-toggler btn btn-outline-light"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="text-white">☰</span>
          </button>

          <div id="portfolioNavbar" className="collapse navbar-collapse justify-content-end">
            <div className="pt-3 pt-md-0">
              <Nav
                className="flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-3 gap-lg-4"
                linkClassName="fs-6"
                onItemClick={handleMobileNavClick}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}