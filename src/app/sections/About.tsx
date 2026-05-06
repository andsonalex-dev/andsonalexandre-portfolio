import Image from 'next/image'
import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" title="Quem sou eu?" tone="muted">
      <div className="about-card row g-4 g-lg-5 align-items-center">
        <div className="col-12 col-lg-4">
          <div className="about-photo-wrap">
          <Image
            src="/perfil/andson-profile.jpg"
            alt="Foto de Andson Alexandre"
            width={320}
            height={340}
            className="about-photo"
            priority
          />
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <p className="about-text mb-3">
            Sou Desenvolvedor Full Stack apaixonado por criar soluções web eficientes, utilizando PHP, Laravel e React como principais ferramentas.
          </p>
          <p className="about-text mb-0">
            Gosto de transformar ideias em produtos bem estruturados, com código limpo, boa performance e foco total na experiência do usuário. Trabalho bem em equipe, me comunico de forma clara e estou sempre em busca de evolução técnica e impacto real no que construo.
          </p>
        </div>
      </div>
    </Section>
  )
}
