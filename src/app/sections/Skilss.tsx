import Section from '../components/Section'
import skills from '../data/skills.json'

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades">
      <div className="skills">
        {skills.map((s: string) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </Section>
  )
}
