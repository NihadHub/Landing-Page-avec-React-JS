import { CheckCircle } from 'lucide-react'

const avantages = [
  'Prise en main en moins de 5 minutes',
  'Aucune compétence technique requise',
  'Support client disponible 7j/7',
  'Mises à jour automatiques et gratuites',
]

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-inner">

        {/* Gauche — illustration */}
        <div className="about-visual">
          <div className="about-card main-card">
            <p className="about-card-label">Problème actuel</p>
            <h3>Trop d'outils, trop de confusion</h3>
            <p>Les équipes jonglent entre 5 à 10 applications différentes, perdant en moyenne 2h par jour.</p>
          </div>
          <div className="about-card solution-card">
            <p className="about-card-label" style={{color: 'var(--primary)'}}>Notre solution</p>
            <h3>Tout en un seul endroit</h3>
            <p>NovaProd centralise tous vos outils en une seule plateforme simple et intuitive.</p>
          </div>
        </div>

        {/* Droite — texte */}
        <div className="about-content">
          <span className="section-label">À propos</span>
          <h2 className="section-title">
            Conçu pour les équipes qui veulent aller plus loin
          </h2>
          <p style={{marginBottom: '28px'}}>
            NovaProd s'adresse aux PME, startups et freelances qui perdent
            trop de temps sur des tâches répétitives. Notre mission :
            vous redonner ce temps pour ce qui compte vraiment.
          </p>

          <ul className="about-list">
            {avantages.map((item, index) => (
              <li key={index} className="about-item">
                <CheckCircle size={20} className="about-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary" style={{marginTop: '36px', display: 'inline-block'}}>
            En savoir plus
          </a>
        </div>

      </div>
    </section>
  )
}

export default About