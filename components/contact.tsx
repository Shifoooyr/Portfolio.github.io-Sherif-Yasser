"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "Sharief.yasser@gmail.com",
    href: "mailto:Sharief.yasser@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/Shifoooyr",
    href: "https://linkedin.com/in/shifoooyr",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Shifoooyr",
    href: "https://github.com/Shifoooyr",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+20 114 208 8399",
    href: "https://wa.me/201142088399",
  },
]

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-4xl font-bold text-primary">Get In Touch</h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-500 delay-${index * 100}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all h-full group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <link.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
                    {link.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-card/50 backdrop-blur-xl border-border/50">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Egypt</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-foreground font-medium">
                Currently available for new opportunities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
