"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Download } from "lucide-react"
import Image from "next/image"

const floatingIcons = [
  { icon: "C#", delay: 0 },
  { icon: ".NET", delay: 0.5 },
  { icon: "SQL", delay: 1 },
  { icon: "API", delay: 1.5 },
  { icon: "</>", delay: 2 },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((item, index) => (
            <div
              key={index}
              className="absolute text-primary/40 font-mono text-xl font-bold animate-float"
              style={{
                left: `${10 + index * 15}%`,
                top: `${15 + (index % 3) * 25}%`,
                animationDelay: `${item.delay}s`,
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-primary font-medium text-sm md:text-base mb-4 tracking-wide">
              Hello!
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
              {"I'm "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                Sherif Yasser
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-6">
              Software Engineer{" "}
              <span className="text-primary font-bold">&</span>{" "}
              Full Stack .NET Developer
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed">
              Building scalable backend systems and modern web applications using .NET technologies. Passionate about clean code and efficient solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity group px-8"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              
              <Button
               size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 group px-8"
                asChild
              >
                 <a href="/images/Sherif'sCv" download>
                Download CV
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                 </Button>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-full blur-3xl" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <Image
                  src="/images/profile.png"
                  alt="Sherif Yasser"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
