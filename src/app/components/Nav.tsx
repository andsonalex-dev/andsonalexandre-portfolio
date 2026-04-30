type NavProps = {
    className?: string
    linkClassName?: string
    onItemClick?: () => void
}

const defaultNavClass = 'flex items-center gap-6 text-sm font-medium md:text-base'
const defaultLinkClass = 'text-zinc-200 transition-colors hover:text-emerald-400'

export default function Nav({ className, linkClassName, onItemClick }: NavProps) {
    const navClasses = className ? `${defaultNavClass} ${className}` : defaultNavClass
    const linkClasses = linkClassName ? `${defaultLinkClass} ${linkClassName}` : defaultLinkClass

    return (
        <nav className={navClasses}>
            <a className={linkClasses} href="#projects" onClick={onItemClick}>Projetos</a>
            <a className={linkClasses} href="#about" onClick={onItemClick}>Sobre</a>
            <a className={linkClasses} href="#skills" onClick={onItemClick}>Skills</a>
            <a className={linkClasses} href="#contact" onClick={onItemClick}>Contato</a>
        </nav>
    )
}