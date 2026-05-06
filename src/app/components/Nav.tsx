type NavProps = {
    className?: string
    linkClassName?: string
    onItemClick?: () => void
}

const defaultNavClass = 'navbar-nav gap-2 gap-md-3 gap-lg-4'
const defaultLinkClass = 'nav-link p-0 text-light fw-semibold'

export default function Nav({ className, linkClassName, onItemClick }: NavProps) {
    const navClasses = className ? `${defaultNavClass} ${className}` : defaultNavClass
    const linkClasses = linkClassName ? `${defaultLinkClass} ${linkClassName}` : defaultLinkClass

    return (
        <nav className={navClasses}>
            <a className={linkClasses} href="#about" onClick={onItemClick}>Sobre</a>
            <a className={linkClasses} href="#skills" onClick={onItemClick}>Skills</a>
            <a className={linkClasses} href="#projects" onClick={onItemClick}>Projetos</a>
            <a className={linkClasses} href="#contact" onClick={onItemClick}>Contato</a>
        </nav>
    )
}