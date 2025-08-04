import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Fingerprint, 
  Lock, 
  Globe, 
  Clock, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Users,
  Database,
  Smartphone
} from 'lucide-react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Fingerprint,
      title: "Huella Digital Única",
      description: "Cada firma electrónica genera una huella digital única e irrepetible que garantiza la autenticidad del documento y la identidad del firmante.",
      details: [
        "Algoritmos criptográficos avanzados",
        "Verificación de integridad",
        "No repudio garantizado",
        "Validez jurídica plena"
      ]
    },
    {
      icon: Lock,
      title: "Seguridad Máxima",
      description: "Implementamos las más avanzadas tecnologías de seguridad para proteger tus documentos y garantizar la confidencialidad de la información.",
      details: [
        "Cifrado AES-256",
        "Certificados SSL/TLS",
        "Infraestructura PKI robusta",
        "Auditorías de seguridad regulares"
      ]
    },
    {
      icon: Globe,
      title: "Acceso Global",
      description: "Firma documentos desde cualquier parte del mundo con solo una conexión a internet y un dispositivo móvil o computadora.",
      details: [
        "Acceso desde cualquier dispositivo",
        "Sincronización en tiempo real",
        "Almacenamiento en la nube",
        "Backup automático"
      ]
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Reduce hasta un 50% el tiempo invertido en trámites presenciales y gestión de documentos administrativos.",
      details: [
        "Procesos automatizados",
        "Flujos de trabajo optimizados",
        "Integración con sistemas existentes",
        "Notificaciones automáticas"
      ]
    }
  ]

  const benefits = [
    {
      icon: FileText,
      title: "Documentos Legales",
      description: "Contratos, acuerdos, convenios y cualquier documento que requiera firma legal."
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      description: "Contratos laborales, acuerdos de confidencialidad y documentos internos."
    },
    {
      icon: Database,
      title: "Finanzas",
      description: "Facturas, recibos, estados de cuenta y documentos financieros."
    },
    {
      icon: Smartphone,
      title: "Móvil",
      description: "Firma desde tu smartphone o tablet con total seguridad y facilidad."
    }
  ]

  const legalInfo = [
    {
      title: "Ley de Mensajes de Datos",
      description: "Cumplimos con la Ley de Mensajes de Datos y Firmas Electrónicas de Venezuela."
    },
    {
      title: "SUSCERTE",
      description: "Certificados por la Superintendencia de Servicios de Certificación Electrónica."
    },
    {
      title: "Validez Jurídica",
      description: "Nuestras firmas tienen la misma validez que una firma manuscrita tradicional."
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Sabías qué?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una firma digital es un tipo avanzado de firma electrónica que contiene características 
            de seguridad mejoradas que impiden su falsificación o manipulación.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              
              <div className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuando se crea una firma digital en un documento, se genera un número único o huella digital 
            a través de un proceso criptográfico. Este número se emite a través de una autoridad oficial 
            para garantizar la autenticidad del firmante y su firma.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "01", title: "Subir Documento", description: "Carga tu documento en nuestra plataforma segura" },
            { number: "02", title: "Identificar Firmantes", description: "Selecciona quién debe firmar el documento" },
            { number: "03", title: "Firma Digital", description: "Cada firmante firma con su certificado digital" },
            { number: "04", title: "Documento Final", description: "Recibe el documento firmado y certificado" }
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-primary-700 transition-colors duration-300">
                {step.number}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Document Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Documentos</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La firma electrónica es una herramienta que nos permite firmar cualquier documento electrónico 
            con independencia de su tipología o de la naturaleza de los trámites que solventan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card text-center group"
            >
              <div className="p-4 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Legal Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <div className="relative mx-auto mb-4">
              <Fingerprint className="w-16 h-16 text-white" />
              <Lock className="w-6 h-6 text-white/80 absolute -top-2 -right-2" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Cumplimiento Legal</h3>
            <p className="text-white/80 text-lg">
              Para que una firma electrónica tenga validez y efectos jurídicos plenos en Venezuela 
              debe ser certificada por un proveedor de servicios de certificación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {legalInfo.map((info, index) => (
              <div key={info.title} className="text-center">
                <h4 className="text-xl font-semibold mb-3">{info.title}</h4>
                <p className="text-white/80 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/10 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h4 className="text-lg font-semibold">Importante</h4>
            </div>
            <p className="text-white/80 text-sm">
              La Superintendencia de Servicios de Certificación Electrónica (SUSCERTE) es la autoridad 
              certificadora en Venezuela. Nuestros servicios cumplen con todas las normativas establecidas 
              por esta entidad.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Descubre Todos los Beneficios
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            La firma electrónica cualificada es el método más complejo y seguro para acreditar 
            digitalmente la identidad de un sujeto y que este pueda aceptar el contenido de un documento 
            de forma irrevocable.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contacto'}
            className="btn-primary text-lg px-8 py-4"
          >
            Solicitar Información
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 