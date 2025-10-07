"use client"

import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Sabin consistently demonstrates exceptional analytical skills and attention to detail. His ability to translate complex data into actionable insights is impressive.",
      name: "Academic Supervisor",
      position: "Victoria University Sydney",
      image: "AS",
    },
    {
      quote:
        "A dedicated team player who brings strong problem-solving abilities and excellent communication skills to every project. Highly recommended.",
      name: "Project Team Lead",
      position: "Academic Project Coordinator",
      image: "PT",
    },
    {
      quote:
        "Sabin's proficiency with Jira, Agile methodologies, and data analysis tools makes him a valuable asset. His work ethic and commitment to excellence stand out.",
      name: "Course Instructor",
      position: "Business Information Systems",
      image: "CI",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
        Testimonials & Recommendations
      </h2>

      <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 p-8 backdrop-blur">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === activeIndex ? "opacity-100" : "absolute inset-0 opacity-0"
              }`}
            >
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
