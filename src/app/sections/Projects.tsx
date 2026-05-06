import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/Section'
import projects from '../data/projects.json'

type Project = {
  id: number
  title: string
  description: string
  status: string
  image_cover: string
  full_image: string | null
  link: string
  technologies: string[]
}

export default function Projects() {
  return (
    <Section id="projects" title="Projetos" tone="muted">
      <div className="row g-4">
        {(projects as Project[]).map((p: Project) => (
          <div key={p.id} className="col-12 col-lg-6">
            <div className="project-card h-100">
              <Link href={`/projetos/${p.id}`} className="project-cover-link">
                <Image
                  src={p.image_cover}
                  alt={`Thumb do projeto ${p.title}`}
                  fill
                  className="project-cover-image"
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
                <div className="project-cover-gradient" />
                <div className="project-cover-content">
                  <h3 className="project-title mb-1">{p.title}</h3>
                  <p className="project-toggle mb-0">Clique para ver detalhes</p>
                </div>
              </Link>

              <div className="project-details open">
                <p className="project-description mb-0">{p.description}</p>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex align-items-center flex-wrap gap-3 mt-4">
                  <Link href={`/projetos/${p.id}`} className="btn btn-theme">
                    Ver detalhes
                  </Link>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-theme"
                  >
                    Acessar site
                  </a>
                  <span className="project-status">Status: {p.status}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}