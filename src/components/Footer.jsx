import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Fingerprint, 
  Lock,
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    empresa: [
      { name: 'Acerca de Nosotros', path: '/' },
      { name: 'Nuestra Misión', path: '/' },
      { name: 'Nuestros Valores', path: '/' },
      { name: 'Equipo', path: '/' }
    ],
    servicios: [
      { name: 'Firma Electrónica', path: '/' },
      { name: 'Certificados Digitales', path: '/' },
      { name: 'Integración API', path: '/' },
      { name: 'Consultoría', path: '/' }
    ],
    legal: [
      { name: 'Términos y Condiciones', path: '/legal' },
      { name: 'Política de Privacidad', path: '/legal' },
      { name: 'Cumplimiento Legal', path: '/legal' },
      { name: 'Certificaciones', path: '/legal' }
    ],
    soporte: [
      { name: 'Centro de Ayuda', path: '/support' },
      { name: 'Documentación', path: '/support' },
      { name: 'Contacto', path: '/contacto' },
      { name: 'Soporte Técnico', path: '/support' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
                          <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Fingerprint className="w-8 h-8 text-primary-400" />
                <Lock className="w-4 h-4 text-primary-300 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">Authenology</span>
            </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Somos una empresa de emisión de certificados para firmas electrónicas, 
                comprometida con la transformación digital de Venezuela. Ofrecemos soluciones 
                innovadoras y seguras para la firma de documentos digitales.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">info@authenology.com.ve</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">+58 212-555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Caracas, Venezuela</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-6 capitalize">
                  {category === 'empresa' ? 'Empresa' : 
                   category === 'servicios' ? 'Servicios' :
                   category === 'legal' ? 'Legal' : 'Soporte'}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Suscríbete a Nuestro Boletín</h3>
              <p className="text-gray-400">
                Recibe las últimas noticias sobre firma electrónica y transformación digital
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors duration-200"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Authenology. Todos los derechos reservados.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Fingerprint className="w-5 h-5 text-green-400" />
                  <Lock className="w-3 h-3 text-green-300 absolute -top-0.5 -right-0.5" />
                </div>
                <span className="text-sm text-gray-400">Certificado SUSCERTE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-400 rounded-full" />
                <span className="text-sm text-gray-400">SSL Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-50"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer 