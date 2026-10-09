import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { MeetingsSection } from '@/components/meetings-section'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <MeetingsSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  )
}
