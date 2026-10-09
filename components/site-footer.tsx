import { club } from '@/lib/club'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          &copy; {new Date().getFullYear()} {club.name}. Built by students, for students.
        </p>
        <a href={`mailto:${club.email}`} className="font-mono hover:text-primary">
          {club.email}
        </a>
      </div>
    </footer>
  )
}
