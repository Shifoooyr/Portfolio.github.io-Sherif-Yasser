"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Junior Developer Internship",
    company: "Gammal Tech",
    period: "Jun 2023 – Present",
    responsibilities: [
      "Training in C, C++, OOP, Data Structures and Algorithms",
      "Developed small mobile apps using Flutter",
      "Applied UI/UX design concepts",
      "Collaborated with team members in internship projects",
    ],
  },
  {
    id: 2,
    title: "Problem Solving Internship",
    company: "ICPC Tanta Community",
    period: "Nov 2025 – Feb 2026",
    responsibilities: [
      "Solved weekly coding challenges",
      "Improved algorithmic thinking",
      "Collaborated with a team to optimize solutions",
      "Documented optimized problem-solving strategies",
    ],
  },
  {
    id: 3,
    title: "Full Stack.NET Developer Internship",
    company: "DEPI",
    period: "Dec 2025 – Jun 2026",
    responsibilities: [
      "Developed web applications using ASP.NET Core",
      "Worked with SQL Server databases",
      "Debugged and tested application modules",
      "Collaborated with development teams using Git",
    ],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-primary font-bold text-primary">My Technical Journey</h3>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20 z-10" />

                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card
                    className={`bg-card/50 backdrop-blur-xl border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 text-primary mt-1">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
