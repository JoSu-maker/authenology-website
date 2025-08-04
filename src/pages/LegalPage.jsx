import React from 'react'
import { motion } from 'framer-motion'
import { Fingerprint, Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react'

const LegalPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Información Legal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cumplimiento normativo y marco legal de nuestros servicios de firma electrónica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Términos y Condiciones */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Términos y Condiciones</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>Al utilizar nuestros servicios de firma electrónica, usted acepta los siguientes términos:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Uso responsable de los certificados digitales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cumplimiento de normativas venezolanas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Protección de datos personales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>No transferencia de certificados</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Política de Privacidad */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Fingerprint className="w-8 h-8 text-primary-600" />
                <Lock className="w-4 h-4 text-primary-400 absolute -top-1 -right-1" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Política de Privacidad</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>Su privacidad es fundamental para nosotros. Nuestra política incluye:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cifrado de datos AES-256</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>No compartimos información personal</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Almacenamiento seguro en servidores locales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Auditorías de seguridad regulares</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Cumplimiento Legal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <div className="relative mx-auto mb-4">
              <Fingerprint className="w-16 h-16 text-white" />
              <Lock className="w-6 h-6 text-white/80 absolute -top-2 -right-2" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Cumplimiento Legal</h2>
            <p className="text-white/80 text-lg">
              Nuestros servicios cumplen con todas las normativas venezolanas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Ley de Mensajes de Datos</h3>
              <p className="text-white/80 text-sm">
                Cumplimiento total con la Ley de Mensajes de Datos y Firmas Electrónicas
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">SUSCERTE</h3>
              <p className="text-white/80 text-sm">
                Certificados por la Superintendencia de Servicios de Certificación Electrónica
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">ISO 27001</h3>
              <p className="text-white/80 text-sm">
                Cumplimiento con estándares internacionales de seguridad
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones</h2>
            <p className="text-gray-600 text-lg">
              Certificaciones y acreditaciones que respaldan nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SUSCERTE", description: "Autoridad Certificadora" },
              { title: "SSL/TLS", description: "Certificación de Seguridad" },
              { title: "PKI", description: "Infraestructura de Clave Pública" },
              { title: "AES-256", description: "Cifrado Avanzado" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LegalPage 