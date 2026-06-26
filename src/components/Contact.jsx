import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })

  const [erreurs, setErreurs] = useState({})
  const [envoye, setEnvoye] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Effacer l'erreur quand l'utilisateur tape
    if (erreurs[name]) {
      setErreurs({ ...erreurs, [name]: '' })
    }
  }

  const valider = () => {
    const nouvellesErreurs = {}

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = 'Le nom est obligatoire'
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nouvellesErreurs.email = "Format d'email invalide"
    }

    if (!formData.message.trim()) {
      nouvellesErreurs.message = 'Le message est obligatoire'
    } else if (formData.message.trim().length < 10) {
      nouvellesErreurs.message = 'Le message doit contenir au moins 10 caractères'
    }

    return nouvellesErreurs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nouvellesErreurs = valider()

    if (Object.keys(nouvellesErreurs).length > 0) {
      setErreurs(nouvellesErreurs)
      return
    }

    // Formulaire valide
    setEnvoye(true)
    setFormData({ nom: '', email: '', message: '' })
    setErreurs({})
  }

  if (envoye) {
    return (
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-success">
            <CheckCircle size={56} className="success-icon" />
            <h2>Message envoyé !</h2>
            <p>Merci pour votre message. Notre équipe vous répondra sous 24h.</p>
            <button
              className="btn-primary"
              onClick={() => setEnvoye(false)}
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="contact-inner">

          {/* Gauche — texte */}
          <div className="contact-content">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Prêt à transformer votre équipe ?
            </h2>
            <p>
              Écrivez-nous et on vous répond en moins de 24h.
              Essai gratuit de 14 jours, sans carte bancaire.
            </p>

            <div className="contact-infos">
              <div className="contact-info-item">
                <span className="info-label">Email</span>
                <span>contact@novaprod.com</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Téléphone</span>
                <span>+212 6 00 00 00 00</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Adresse</span>
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Droite — formulaire */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="form-group">
                <label htmlFor="nom">Nom complet</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Marouane Ait"
                  value={formData.nom}
                  onChange={handleChange}
                  className={erreurs.nom ? 'input-error' : ''}
                />
                {erreurs.nom && <span className="erreur">{erreurs.nom}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="marouane@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={erreurs.email ? 'input-error' : ''}
                />
                {erreurs.email && <span className="erreur">{erreurs.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre besoin..."
                  value={formData.message}
                  onChange={handleChange}
                  className={erreurs.message ? 'input-error' : ''}
                />
                {erreurs.message && <span className="erreur">{erreurs.message}</span>}
              </div>

              <button type="submit" className="btn-primary btn-full">
                <Send size={16} />
                Envoyer le message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact