import Section from '../components/Section'
import skills from '../data/skills.json'

const skillIcons: Record<string, string> = {
  PHP: '🐘',
  JavaScript: '🟨',
  HTML: '🌐',
  CSS: '🎨',
  React: '⚛️',
  'Next.js': '▲',
  Laravel: '🅻',
  MySQL: '🛢️',
  Python: '🐍',
}

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades">
      <div className="row g-3 g-lg-4">
        {skills.map((s: string) => (
          <div key={s} className="col-12 col-sm-6 col-lg-4">
            <div className="skill-card h-100">
              <span className="skill-icon">{skillIcons[s] ?? '💡'}</span>
              <p className="skill-title mb-0">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
