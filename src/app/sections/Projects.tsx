import Section from '../components/Section'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <Section id="projects" title="Projetos">
      <div className="grid">
        {projects.map((p: any) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}