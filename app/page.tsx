import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">
          {/* Left sidebar - sticky on desktop */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </div>

          {/* Right content - scrollable */}
          <div className="lg:w-1/2 lg:py-24">
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Achievements />
            <Testimonials />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}
