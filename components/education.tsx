export function Education() {
  const education = [
    {
      institution: "Universidade Católica de Santos (Unisantos)",
      degree: "Bacharelado em Ciência da Computação",
      period: "2023 - 2026",
      status: "Em andamento",
    },
    {
      institution: "Inglês Particular",
      degree: "Nível Intermediário",
      period: "2024 - 2026",
      status: "Em andamento",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Formação
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-sm text-muted-foreground bg-accent/20 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <p className="text-sm text-accent mt-1">{edu.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
