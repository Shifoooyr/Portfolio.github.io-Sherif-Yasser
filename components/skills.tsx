"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Server,
  Database,
  Code2,
  GitBranch,
  Smartphone,
} from "lucide-react"

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "from-primary to-primary/70",
    skills: [
      { name: "C#", level: 85 },
      { name: "ASP.NET Core", level: 80 },
      { name: "MVC", level: 75 },
      { name: "Web APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-primary to-primary/70",
    skills: [
      { name: "SQL Server", level: 85 },
      { name: "Entity Framework", level: 80 },
      { name: "EF Core", level: 80 },
      { name: "LINQ", level: 85 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    color: "from-primary to-primary/70",
    skills: [
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
      { name: "OOP", level: 90 },
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "from-primary to-primary/70",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Docker", level: 60 },
      { name: "CI/CD", level: 55 },
      { name: "Azure", level: 50 },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-primary to-primary/70",
    skills: [
      { name: "Flutter", level: 65 },
      { name: "Dart", level: 60 },
      { name: "Firebase", level: 55 },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedProgress((prev) => ({
                  ...prev,
                  [`${category.title}-${skill.name}`]: skill.level,
                }))
              }, 300)
            })
          })
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-primary font-bold text-primary">Technical Skills</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`bg-card/50 backdrop-blur-xl border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {animatedProgress[`${category.title}-${skill.name}`] || 0}%
                      </span>
                    </div>
                    <Progress
                      value={animatedProgress[`${category.title}-${skill.name}`] || 0}
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
