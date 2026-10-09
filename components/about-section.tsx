import { ArrowRight, BookOpen, Hammer, Puzzle, Trophy, HeartHandshake } from 'lucide-react'

const activities = [
  {
    icon: BookOpen,
    title: 'Learn programming',
    description: 'Pick up languages, tools, and fundamentals through hands-on sessions led by fellow students.',
  },
  {
    icon: Hammer,
    title: 'Build real projects',
    description: 'Team up to ship real-world apps and tools you can proudly add to your portfolio.',
  },
  {
    icon: Puzzle,
    title: 'Solve problems together',
    description: 'Work through algorithms and tricky bugs side by side — two minds debug faster than one.',
  },
  {
    icon: Trophy,
    title: 'Coding challenges',
    description: 'Test your skills in friendly club challenges and competitions throughout the semester.',
  },
  {
    icon: HeartHandshake,
    title: 'Help for beginners',
    description: 'New to code? Experienced members are here to guide you as you build your technical skills.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 border-y bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">01 / what we do</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            A place to grow as a developer
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We&apos;re a community of students who love to code. Here&apos;s how we spend our time together.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-xl border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
          <li className="flex flex-col justify-between gap-6 rounded-xl bg-foreground p-6 text-background">
            <p className="whitespace-pre font-mono text-sm leading-relaxed text-background/70">
              {'while (curious) {'}
              <br />
              {'  keepBuilding();'}
              <br />
              {'}'}
            </p>
            <a href="#join" className="group inline-flex items-center gap-2 font-semibold">
              Become a member
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
