"use client"

import { Linkedin, Mail, Phone, MapPin, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Sabin_Sthapit_CV.pdf"
    link.download = "Sabin_Sthapit_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative space-y-8">
      <div className="absolute inset-0 -z-10 gradient-bg opacity-50 blur-3xl" />

      <div className={`flex justify-center lg:justify-start ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="relative">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[oklch(0.65_0.18_200)] via-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.20_40)] p-1 glow-effect">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-4xl font-bold bg-gradient-to-br from-[oklch(0.65_0.18_200)] to-[oklch(0.75_0.15_300)] bg-clip-text text-transparent">
              SS
            </div>
          </div>
        </div>
      </div>

      <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"} [animation-delay:200ms]`}>
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground lg:text-6xl">Sabin Sthapit</h1>
          <h2 className="mt-3 text-xl font-semibold bg-gradient-to-r from-[oklch(0.65_0.18_200)] via-[oklch(0.75_0.15_300)] to-[oklch(0.70_0.20_40)] bg-clip-text text-transparent lg:text-2xl">
            Business Information Systems & Business Analyst
          </h2>
          <p className="mt-4 text-lg font-medium bg-gradient-to-r from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_300)] bg-clip-text text-transparent">
            Transforming data into insights and insights into strategies
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            Aspiring Business Analyst passionate about leveraging data to deliver actionable insights and support
            strategic decision-making
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-[oklch(0.65_0.18_200)] to-[oklch(0.75_0.15_300)] text-primary-foreground hover:shadow-lg hover:shadow-[oklch(0.65_0.18_200)]/50 transition-all duration-300"
          >
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-[oklch(0.70_0.20_40)] to-[oklch(0.75_0.15_140)] text-white hover:shadow-lg hover:shadow-[oklch(0.70_0.20_40)]/50 transition-all duration-300"
          >
            View Portfolio
          </Button>
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="border-[oklch(0.75_0.15_300)] text-[oklch(0.75_0.15_300)] hover:bg-[oklch(0.75_0.15_300)]/10 hover:shadow-lg hover:shadow-[oklch(0.75_0.15_300)]/30 transition-all duration-300 bg-transparent"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        {/* Contact info */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:Sthapitsabin9@gmail.com" className="hover:text-primary transition-colors">
              Sthapitsabin9@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary" />
            <span>0403776211</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-primary" />
            <span>9 Felicity Crescent, Grantham Farm</span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/sabin-sthapit-423919283"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:Sthapitsabin9@gmail.com"
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Mobile navigation hint */}
      <div className="lg:hidden">
        <p className="text-xs text-muted-foreground">Scroll to explore ↓</p>
      </div>
    </div>
  )
}
