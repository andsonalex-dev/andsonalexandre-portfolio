'use client'

import { useState } from 'react'
import Section from '../components/Section'
import projects from '../data/projects.json'

type Project = {
  id: number
  title: string
  description: string
  status: string
  image_cover: string
  link: string
  technologies: string[]
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const toggleProject = (id: number) => {
    setActiveProject((prev) => (prev === id ? null : id))
  }

  return (
    <Section id="projects" title="Projetos" tone="muted">
      <div className="row g-4">
        {(projects as Project[]).map((p: Project) => (
          <div key={p.id} className="col-12 col-lg-6">
            <div className="project-card h-100">
              <button
                type="button"
                onClick={() => toggleProject(p.id)}
                className="project-cover-btn"
              >
                <div className="project-cover-gradient" />
                <div className="project-cover-content">
                  <h3 className="project-title mb-1">{p.title}</h3>
                  <p className="project-toggle mb-0">Clique para {activeProject === p.id ? 'ocultar' : 'ver'} detalhes</p>
                </div>
              </button>

              <div className={activeProject === p.id ? 'project-details open' : 'project-details'}>
                <p className="project-description mb-0">{p.description}</p>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex align-items-center flex-wrap gap-3 mt-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-theme"
                  >
                    Ver projeto
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