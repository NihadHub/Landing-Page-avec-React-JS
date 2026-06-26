import { Zap, Shield, BarChart2, Users, Palette, Rocket } from 'lucide-react'

const featuresData = [
  {
    id: 1,
    icone: <Zap size={28} />,
    titre: 'Ultra rapide',
    description: 'Performance optimisée pour que votre équipe ne perde plus de temps à attendre.'
  },
  {
    id: 2,
    icone: <Shield size={28} />,
    titre: 'Sécurisé',
    description: 'Vos données sont chiffrées et protégées avec les meilleurs standards du marché.'
  },
  {
    id: 3,
    icone: <BarChart2 size={28} />,
    titre: 'Analytiques',
    description: 'Tableaux de bord clairs pour suivre vos performances en temps réel.'
  },
  {
    id: 4,
    icone: <Users size={28} />,
    titre: 'Collaboratif',
    description: 'Travaillez ensemble en temps réel, où que vous soyez dans le monde.'
  },
  {
    id: 5,
    icone: <Palette size={28} />,
    titre: 'Personnalisable',
    description: "Adaptez chaque détail de l'outil à votre façon de travailler."
  },
  {
    id: 6,
    icone: <Rocket size={28} />,
    titre: 'Évolutif',
    description: 'La solution grandit avec vous, de 1 à 10 000 utilisateurs sans friction.'
  }
]

function FeatureCard({ icone, titre, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icone">{icone}</div>
      <h3 className="feature-titre">{titre}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Fonctionnalités</span>
          <h2 className="section-title">Tout ce dont vous avez besoin</h2>
          <p className="section-subtitle">
            Une suite complète d'outils pensée pour simplifier
            votre quotidien professionnel.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icone={feature.icone}
              titre={feature.titre}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features