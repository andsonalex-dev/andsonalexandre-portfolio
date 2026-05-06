import Section from '../components/Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contato">
      <div className="row g-3 g-lg-4">
        <div className="col-12 col-md-4">
        <a
          href="mailto:andson.alex@hotmail.com"
          className="contact-card d-block text-decoration-none h-100"
        >
          <p className="contact-label mb-2">Email</p>
          <p className="contact-value mb-0">andson.alex@hotmail.com</p>
        </a>
        </div>

        <div className="col-12 col-md-4">
        <a
          href="https://www.linkedin.com/in/andsonalexandre/"
          target="_blank"
          rel="noreferrer"
          className="contact-card d-block text-decoration-none h-100"
        >
          <p className="contact-label mb-2">LinkedIn</p>
          <p className="contact-value mb-0">andsonalexandre</p>
        </a>
        </div>

        <div className="col-12 col-md-4">
        <a
          href="https://github.com/andsonalex-dev"
          target="_blank"
          rel="noreferrer"
          className="contact-card d-block text-decoration-none h-100"
        >
          <p className="contact-label mb-2">GitHub</p>
          <p className="contact-value mb-0">andsonalex-dev</p>
        </a>
        </div>
      </div>
    </Section>
  )
}