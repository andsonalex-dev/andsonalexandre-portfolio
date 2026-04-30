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
    <section className="hero relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] via-[#020617] to-[#03120f]">

      <div className="text-center">
        <div className="container">
          <h2>Andson Alexandre</h2>
          <p className="subtitle">FullStack Developer</p>
          <p className="tech">{techs[index]}</p>
        </div>
      </div>

    </section>
  )
}

