'use client'
import { useEffect, useState } from 'react'

const techs = ['Responsabilidade', 'Agilidade na entrega', 'Comprometimento', 'Honestidade', 'Trabalho em equipe']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techs.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-section d-flex align-items-center overflow-hidden">
      <div className="hero-overlay" />

      <div className="container text-center position-relative">
        <h2 className="hero-title">Andson Alexandre</h2>
        <p className="hero-subtitle mb-0">FullStack Developer</p>
        <p className="hero-tech mb-0">{techs[index]}</p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 mt-md-5">
          <a
            href="https://www.linkedin.com/in/andsonalexandre/"
            target="_blank"
            rel="noreferrer"
            className="hero-btn hero-btn-linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/andsonalex-dev"
            target="_blank"
            rel="noreferrer"
            className="hero-btn hero-btn-github"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

