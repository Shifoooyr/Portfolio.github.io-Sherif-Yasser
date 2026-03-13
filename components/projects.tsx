"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ShoppingCart, Dumbbell } from "lucide-react"

const projects = [
  {
    id : 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application built using ASP.NET Core and Flutter mobile frontend.",
    icon: ShoppingCart,
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Order processing",
      "Secure backend APIs",
      "SQL Server database",
      "Firebase notifications",
    ],
    tech: ["ASP.NET Core", "Flutter", "SQL Server", "Firebase", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "Mobile app to track workouts, nutrition, and progress charts.",
    icon: Dumbbell,
    features: [
      "Workout logging with exercise library",
      "Nutrition & calorie tracking",
      "Goal setting & personalized reminders",
      "Activity streak tracking",
      "Custom workout plans & routines",
      "Push notifications for daily goals",
      "Weekly & monthly progress reports",
      "Social sharing & achievements badges",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    github: "#",
    demo: "#",
    },
]

export function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-primary font-bold text-primary">My Work</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-card/50 backdrop-blur-xl border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">View on GitHub</span>
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">View Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3">Key Features</h5>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
