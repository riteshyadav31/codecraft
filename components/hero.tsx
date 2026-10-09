import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { club } from '@/lib/club'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-6">
        <p className="inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          {'// student coding club'}
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Learn to code. <span className="text-primary">Build what matters.</span>
        </h1>
        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          {club.name} is where students learn programming, build real-world projects, and practice
          problem-solving together — no matter where you&apos;re starting from.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#join" className={buttonVariants({ size: 'lg', className: 'h-11 px-5 text-base' })}>
            Join the club
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </a>
          <a
            href="#meetings"
            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'h-11 bg-card px-5 text-base ring-1 ring-foreground/15 ring-inset' })}
          >
            <CalendarDays data-icon="inline-start" aria-hidden="true" />
            {club.meetingDay}, {club.meetingTime}
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl border shadow-xl shadow-primary/10">
          <Image
            src="/images/club-lab.png"
            alt="Students collaborating on code in the college computer lab"
            width={1024}
            height={768}
            priority
            className="aspect-[4/3] h-auto w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-5 left-4 rounded-xl border bg-card px-4 py-3 font-mono text-sm shadow-lg md:-left-6">
          <span className="text-muted-foreground">$ </span>
          <span className="text-primary">git</span> commit -m <span className="text-primary">{'"hello, codecraft"'}</span>
        </div>
      </div>
    </section>
  )
}
