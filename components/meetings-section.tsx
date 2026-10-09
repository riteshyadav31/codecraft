import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { club } from '@/lib/club'

const details = [
  { icon: CalendarDays, label: 'When', value: club.meetingDay },
  { icon: Clock, label: 'Time', value: club.meetingTime },
  { icon: MapPin, label: 'Where', value: club.meetingPlace },
]

export function MeetingsSection() {
  return (
    <section id="meetings" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 md:px-6">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="font-mono text-sm text-primary">02 / when &amp; where</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            See you on Saturday
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Drop by any week — bring a laptop if you have one, or use a machine in the lab. Curiosity is the
            only requirement.
          </p>
        </div>

        <dl className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-3 bg-card p-6">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
              <dd className="text-lg font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
