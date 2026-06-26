function Hero(){

    return (
        <section className="hero section">
         <div className="container hero-inner">


            <div className="hero-content">
                <span className="section-label">Nouveau produit 2025</span>
                <h1 className="hero-title">
                    Transformez votre façon de <span className="hero-accent">
                        travailler
                    </span>
                </h1>

                <p className="hero-desc">
                    NovaProd est la solution digitale qui simplifie la gestion
            de vos projets, automatise vos tâches et booste la
            productivité de votre équipe.
                </p>

                <div className="hero-actions">
                    <a href="#contact" className="btn-primary">
                        Essai gratuit
                    </a>
                    <a href="#features" className="btn-outline">
                        Voir les fonctionnalités
                    </a>
                </div>

                 <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Utilisateurs</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Note moyenne</span>
            </div>
          </div>
        </div>
         {/* Illustration droite */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="hero-card-body">
              <div className="mock-bar long"></div>
              <div className="mock-bar medium"></div>
              <div className="mock-bar short"></div>
              <div className="mock-chart">
                <div className="bar" style={{height: '60%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
              </div>
            </div>
          </div>
           <div className="hero-badge">
            <span>✓</span> Productivité +40%
          </div>
        </div>
            </div>

        </section>
        
    )


}
export default Hero
