export default function Experience() {
  const experiences = [
    {
      title: "Crew Coach",
      company: "McDonald's",
      period: "2023 - Present",
      responsibilities: [
        "Delivered high-quality customer service in a fast-paced environment",
        "Developed teamwork and communication skills while working collaboratively with diverse teams",
        "Managed transaction data, orders, and stock updates with accuracy and efficiency",
      ],
    },
    {
      title: "Crew Member",
      company: "Frangro",
      period: "2025 - Present",
      responsibilities: [
        "Supported store operations by managing orders, preparing products, and updating stock records",
        "Built strong customer relations and problem-solving skills",
      ],
    },
    {
      title: "Dairy Stocker",
      company: "Coles",
      period: "2024 - 2025",
      responsibilities: [
        "Handled inventory data, ensuring accuracy in stock levels and timely replenishment",
        "Gained attention to detail through quality control of perishable goods",
      ],
    },
    {
      title: "Crew Trainer",
      company: "Hungry Jack's",
      period: "2023 - 2025",
      responsibilities: [
        "Assisted in daily operations including order processing, inventory checks, and store upkeep",
        "Strengthened multitasking and time management abilities during peak hours",
      ],
    },
  ]

  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Work Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 -translate-x-1/2">
              <div className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-150 group-hover:border-secondary">
                <div className="h-1.5 w-1.5 rounded-full bg-primary transition-colors duration-300 group-hover:bg-secondary" />
              </div>
            </div>

            <div className="transition-all duration-300 group-hover:translate-x-2">
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <span className="text-primary">·</span>
                <span className="font-medium text-primary">{exp.company}</span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{exp.period}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
