import { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
  tone?: 'base' | 'muted'
}

export default function Section({ id, title, children, tone = 'base' }: SectionProps) {
  const toneClass = tone === 'muted' ? 'portfolio-section-muted' : ''

  return (
    <section id={id} className={`portfolio-section py-5 py-lg-6 ${toneClass}`.trim()}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="background-outline">{title}</div>
        {children}
      </div>
    </section>
  )
}