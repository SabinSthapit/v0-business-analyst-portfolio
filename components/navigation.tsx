"use client"

import { useEffect, useState } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`group flex items-center gap-4 transition-all duration-300 ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-16 bg-primary"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                }`}
              />
              <span className="text-xs font-bold tracking-widest">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
