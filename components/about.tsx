export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sobre Mim
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-card-foreground leading-relaxed text-center">
                Busco ingressar no mundo do desenvolvimento de software, seja front-end ou back-end, como estagiário.
                Sou estudante de Ciência da Computação e desenvolvo projetos tanto na faculdade quanto no meu tempo
                livre, sempre buscando ampliar meus conhecimentos. Comprometido com o trabalho em equipe, espero
                continuar desenvolvendo em um futuro ambiente de trabalho.
              </p>

              <div className="space-y-3 text-center">
                <h4 className="font-semibold text-card-foreground">Idiomas:</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Português (Nativo)</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Inglês (Intermediário)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
        </div>
      </div>
    </section>
  )
}
