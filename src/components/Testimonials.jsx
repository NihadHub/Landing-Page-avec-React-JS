import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const temoignages = [
  {
    id: 1,
    nom: 'Nihad Ouachour',
    poste: 'CEO, StartupMaroc',
    texte: 'NovaProd a complètement transformé notre façon de travailler. On a gagné 3h par jour sur la gestion de nos projets. Je recommande à 100%.',
    note: 5
  },
  {
    id: 2,
    nom: 'Isslam Ouachour',
    poste: 'Chef de projet, TechCorp',
    texte: 'Interface intuitive, support réactif, et des fonctionnalités vraiment utiles. C\'est rare de trouver un outil aussi bien pensé.',
    note: 5
  },
  {
    id: 3,
    nom: 'Majdouline Ouachour',
    poste: 'Freelance Designer',
    texte: 'En tant que freelance, j\'avais besoin d\'un outil simple mais puissant. NovaProd coche toutes les cases. Mon workflow n\'a jamais été aussi fluide.',
    note: 5
  }
]

function Stars({ note }) {
  return (
    <div className="stars">
      {Array.from({ length: note }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  )
}

function Testimonials() {
  const [actif, setActif] = useState(0)

  const precedent = () => {
    setActif(actif === 0 ? temoignages.length - 1 : actif - 1)
  }

  const suivant = () => {
    setActif(actif === temoignages.length - 1 ? 0 : actif + 1)
  }

  const temoignage = temoignages[actif]

  return (
    <section className="testimonials section" id="temoignages">
      <div className="container">

        <div className="section-header">
          <span className="section-label">Témoignages</span>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">
            Des milliers d'équipes nous font confiance chaque jour.
          </p>
        </div>

        <div className="testimonial-slider">

          <div className="testimonial-card">
            <Stars note={temoignage.note} />
            <p className="testimonial-texte">"{temoignage.texte}"</p>
            <div className="testimonial-auteur">
              <div className="auteur-avatar">
                {temoignage.nom.charAt(0)}
              </div>
              <div>
                <p className="auteur-nom">{temoignage.nom}</p>
                <p className="auteur-poste">{temoignage.poste}</p>
              </div>
            </div>
          </div>

          {/* Contrôles */}
          <div className="testimonial-controls">
            <button className="control-btn" onClick={precedent}>
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {temoignages.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === actif ? 'actif' : ''}`}
                  onClick={() => setActif(i)}
                />
              ))}
            </div>

            <button className="control-btn" onClick={suivant}>
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials