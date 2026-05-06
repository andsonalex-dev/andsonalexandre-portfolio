import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import projects from '../../data/projects.json'

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

type ProjectPageProps = {
  params: {
    id: string
  }
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const projectId = Number(params.id)

  if (Number.isNaN(projectId)) {
    notFound()
  }

  const project = (projects as Project[]).find((item) => item.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <main className="project-page py-5">
      <div className="container">
        <Link href="/#projects" className="project-back-link">
          Voltar para projetos
        </Link>

        <article className="project-page-card mt-3">
          <div className="project-page-thumb-wrap">
            <Image
              src={project.image_cover}
              alt={`Imagem de capa do projeto ${project.title}`}
              fill
              className="project-page-thumb"
              priority
              sizes="100vw"
            />
          </div>

          <div className="project-page-content p-4 p-lg-5">
            <h1 className="project-page-title mb-3">{project.title}</h1>
            <p className="project-page-description mb-4">{project.description}</p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-theme">
                Acessar site
              </a>
              <span className="project-status">Status: {project.status}</span>
            </div>

            <section className="project-page-showcase">
              <h2 className="project-page-subtitle mb-2">Preview completo</h2>

              {project.full_image ? (
                <div className="project-page-full-image-wrap">
                  <Image
                    src={project.full_image}
                    alt={`Preview completo do projeto ${project.title}`}
                    width={1920}
                    height={1080}
                    className="project-page-full-image"
                  />
                </div>
              ) : (
                <p className="project-page-note mb-0">
                  Espaco reservado para a imagem completa do projeto. Basta preencher o campo
                  full_image no JSON para aparecer automaticamente aqui.
                </p>
              )}
            </section>
          </div>
        </article>
      </div>
    </main>
  )
}
