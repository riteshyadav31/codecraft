import { Mail, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { club } from '@/lib/club'

export function JoinSection() {
  return (
    <section id="join" className="mx-auto max-w-6xl scroll-mt-16 px-4 pb-20 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-sm text-primary-foreground/80">03 / how to join</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Ready to start coding with us?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Email us to learn how to join, or simply visit the college coding club in person — we&apos;d love
              to meet you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href={`mailto:${club.email}`}
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'h-11 bg-background px-5 text-base text-primary hover:bg-background/90',
              })}
            >
              <Mail data-icon="inline-start" aria-hidden="true" />
              {club.email}
            </a>
            <a
              href="#meetings"
              className={buttonVariants({
                size: 'lg',
                className:
                  'h-11 px-5 ring-1 ring-primary-foreground/50 ring-inset text-base hover:bg-primary-foreground/10 [a]:hover:bg-primary-foreground/10',
              })}
            >
              <Users data-icon="inline-start" aria-hidden="true" />
              Visit the club
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
