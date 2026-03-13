"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GitBranch, Trophy } from "lucide-react"

const stats = [
  { icon: Briefcase, value: "3+", label: "Internships" },
  { icon: GitBranch, value: "10+", label: "Repositories" },
  { icon: Trophy, value: "225+", label: "Problems Solved" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-primary font-bold text-primary">Get To Know Me</h3>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6 mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Junior Software Developer with a strong foundation in{" "}
              <span className="text-foreground font-medium">C#</span>,{" "}
              <span className="text-foreground font-medium">.NET</span>, and web development technologies.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-center">
              Experienced in building Websites, Mobile Apps, solving algorithmic problems, and 
              collaborating in team environments. Passionate about backend systems, scalable APIs, 
              and modern software architecture.
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-xl border-border/50 overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
