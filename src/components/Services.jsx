import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Fingerprint, 
  Shield, 
  Award, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Globe,
  Clock,
  Users,
  FileText,
  Settings,
  BarChart3,
  ShieldCheck,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Download,
  ExternalLink,
  Play,
  Star,
  TrendingUp,
  Award as AwardIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const services = [
    {
      id: 1,
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Firma Electrónica Certificada",
      description: "Certificados digitales con validez jurídica plena en Venezuela, equivalentes a firma manuscrita tradicional.",
      features: [
        "Validez legal completa",
        "Certificación SUSCERTE",
        "Aceptada nacionalmente",
        "Cumple normativas vigentes"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad de Nivel Bancario",
      description: "Implementamos las más avanzadas tecnologías de seguridad para proteger tu información y documentos.",
      features: [
        "Cifrado AES-256",
        "Certificados SSL/TLS",
        "Infraestructura PKI",
        "Auditorías regulares"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "Disponibilidad Nacional",
      description: "Cobertura completa en todo el territorio venezolano con soporte técnico local y atención personalizada.",
      features: [
        "Cobertura nacional",
        "Soporte local",
        "Atención personalizada",
        "Respuesta rápida"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Procesos Optimizados",
      description: "Flujos de trabajo automatizados que reducen tiempos de procesamiento y aumentan la eficiencia operativa.",
      features: [
        "Automatización completa",
        "Tiempos reducidos",
        "Eficiencia operativa",
        "Flujos optimizados"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ahorro de Tiempo",
      description: "Reduce el tiempo de firma de días a minutos",
      metric: "90%"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Colaboración Mejorada",
      description: "Facilita el trabajo en equipo remoto",
      metric: "24/7"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Gestión Documental",
      description: "Organización y archivo digital automático",
      metric: "100%"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Incrementado",
      description: "Retorno de inversión significativo",
      metric: "300%"
    }
  ]

  const technicalSpecs = [
    {
      category: "Seguridad",
      specs: [
        { name: "Cifrado", value: "AES-256", icon: <Lock className="w-4 h-4" /> },
        { name: "Certificados", value: "SSL/TLS", icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "Infraestructura", value: "PKI", icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      category: "Plataforma",
      specs: [
        { name: "Disponibilidad", value: "99.9%", icon: <Cloud className="w-4 h-4" /> },
        { name: "Dispositivos", value: "Multiplataforma", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Integración", value: "API REST", icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      category: "Cumplimiento",
      specs: [
        { name: "Certificación", value: "SUSCERTE", icon: <AwardIcon className="w-4 h-4" /> },
        { name: "Normativas", value: "ISO 27001", icon: <CheckCircle className="w-4 h-4" /> },
        { name: "Auditorías", value: "Anuales", icon: <BarChart3 className="w-4 h-4" /> }
      ]
    }
  ]

  const tabs = [
    { id: 0, name: "Servicios", icon: <Award className="w-5 h-5" /> },
    { id: 1, name: "Beneficios", icon: <TrendingUp className="w-5 h-5" /> },
    { id: 2, name: "Especificaciones", icon: <Settings className="w-5 h-5" /> }
  ]

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [5, 0, 5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-secondary-100/30 to-primary-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6"
          >
            <Award className="w-4 h-4 mr-2" />
            Servicios Certificados
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Nuestros Servicios de
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Firma Electrónica</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ofrecemos soluciones integrales de firma electrónica certificada que transforman la forma en que las empresas y personas firman documentos digitales en Venezuela.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Services Tab */}
          {activeTab === 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  className={`relative group ${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full transform translate-x-16 -translate-y-16" />
                  </div>

                  {/* Service Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredService === service.id ? 1.1 : 1,
                      rotate: hoveredService === service.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-2xl"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 1 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  
                  <div className="text-3xl font-bold text-primary-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Technical Specs Tab */}
          {activeTab === 2 && (
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSpecs.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  
                  <div className="space-y-4">
                    {category.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + specIndex * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-primary-600">{spec.icon}</div>
                          <span className="font-medium text-gray-700">{spec.name}</span>
                        </div>
                        <span className="font-bold text-primary-600">{spec.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿Listo para Digitalizar tu Empresa?</h3>
              <p className="text-xl mb-8 opacity-90">
                Únete a miles de empresas que ya confían en Authenology para sus firmas electrónicas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contacto')}
                  className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Solicitar Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/planes')}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Ver Planes</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 