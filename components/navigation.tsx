"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">João Pedro Thomaz</h1>
          <div className="hidden md:flex space-x-6">
            <Button variant="ghost" onClick={() => scrollToSection("about")} className="hover:text-accent">
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("experience")} className="hover:text-accent">
              Experiência
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("education")} className="hover:text-accent">
              Formação
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")} className="hover:text-accent">
              Habilidades
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")} className="hover:text-accent">
              Contato
            </Button>
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
