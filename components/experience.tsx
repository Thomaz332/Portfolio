export function Experience() {
  const experiences = [
    {
      title: "Análise de Dados",
      description: "Manipulação de grandes datasets com Python (Pandas), e criação de visualizações com Plotly",
    },
    {
      title: "Implementação de Criptografia em Hardware",
      description: "Implementação de algoritmo ECC em VHDL para sistemas embarcados, feito como Estudante Pesquisador",
    },
    {
      title: "Desenvolvimento Web",
      description: "Criação de interfaces interativas com HTML, CSS, JavaScript e Bootstrap",
    },
    {
      title: "Inteligência Artificial",
      description: "Treinamento de modelo LightGBM para análise de dados do ENEM 2023",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experiência Acadêmica
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
