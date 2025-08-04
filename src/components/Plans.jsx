import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  FileText, 
  Clock, 
  Phone, 
  Mail, 
  Award,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Crown,
  Sparkles,
  Target,
  Rocket,
  Building,
  User,
  CheckCircle,
  AlertCircle,
  Info,
  Download,
  Play,
  Calendar,
  CreditCard,
  Lock,
  Globe,
  Database,
  Settings,
  BarChart3
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)
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

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      description: 'Perfecto para profesionales independientes y pequeñas empresas',
      icon: <User className="w-8 h-8" />,
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        { text: '1 certificado digital', included: true },
        { text: 'Hasta 50 documentos/mes', included: true },
        { text: 'Soporte por email', included: true },
        { text: 'Acceso web y móvil', included: true },
        { text: 'Plantillas básicas', included: true },
        { text: 'Historial de firmas', included: true },
        { text: 'Múltiples certificados', included: false },
        { text: 'Soporte prioritario', included: false },
        { text: 'API de integración', included: false },
        { text: 'Auditoría avanzada', included: false }
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      popular: false,
      badge: null
    },
    {
      id: 'professional',
      name: 'Profesional',
      description: 'Ideal para empresas en crecimiento con necesidades avanzadas',
      icon: <Building className="w-8 h-8" />,
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        { text: '5 certificados digitales', included: true },
        { text: 'Hasta 500 documentos/mes', included: true },
        { text: 'Soporte prioritario', included: true },
        { text: 'Acceso web y móvil', included: true },
        { text: 'Plantillas avanzadas', included: true },
        { text: 'Historial completo', included: true },
        { text: 'API de integración', included: true },
        { text: 'Flujos de trabajo', included: true },
        { text: 'Auditoría básica', included: true },
        { text: 'Soporte 24/7', included: false }
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      popular: true,
      badge: 'Más Popular'
    },
    {
      id: 'enterprise',
      name: 'Empresarial',
      description: 'Solución completa para grandes empresas y corporaciones',
      icon: <Crown className="w-8 h-8" />,
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        { text: 'Certificados ilimitados', included: true },
        { text: 'Documentos ilimitados', included: true },
        { text: 'Soporte 24/7', included: true },
        { text: 'Acceso multiplataforma', included: true },
        { text: 'Plantillas personalizadas', included: true },
        { text: 'Analytics avanzados', included: true },
        { text: 'API completa', included: true },
        { text: 'Flujos automatizados', included: true },
        { text: 'Auditoría completa', included: true },
        { text: 'Gerente de cuenta', included: true }
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      popular: false,
      badge: 'Recomendado'
    }
  ]

  const faqs = [
    {
      question: "¿Qué incluye cada plan?",
      answer: "Cada plan incluye certificados digitales, documentos mensuales, soporte técnico y acceso a nuestra plataforma. Los planes superiores incluyen más certificados, documentos y funcionalidades avanzadas."
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente y se ajusta la facturación proporcionalmente."
    },
    {
      question: "¿Los precios incluyen impuestos?",
      answer: "Los precios mostrados no incluyen impuestos. Se aplicarán los impuestos correspondientes según la legislación venezolana vigente."
    },
    {
      question: "¿Ofrecen descuentos por volumen?",
      answer: "Sí, ofrecemos descuentos especiales para empresas con más de 50 usuarios. Contacta con nuestro equipo de ventas para más información."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, pagos móviles y tarjetas de crédito/débito. Todos los pagos son procesados de forma segura."
    },
    {
      question: "¿Hay período de prueba gratuito?",
      answer: "Sí, ofrecemos un período de prueba gratuito de 14 días para que puedas evaluar nuestros servicios antes de comprometerte."
    }
  ]

  const features = [
    {
      category: "Seguridad",
      items: [
        { name: "Cifrado AES-256", all: true },
        { name: "Certificados SSL/TLS", all: true },
        { name: "Infraestructura PKI", all: true },
        { name: "Auditorías de seguridad", basic: false, pro: true, enterprise: true }
      ]
    },
    {
      category: "Plataforma",
      items: [
        { name: "Acceso web", all: true },
        { name: "Aplicación móvil", all: true },
        { name: "API de integración", basic: false, pro: true, enterprise: true },
        { name: "Analytics avanzados", basic: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Soporte",
      items: [
        { name: "Soporte por email", all: true },
        { name: "Soporte prioritario", basic: false, pro: true, enterprise: true },
        { name: "Soporte 24/7", basic: false, pro: false, enterprise: true },
        { name: "Gerente de cuenta", basic: false, pro: false, enterprise: true }
      ]
    }
  ]

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
    // Simulate navigation to contact page with plan selection
    setTimeout(() => {
      navigate('/contacto', { state: { selectedPlan: planId } })
    }, 500)
  }

  const getCurrentPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  }

  const getSavings = (plan) => {
    if (billingCycle === 'yearly') {
      return plan.monthlyPrice * 12 - plan.yearlyPrice
    }
    return 0
  }

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
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary-100/30 to-primary-100/30 rounded-full blur-3xl"
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
            Planes y Precios
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Elige el Plan
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Perfecto</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Ofrecemos planes flexibles que se adaptan a las necesidades de tu empresa, desde profesionales independientes hasta grandes corporaciones.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center space-x-4 mb-12"
          >
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensual
            </span>
            <motion.button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-primary-600 rounded-full p-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <div className="flex items-center space-x-2">
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Anual
              </span>
              {billingCycle === 'yearly' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full"
                >
                  Ahorra 20%
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative ${plan.bgColor} ${plan.borderColor} border-2 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                plan.popular ? 'ring-4 ring-primary-200 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              {/* Plan Icon */}
              <motion.div
                animate={{
                  scale: hoveredPlan === plan.id ? 1.1 : 1,
                  rotate: hoveredPlan === plan.id ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
              >
                {plan.icon}
              </motion.div>

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${getCurrentPrice(plan)}
                    </span>
                    <span className="text-gray-500">
                      /{billingCycle === 'monthly' ? 'mes' : 'año'}
                    </span>
                  </div>
                  {getSavings(plan) > 0 && (
                    <div className="text-green-600 text-sm font-medium mt-1">
                      Ahorras ${getSavings(plan)} al año
                    </div>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    {feature.included ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <span>{plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPlan === plan.id ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5 rounded-3xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Comparación de Características</h3>
            <p className="text-lg text-gray-600">Descubre qué incluye cada plan en detalle</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Básico</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Profesional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Empresarial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-gray-50">
                        <td colSpan="4" className="px-6 py-3 text-sm font-semibold text-gray-700">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-700">{item.name}</td>
                          <td className="px-6 py-4 text-center">
                            {item.all || item.basic ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.all || item.pro ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.all || item.enterprise ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h3>
            <p className="text-lg text-gray-600">Resolvemos tus dudas sobre nuestros planes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿No encuentras el plan ideal?</h3>
              <p className="text-xl mb-8 opacity-90">
                Nuestro equipo puede crear un plan personalizado para tu empresa
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contacto')}
                  className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Contactar Ventas</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contacto')}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Demo</span>
                  <Play className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Plans 