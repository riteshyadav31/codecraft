import { Code2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { club } from '@/lib/club'

const links = [
  { href: '#about', label: 'About' },
  { href: '#meetings', label: 'Meetings' },
  { href: '#join', label: 'Join' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="size-4" aria-hidden="true" />
          </span>
          {club.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <a href="#join" className={buttonVariants({ className: 'ml-2 h-9 px-4' })}>
            Join the club
          </a>
        </nav>
      </div>
    </header>
  )
}
