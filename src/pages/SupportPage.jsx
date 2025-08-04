import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, FileText, MessageSquare, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

const SupportPage = () => {
  const supportOptions = [
    {
      icon: HelpCircle,
      title: "Centro de Ayuda",
      description: "Encuentra respuestas a las preguntas más frecuentes",
      link: "#faq"
    },
    {
      icon: FileText,
      title: "Documentación",
      description: "Guías técnicas y manuales de usuario",
      link: "#docs"
    },
    {
      icon: MessageSquare,
      title: "Contacto",
      description: "Envíanos un mensaje directo",
      link: "#contact"
    },
    {
      icon: Phone,
      title: "Soporte Técnico",
      description: "Atención especializada 24/7",
      link: "#tech-support"
    }
  ]

  const faqs = [
    {
      question: "¿Cómo funciona la firma electrónica?",
      answer: "La firma electrónica funciona mediante certificados digitales que garantizan la autenticidad e integridad de los documentos firmados."
    },
    {
      question: "¿Es legal en Venezuela?",
      answer: "Sí, nuestras firmas cumplen con la Ley de Mensajes de Datos y están certificadas por SUSCERTE."
    },
    {
      question: "¿Puedo firmar desde mi móvil?",
      answer: "Absolutamente. Nuestra plataforma es compatible con smartphones, tablets y computadoras."
    },
    {
      question: "¿Qué documentos puedo firmar?",
      answer: "Puedes firmar cualquier tipo de documento: contratos, facturas, acuerdos y cualquier documento que requiera firma legal."
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Centro de Soporte</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con cualquier consulta sobre nuestros servicios
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Información de Contacto</h2>
            <p className="text-white/80 text-lg">
              Nuestro equipo está disponible para ayudarte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/80 text-sm">info@authenology.com.ve</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-white/80 text-sm">+58 212-555-0123</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Horario</h3>
              <p className="text-white/80 text-sm">Lun-Vie: 8:00-18:00</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 text-lg">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gray-100 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soporte Técnico 24/7</h2>
            <p className="text-gray-600 text-lg">
              Nuestro equipo técnico está disponible para resolver cualquier problema
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Servicios Incluidos:</h3>
              <ul className="space-y-2">
                {[
                  "Configuración de certificados digitales",
                  "Integración con sistemas existentes",
                  "Resolución de problemas técnicos",
                  "Capacitación y entrenamiento"
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Tiempo de Respuesta:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Urgencias críticas</span>
                  <span className="font-semibold text-primary-600">2 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Problemas generales</span>
                  <span className="font-semibold text-primary-600">4 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Consultas generales</span>
                  <span className="font-semibold text-primary-600">24 horas</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SupportPage 