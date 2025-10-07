"use client"

import { BarChart3, GitBranch, MessageSquare, Users, Workflow, Cloud } from "lucide-react"
import { useState } from "react"

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      type: "technical",
      skills: [
        { name: "Microsoft Excel", level: 85, description: "Advanced formulas, pivot tables, data visualization" },
        { name: "Power BI", level: 75, description: "Dashboard creation, DAX, data modeling" },
        { name: "Google Data Studio", level: 70, description: "Report building, data connectors" },
      ],
    },
    {
      title: "Project Management",
      icon: GitBranch,
      type: "analytical",
      skills: [
        { name: "Jira", level: 80, description: "Sprint planning, backlog management, workflow automation" },
        { name: "Agile/Scrum", level: 85, description: "Scrum ceremonies, user stories, sprint execution" },
        { name: "Sprint Planning", level: 75, description: "Capacity planning, story estimation" },
      ],
    },
    {
      title: "CRM & Cloud Platforms",
      icon: Cloud,
      type: "technical",
      skills: [
        { name: "Salesforce", level: 70, description: "CRM workflows, automation, client management" },
        { name: "Workflow Automation", level: 75, description: "Process optimization, automation design" },
      ],
    },
    {
      title: "Business Analysis",
      icon: Workflow,
      type: "analytical",
      skills: [
        { name: "Process Analysis", level: 80, description: "Process mapping, gap analysis, optimization" },
        { name: "Requirements Gathering", level: 85, description: "Stakeholder interviews, documentation" },
        { name: "Data Cleaning", level: 75, description: "Data quality, transformation, validation" },
      ],
    },
    {
      title: "Communication",
      icon: MessageSquare,
      type: "soft",
      skills: [
        { name: "Stakeholder Management", level: 80, description: "Relationship building, expectation management" },
        { name: "Documentation", level: 85, description: "Technical writing, process documentation" },
        { name: "Presentation", level: 75, description: "Data storytelling, executive presentations" },
      ],
    },
    {
      title: "Leadership",
      icon: Users,
      type: "soft",
      skills: [
        { name: "Team Leadership", level: 80, description: "Team coordination, mentoring, motivation" },
        { name: "Training", level: 75, description: "Knowledge transfer, onboarding, coaching" },
        { name: "Collaboration", level: 85, description: "Cross-functional teamwork, conflict resolution" },
      ],
    },
  ]

  const filteredCategories =
    activeFilter === "all" ? skillCategories : skillCategories.filter((category) => category.type === activeFilter)

  return (
    <section id="skills" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Skills</h2>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveFilter("all")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-gradient-to-r from-[oklch(0.65_0.18_200)] to-[oklch(0.75_0.15_300)] text-white shadow-lg shadow-[oklch(0.65_0.18_200)]/30"
              : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
          }`}
        >
          All Skills
        </button>
        <button
          onClick={() => setActiveFilter("technical")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeFilter === "technical"
              ? "bg-gradient-to-r from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_140)] text-white shadow-lg shadow-[oklch(0.70_0.20_40)]/30"
              : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
          }`}
        >
          Technical
        </button>
        <button
          onClick={() => setActiveFilter("analytical")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeFilter === "analytical"
              ? "bg-gradient-to-r from-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.22_350)] text-white shadow-lg shadow-[oklch(0.75_0.15_300)]/30"
              : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
          }`}
        >
          Analytical
        </button>
        <button
          onClick={() => setActiveFilter("soft")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeFilter === "soft"
              ? "bg-gradient-to-r from-[oklch(0.75_0.15_140)] to-[oklch(0.65_0.18_200)] text-white shadow-lg shadow-[oklch(0.75_0.15_140)]/30"
              : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
          }`}
        >
          Soft Skills
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filteredCategories.map((category, index) => {
          const Icon = category.icon
          const gradientColors = {
            technical: "from-[oklch(0.65_0.18_200)] to-[oklch(0.75_0.15_300)]",
            analytical: "from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_140)]",
            soft: "from-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.22_350)]",
          }
          const gradient = gradientColors[category.type as keyof typeof gradientColors]

          return (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card/50 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="mt-1 max-h-0 overflow-hidden text-xs text-muted-foreground transition-all duration-300 group-hover/skill:max-h-20">
                        {skill.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-lg border-2 rainbow-border bg-gradient-to-br from-card/80 to-card/40 p-6 backdrop-blur shadow-xl">
        <h3 className="mb-4 text-base font-semibold bg-gradient-to-r from-[oklch(0.65_0.18_200)] via-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.20_40)] bg-clip-text text-transparent">
          Business Analyst Toolkit
        </h3>
        <div className="flex flex-wrap gap-3">
          {["Jira", "Confluence", "Agile", "Scrum", "Salesforce", "Excel", "Power BI", "SQL"].map((tool, idx) => {
            const toolGradients = [
              "from-[oklch(0.65_0.18_200)] to-[oklch(0.75_0.15_300)]",
              "from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_140)]",
              "from-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.22_350)]",
              "from-[oklch(0.75_0.15_140)] to-[oklch(0.65_0.18_200)]",
              "from-[oklch(0.70_0.22_350)] to-[oklch(0.70_0.20_40)]",
              "from-[oklch(0.65_0.18_200)] to-[oklch(0.70_0.20_40)]",
              "from-[oklch(0.75_0.15_300)] to-[oklch(0.75_0.15_140)]",
              "from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_300)]",
            ]
            return (
              <span
                key={tool}
                className={`rounded-lg bg-gradient-to-r ${toolGradients[idx]} px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 cursor-pointer`}
              >
                {tool}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
