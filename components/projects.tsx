import { Database, ShoppingCart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Grocery Web Scrum Project",
      description: "Managed and executed a Scrum-based web project simulating an online grocery store using Jira",
      details: [
        "Coordinated sprint planning, backlog refinement, and progress tracking",
        "Applied Agile methodologies to deliver iterative improvements",
      ],
      icon: ShoppingCart,
      tags: ["Jira", "Agile", "Scrum", "Project Management"],
      type: "Academic",
    },
    {
      title: "KRNU Recruitment Company App",
      description: "Built a recruitment management application using Salesforce",
      details: [
        "Designed workflows to automate applicant tracking and client management",
        "Implemented CRM best practices for data organization",
      ],
      icon: Database,
      tags: ["Salesforce", "CRM", "Workflow Automation"],
      type: "Academic",
    },
    {
      title: "Market Trends Analysis Project",
      description: "Cleaned and visualized market data to identify patterns",
      details: [
        "Performed data cleaning and transformation using Excel",
        "Presented actionable recommendations to improve decision-making",
      ],
      icon: TrendingUp,
      tags: ["Excel", "Data Analysis", "Visualization", "Business Intelligence"],
      type: "Academic",
    },
  ]

  const projectGradients = [
    "from-[oklch(0.65_0.18_200)] to-[oklch(0.75_0.15_300)]",
    "from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_140)]",
    "from-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.22_350)]",
  ]

  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <Card
              key={index}
              className="group cursor-pointer border-2 border-border bg-card/50 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${projectGradients[index]} transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle
                        className={`text-lg text-foreground group-hover:bg-gradient-to-r ${projectGradients[index]} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                      >
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-sm">{project.description}</CardDescription>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 rounded-full bg-gradient-to-r ${projectGradients[index]} px-3 py-1 text-xs font-medium text-white shadow-lg`}
                  >
                    {project.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="mb-4 space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span
                        className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-r ${projectGradients[index]}`}
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`rounded-full bg-gradient-to-r ${projectGradients[index]} px-3 py-1 text-xs font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
