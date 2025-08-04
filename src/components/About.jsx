import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Heart, Fingerprint, Users, Zap, Award, Globe, Lock } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Fingerprint,
      title: "Seguridad",
      description: "Garantizamos la máxima protección de datos y documentos con tecnología de cifrado avanzada."
    },
    {
      icon: Users,
      title: "Orientación al Servicio",
      description: "Nos enfocamos en brindar la mejor experiencia y soporte a nuestros clientes."
    },
    {
      icon: Heart,
      title: "Honestidad y Transparencia",
      description: "Operamos con total transparencia y honestidad en todos nuestros procesos."
    },
    {
      icon: Award,
      title: "Confiabilidad",
      description: "Nuestros servicios cumplen con los más altos estándares de calidad y confiabilidad."
    },
    {
      icon: Lock,
      title: "Confidencialidad",
      description: "Protegemos la privacidad y confidencialidad de toda la información de nuestros clientes."
    },
    {
      icon: Globe,
      title: "Innovación",
      description: "Continuamente innovamos para ofrecer las mejores soluciones tecnológicas."
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
            Acerca de <span className="gradient-text">Authenology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa de emisión de certificados para firmas electrónicas, 
            comprometida con la transformación digital de Venezuela.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary-100 rounded-full">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Nuestra Misión</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ofrecer soluciones innovadoras y seguras para la firma de documentos digitales en Venezuela. 
              A través de nuestra plataforma en línea, proporcionamos una alternativa moderna y eficiente 
              a la firma tradicional en papel, cumpliendo con todos los requisitos legales establecidos 
              por las autoridades competentes.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary-600 rounded-full" />
                ))}
              </div>
              <span className="text-sm text-gray-500">Comprometidos con la excelencia</span>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent-100 rounded-full">
                <Eye className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Nuestra Visión</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Convertirnos en la empresa líder en la distribución de soluciones de firma electrónica en Venezuela, 
              ofreciendo un servicio de alta calidad y a la vanguardia de la tecnología. Aspiramos a ser reconocidos 
              como un actor clave en la promoción de la cultura y uso legal de la firma electrónica en el país, 
              contribuyendo así al progreso y desarrollo sostenible del futuro.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                "Transformando la forma de hacer negocios en Venezuela a través de la tecnología"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada una de nuestras acciones y decisiones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card text-center group"
            >
              <div className="p-4 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-white/80">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Documentos Procesados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Soporte Disponible</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 