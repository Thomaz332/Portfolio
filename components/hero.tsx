"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">João Pedro Thomaz</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">Desenvolvedor em formação</p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed"></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={scrollToAbout}>
              Conheça meu trabalho
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entre em contato
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  )
}
