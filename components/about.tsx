"use client"

import { TrendingUp, Award, Target } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ experience: 0, projects: 0, awards: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const increment = {
      experience: 3 / steps,
      projects: 10 / steps,
      awards: 5 / steps,
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        experience: Math.min(Math.floor(increment.experience * step), 3),
        projects: Math.min(Math.floor(increment.projects * step), 10),
        awards: Math.min(Math.floor(increment.awards * step), 5),
      })

      if (step >= steps) clearInterval(timer)
    }, duration / steps)
  }

  return (
    <section id="about" ref={sectionRef} className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground lg:sr-only">About</h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Text content */}
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Motivated and results-driven aspiring{" "}
            <span className="font-semibold text-foreground">Business Analyst</span> with a strong academic record and
            proven ability to excel in both technical and business analysis contexts. Currently pursuing a{" "}
            <span className="font-semibold text-foreground">Bachelor of Business (Information Systems)</span> at
            Victoria University Sydney, graduating April 26, 2026.
          </p>
          <p>
            Recognised as <span className="font-semibold text-primary">First Year Course Champion (2024)</span> for
            achieving the highest weighted average mark across first-year studies, and recipient of multiple academic
            awards for excellence.
          </p>
          <p>
            Passionate about leveraging data to deliver actionable insights, streamline processes, and support strategic
            decision-making. Experienced in{" "}
            <span className="font-semibold text-foreground">Agile methodologies, Jira, Salesforce,</span> and{" "}
            <span className="font-semibold text-foreground">data analysis tools</span> including Excel, Power BI, and
            Google Data Studio.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div
            className={`rounded-lg border border-primary/30 bg-card/50 p-6 backdrop-blur transition-all duration-500 ${
              isVisible ? "animate-count" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{counts.experience}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-lg border border-secondary/30 bg-card/50 p-6 backdrop-blur transition-all duration-500 ${
              isVisible ? "animate-count" : "opacity-0"
            } [animation-delay:200ms]`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">{counts.projects}+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-lg border border-accent/30 bg-card/50 p-6 backdrop-blur transition-all duration-500 ${
              isVisible ? "animate-count" : "opacity-0"
            } [animation-delay:400ms]`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">{counts.awards}+</div>
                <div className="text-sm text-muted-foreground">Awards & Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
