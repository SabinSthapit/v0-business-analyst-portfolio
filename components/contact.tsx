"use client"

import type React from "react"

import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission (in production, this would send to an API)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Get In Touch</h2>

      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted-foreground">
          I'm currently open to Business Analyst opportunities and internships. Whether you have a question or just want
          to connect, feel free to reach out!
        </p>

        {/* Contact Info Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:Sthapitsabin9@gmail.com"
            className="group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                Sthapitsabin9@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:0403776211"
            className="group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                0403776211
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-lg border border-border bg-card/50 p-6 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Location</p>
              <p className="text-base font-semibold text-foreground">Grantham Farm, Sydney</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sabin-sthapit-423919283"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
              <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                Connect with me
              </p>
            </div>
            <Send className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border border-border bg-card/50 p-8 backdrop-blur">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Send me a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={`bg-background/50 ${errors.subject ? "border-destructive" : ""}`}
              />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your inquiry..."
                rows={5}
                className={`bg-background/50 resize-none ${errors.message ? "border-destructive" : ""}`}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            {submitStatus === "success" && (
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm text-primary">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">© 2025 Sabin Sthapit. Built with Next.js and Tailwind CSS.</p>
      </div>
    </section>
  )
}
