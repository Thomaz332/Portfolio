"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, Github } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Vamos conversar!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos criar
                  algo incrível juntos!
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
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Envie uma mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input border-border"
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
