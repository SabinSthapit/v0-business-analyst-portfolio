import { Award, Trophy, Star, Medal } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "First Year Course Champion",
      organization: "Victoria University Sydney",
      year: "2024",
      description: "Highest weighted average mark across first-year studies",
      color: "primary",
    },
    {
      icon: Star,
      title: "VU Sydney Block Star Award",
      organization: "Victoria University Sydney",
      year: "2023",
      description: "Marketing Theory & Practice excellence",
      color: "secondary",
    },
    {
      icon: Medal,
      title: "Academic Excellence",
      organization: "Victoria University Sydney",
      year: "2023-2024",
      description: "Multiple academic awards for outstanding performance",
      color: "accent",
    },
    {
      icon: Award,
      title: "High School Graduate",
      organization: "Modern Indian School",
      year: "2022",
      description: "Grade 12 completion with distinction",
      color: "primary",
    },
  ]

  return (
    <section id="achievements" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
        Achievements & Certifications
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-card hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${achievement.color}/10 transition-all duration-300 group-hover:bg-${achievement.color}/20`}
                >
                  <Icon className={`h-6 w-6 text-${achievement.color}`} />
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {achievement.year}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{achievement.title}</h3>
              <p className="mb-2 text-sm font-medium text-primary">{achievement.organization}</p>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
