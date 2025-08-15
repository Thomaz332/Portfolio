"use client"

import type React from "react"
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Entre em Contato
          </h2>
          <div className="flex justify-center">
            <div className="space-y-8 max-w-md">
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4 text-center">Contate-me!</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Estou sempre aberto a novas oportunidades e projetos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a
                    href="mailto:joaopedrothomaz332@gmail.com"
                    className="text-card-foreground hover:text-accent transition-colors"
                  >
                    joaopedrothomaz332@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-card-foreground">(13) 99196-4545</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-card-foreground">Santos, SP - Brasil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <a
                    href="https://www.linkedin.com/in/jo%C3%A3o-thomaz-kairalla-b41864370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-card-foreground hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-accent" />
                  <a
                    href="https://github.com/Thomaz332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-card-foreground hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <a
                    href="https://wa.me/5513991964545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-card-foreground hover:text-accent transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}