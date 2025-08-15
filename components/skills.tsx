const technologies = [
  { name: "HTML", color: "bg-orange-500" },
  { name: "CSS", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "C", color: "bg-blue-600" },
  { name: "C#", color: "bg-purple-600" },
  { name: "Python", color: "bg-green-600" },
  { name: "SQL", color: "bg-indigo-600" },
]

const frameworks = [
  { name: "Bootstrap", color: "bg-purple-500" },
  { name: "Git/GitHub", color: "bg-gray-700" },
  { name: "Microsoft Office", color: "bg-blue-700" },
  { name: "Pandas", color: "bg-green-500" },
  { name: "Plotly", color: "bg-cyan-500" },
  { name: "VHDL", color: "bg-red-600" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Habilidades
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Tecnologias</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className={`px-4 py-2 rounded-full text-white font-medium text-sm ${tech.color}`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Frameworks & Ferramentas</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-white font-medium text-sm ${framework.color}`}
                  >
                    {framework.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
