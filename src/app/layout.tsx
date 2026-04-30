import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Andson Alexandre | FullStack Developer',
  description: 'Portfólio de Andson Alexandre - Desenvolvedor FullStack',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}