import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
const liens = {
  produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'À propos', href: '#about' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Politique de confidentialité', href: '#' },
    { label: "Conditions d'utilisation", href: '#' },
    { label: 'Mentions légales', href: '#' },
  ]
}

const reseaux = [
  { icone: <Github size={18} />, href: '#', label: 'GitHub' },
  { icone: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  { icone: <Twitter size={18} />, href: '#', label: 'Twitter' },
  { icone: <Mail size={18} />, href: '#', label: 'Email' },
]

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          <div className="footer-brand">
            <a href="#" className="navbar-logo">NovaProd</a>
            <p className="footer-desc">
              La solution digitale qui simplifie la gestion de vos
              projets et booste la productivité de votre équipe.
            </p>
            <div className="footer-socials">
              {reseaux.map((r) => (
                <a key={r.label} href={r.href} className="social-btn" aria-label={r.label}>
                  {r.icone}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Produit</h4>
            <ul>
              {liens.produit.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Légal</h4>
            <ul>
              {liens.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {annee} NovaProd. Tous droits réservés.</p>
          <p>Fait avec ❤️ au Maroc</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer