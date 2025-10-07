import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="mb-24 scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Education</h2>

      <div className="space-y-6">
        {/* University */}
        <Card className="group border-border bg-card/50 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">Bachelor of Business (Information Systems)</h3>
                <p className="mt-1 text-sm font-medium text-primary">Victoria University Sydney</p>
                <p className="mt-1 text-sm text-muted-foreground">February 2023 - April 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* High School */}
        <Card className="group border-border bg-card/50 backdrop-blur transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">High School - Grade 12</h3>
                <p className="mt-1 text-sm font-medium text-primary">Modern Indian School</p>
                <p className="mt-1 text-sm text-muted-foreground">Graduated: March 2022</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Awards */}
        <div className="mt-8">
          <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
            <Award className="h-5 w-5 text-secondary" />
            Awards & Achievements
          </h3>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card/30 p-4 backdrop-blur">
              <p className="font-semibold text-foreground">First Year Course Champion</p>
              <p className="text-sm text-muted-foreground">Bachelor of Business (Information Systems), 2024</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Highest weighted average mark across first-year studies
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card/30 p-4 backdrop-blur">
              <p className="font-semibold text-foreground">VU Sydney Block Star Award</p>
              <p className="text-sm text-muted-foreground">Marketing Theory & Practice, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
