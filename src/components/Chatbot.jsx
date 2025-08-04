import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageSquare, 
  X, 
  Send, 
  Fingerprint, 
  Lock, 
  Bot,
  User,
  Loader2,
  FileText,
  CreditCard,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'

const Chatbot = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '¡Hola! 👋 Soy el asistente virtual de Authenology. Estoy aquí para ayudarte con cualquier consulta sobre nuestros servicios de firma electrónica, proceso de registro, recaudos necesarios, planes, aspectos legales, o cualquier duda que tengas. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date(),
      quickActions: [
        { text: '📝 Proceso de Registro', action: 'registro' },
        { text: '📋 Recaudos Necesarios', action: 'recaudos' },
        { text: '💰 Planes y Precios', action: 'planes' },
        { text: '⚖️ Validez Legal', action: 'legal' },
        { text: '🔒 Seguridad', action: 'seguridad' },
        { text: '📞 Contacto', action: 'contacto' }
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState([])
  const [userPreferences, setUserPreferences] = useState({
    name: '',
    company: '',
    plan: '',
    stage: 'initial'
  })
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Gemini API Configuration
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Enhanced system prompt with more context and capabilities
  const getSystemPrompt = (userMessage, context = []) => {
    return `Eres un asistente virtual profesional de Authenology, una empresa líder en soluciones de firma electrónica en Venezuela. 

INFORMACIÓN DE LA EMPRESA:
- Authenology es una empresa de emisión de certificados para firmas electrónicas
- Misión: Ofrecer soluciones innovadoras y seguras para la firma de documentos digitales en Venezuela
- Visión: Ser la empresa líder en distribución de soluciones de firma electrónica en Venezuela
- Certificada por SUSCERTE (Superintendencia de Servicios de Certificación Electrónica)

SERVICIOS PRINCIPALES:
1. Firma Electrónica Certificada
   - Validez jurídica plena
   - Cumple normativas SUSCERTE
   - Equivalente a firma manuscrita
   - Aceptada en todo el territorio nacional

2. Seguridad de Nivel Bancario
   - Cifrado AES-256
   - Certificados SSL/TLS
   - Infraestructura PKI robusta
   - Auditorías de seguridad regulares

3. Planes Disponibles:
   - Básico: $29/mes - 1 certificado, 50 documentos/mes, soporte por email
   - Profesional: $79/mes - 5 certificados, 500 documentos/mes, soporte prioritario
   - Empresarial: $199/mes - Certificados ilimitados, documentos ilimitados, soporte 24/7

PROCESO DE REGISTRO DETALLADO:
1. Registro en Línea:
   - Visita nuestra plataforma web
   - Completa el formulario de registro con datos personales
   - Sube los documentos requeridos
   - Paga la tarifa correspondiente

2. Recaudos Requeridos:
   - Cédula de identidad vigente (frente y reverso)
   - Comprobante de domicilio (no mayor a 3 meses)
   - Certificado de residencia fiscal (si aplica)
   - Documentos de constitución (para empresas)
   - Poderes de representación (si aplica)

3. Verificación de Identidad:
   - Validación biométrica (huella digital)
   - Verificación de documentos por SUSCERTE
   - Proceso de autenticación en dos pasos
   - Activación del certificado digital

4. Tiempos de Procesamiento:
   - Registro básico: 24-48 horas
   - Verificación completa: 3-5 días hábiles
   - Entrega del certificado: Inmediata tras aprobación

CONTACTO Y SOPORTE:
- Email: info@authenology.com.ve
- Teléfono: +58 212-555-0123
- Horario: Lun-Vie 8:00-18:00
- Soporte técnico 24/7
- WhatsApp: +58 424-123-4567

CASOS DE USO COMUNES:
- Contratos empresariales
- Documentos legales
- Facturas electrónicas
- Declaraciones fiscales
- Documentos bancarios
- Certificaciones profesionales

INSTRUCCIONES ESPECÍFICAS:
- Responde de manera profesional, amigable y en español
- Sé específico y detallado en tus respuestas sobre registro y recaudos
- Incluye información técnica cuando sea relevante
- Ofrece siempre ayuda adicional o próximos pasos
- Si no tienes información específica, sugiere contactar al equipo de soporte
- Mantén un tono positivo y de confianza
- Usa emojis ocasionalmente para hacer la conversación más amigable
- Enfócate especialmente en el proceso de registro y los recaudos necesarios
- Proporciona ejemplos prácticos cuando sea posible
- Sugiere el plan más adecuado según las necesidades del usuario

CONTEXTO DE CONVERSACIÓN ANTERIOR:
${context.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

CONSULTA ACTUAL DEL USUARIO: "${userMessage}"

Responde de manera natural, conversacional y útil. Si el usuario pregunta sobre algo específico, proporciona información detallada y práctica.`
  }

  const callGeminiAPI = async (userMessage) => {
    try {
      // Build conversation context
      const recentMessages = messages.slice(-5).map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }))
      
      const systemPrompt = getSystemPrompt(userMessage, recentMessages)

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1500,
          }
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text
      } else {
        throw new Error('Respuesta inesperada de la API')
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      throw error
    }
  }

  const handleQuickAction = async (action) => {
    const actionMessages = {
      registro: '📝 **Proceso de Registro en Authenology**:\n\n1️⃣ **Registro en Línea**:\n• Visita nuestra plataforma web\n• Completa el formulario con tus datos\n• Sube los documentos requeridos\n• Realiza el pago correspondiente\n\n2️⃣ **Recaudos Necesarios**:\n• Cédula de identidad vigente (frente y reverso)\n• Comprobante de domicilio (no mayor a 3 meses)\n• Certificado de residencia fiscal (si aplica)\n• Documentos de constitución (para empresas)\n\n3️⃣ **Tiempos de Procesamiento**:\n• Registro básico: 24-48 horas\n• Verificación completa: 3-5 días hábiles\n• Entrega del certificado: Inmediata tras aprobación\n\n¿Te gustaría que te ayude con algún paso específico del proceso?',
      
      recaudos: '📋 **Recaudos Requeridos para Registro**:\n\n🆔 **Documentos Personales**:\n• Cédula de identidad vigente (frente y reverso)\n• Comprobante de domicilio (no mayor a 3 meses)\n• Certificado de residencia fiscal (si aplica)\n\n🏢 **Para Empresas**:\n• Documentos de constitución\n• Poderes de representación\n• Registro mercantil actualizado\n\n🔐 **Verificación de Identidad**:\n• Validación biométrica (huella digital)\n• Verificación de documentos por SUSCERTE\n• Proceso de autenticación en dos pasos\n\n¿Necesitas ayuda con algún documento específico?',
      
      planes: '💰 **Nuestros Planes y Precios**:\n\n💼 **Plan Básico**: $29/mes\n• 1 certificado digital\n• Hasta 50 documentos/mes\n• Soporte por email\n• Ideal para profesionales independientes\n\n🚀 **Plan Profesional**: $79/mes\n• 5 certificados digitales\n• Hasta 500 documentos/mes\n• Soporte prioritario\n• Perfecto para pequeñas empresas\n\n🏢 **Plan Empresarial**: $199/mes\n• Certificados ilimitados\n• Documentos ilimitados\n• Soporte 24/7\n• Ideal para grandes empresas\n\n¿Cuál se adapta mejor a tus necesidades?',
      
      legal: '⚖️ **Validez Legal en Venezuela**:\n\nNuestras firmas electrónicas tienen **validez jurídica plena**:\n\n✅ Cumplen con la **Ley de Mensajes de Datos y Firmas Electrónicas**\n✅ **Certificadas por SUSCERTE** (autoridad competente)\n✅ **Equivalentes a firma manuscrita** tradicional\n✅ **Aceptadas en todo el territorio nacional**\n✅ Válidas para contratos, documentos legales, facturas, etc.\n\n¡Tienes la misma validez legal que una firma en papel!',
      
      seguridad: '🔒 **Seguridad de Nivel Bancario**:\n\nImplementamos las **más avanzadas tecnologías de seguridad**:\n\n🔐 **Cifrado AES-256** (estándar bancario)\n🔒 **Certificados SSL/TLS** para conexiones seguras\n🏗️ **Infraestructura PKI** robusta y confiable\n🔍 **Auditorías de seguridad** regulares\n🌐 **Cumplimiento** con estándares internacionales\n🛡️ **Protección contra ataques** cibernéticos\n\nTu información está completamente protegida con nosotros.',
      
      contacto: '📞 **Contacto y Soporte**:\n\nPuedes contactarnos de varias formas:\n\n📧 **Email**: info@authenology.com.ve\n📞 **Teléfono**: +58 212-555-0123\n📱 **WhatsApp**: +58 424-123-4567\n🕐 **Horario**: Lun-Vie 8:00-18:00\n🆘 **Soporte técnico**: 24/7 disponible\n📍 **Oficina**: Caracas, Venezuela\n\n¡Nuestro equipo está listo para ayudarte!'
    }

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: `Información sobre ${action}`,
      timestamp: new Date()
    }

    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: actionMessages[action],
      timestamp: new Date(),
      quickActions: [
        { text: '📝 Solicitar Demo', action: 'demo' },
        { text: '📞 Contactar Ventas', action: 'ventas' },
        { text: '📋 Más Información', action: 'mas_info' }
      ]
    }

    setMessages(prev => [...prev, userMessage, botMessage])
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      const response = await callGeminiAPI(inputValue)
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date(),
        quickActions: [
          { text: '📝 Solicitar Demo', action: 'demo' },
          { text: '📞 Contactar Ventas', action: 'ventas' },
          { text: '📋 Más Información', action: 'mas_info' }
        ]
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error al procesar mensaje:', error)
      
      // Enhanced fallback responses
      const fallbackResponse = getFallbackResponse(inputValue)
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: fallbackResponse,
        timestamp: new Date(),
        quickActions: [
          { text: '📝 Solicitar Demo', action: 'demo' },
          { text: '📞 Contactar Ventas', action: 'ventas' },
          { text: '📋 Más Información', action: 'mas_info' }
        ]
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const getFallbackResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('registro') || input.includes('registrar') || input.includes('inscribir')) {
      return '📝 **Proceso de Registro en Authenology**:\n\n1️⃣ **Registro en Línea**:\n• Visita nuestra plataforma web\n• Completa el formulario con tus datos\n• Sube los documentos requeridos\n• Realiza el pago correspondiente\n\n2️⃣ **Recaudos Necesarios**:\n• Cédula de identidad vigente (frente y reverso)\n• Comprobante de domicilio (no mayor a 3 meses)\n• Certificado de residencia fiscal (si aplica)\n• Documentos de constitución (para empresas)\n\n3️⃣ **Tiempos de Procesamiento**:\n• Registro básico: 24-48 horas\n• Verificación completa: 3-5 días hábiles\n• Entrega del certificado: Inmediata tras aprobación\n\n¿Te gustaría que te ayude con algún paso específico del proceso?'
    } else if (input.includes('recaudo') || input.includes('documento') || input.includes('requisito')) {
      return '📋 **Recaudos Requeridos para Registro**:\n\n🆔 **Documentos Personales**:\n• Cédula de identidad vigente (frente y reverso)\n• Comprobante de domicilio (no mayor a 3 meses)\n• Certificado de residencia fiscal (si aplica)\n\n🏢 **Para Empresas**:\n• Documentos de constitución\n• Poderes de representación\n• Registro mercantil actualizado\n\n🔐 **Verificación de Identidad**:\n• Validación biométrica (huella digital)\n• Verificación de documentos por SUSCERTE\n• Proceso de autenticación en dos pasos\n\n¿Necesitas ayuda con algún documento específico?'
    } else if (input.includes('firma') || input.includes('electrónic')) {
      return '🔐 **Nuestros Servicios de Firma Electrónica**:\n\n✅ **Certificados digitales** con validez legal completa\n🛡️ **Cifrado AES-256** para máxima seguridad\n⚖️ **Cumplimiento** con normativas SUSCERTE\n🇻🇪 **Disponibilidad** en toda Venezuela\n📄 **Documentos válidos**: contratos, facturas, declaraciones, etc.\n\n¿Te gustaría conocer nuestros planes o solicitar una demo personalizada?'
    } else if (input.includes('plan') || input.includes('precio') || input.includes('costo')) {
      return '💰 **Nuestros Planes y Precios**:\n\n💼 **Plan Básico**: $29/mes\n• 1 certificado digital\n• Hasta 50 documentos/mes\n• Soporte por email\n• Ideal para profesionales independientes\n\n🚀 **Plan Profesional**: $79/mes\n• 5 certificados digitales\n• Hasta 500 documentos/mes\n• Soporte prioritario\n• Perfecto para pequeñas empresas\n\n🏢 **Plan Empresarial**: $199/mes\n• Certificados ilimitados\n• Documentos ilimitados\n• Soporte 24/7\n• Ideal para grandes empresas\n\n¿Cuál se adapta mejor a tus necesidades?'
    } else if (input.includes('legal') || input.includes('validez') || input.includes('suscert')) {
      return '⚖️ **Validez Legal en Venezuela**:\n\nNuestras firmas electrónicas tienen **validez jurídica plena**:\n\n✅ Cumplen con la **Ley de Mensajes de Datos y Firmas Electrónicas**\n✅ **Certificadas por SUSCERTE** (autoridad competente)\n✅ **Equivalentes a firma manuscrita** tradicional\n✅ **Aceptadas en todo el territorio nacional**\n✅ Válidas para contratos, documentos legales, facturas, etc.\n\n¡Tienes la misma validez legal que una firma en papel!'
    } else if (input.includes('seguridad') || input.includes('cifrado') || input.includes('protección')) {
      return '🔒 **Seguridad de Nivel Bancario**:\n\nImplementamos las **más avanzadas tecnologías de seguridad**:\n\n🔐 **Cifrado AES-256** (estándar bancario)\n🔒 **Certificados SSL/TLS** para conexiones seguras\n🏗️ **Infraestructura PKI** robusta y confiable\n🔍 **Auditorías de seguridad** regulares\n🌐 **Cumplimiento** con estándares internacionales\n🛡️ **Protección contra ataques** cibernéticos\n\nTu información está completamente protegida con nosotros.'
    } else if (input.includes('contacto') || input.includes('soporte') || input.includes('ayuda')) {
      return '📞 **Contacto y Soporte**:\n\nPuedes contactarnos de varias formas:\n\n📧 **Email**: info@authenology.com.ve\n📞 **Teléfono**: +58 212-555-0123\n📱 **WhatsApp**: +58 424-123-4567\n🕐 **Horario**: Lun-Vie 8:00-18:00\n🆘 **Soporte técnico**: 24/7 disponible\n📍 **Oficina**: Caracas, Venezuela\n\n¡Nuestro equipo está listo para ayudarte!'
    } else if (input.includes('demo') || input.includes('prueba') || input.includes('test')) {
      return '🎯 **Demo Personalizada Gratuita**:\n\n¡Perfecto! Para agendar una **demo personalizada**:\n\n📧 Envía un email a: demo@authenology.com.ve\n📞 O llama al: +58 212-555-0123\n⏰ Te contactaremos en **menos de 2 horas**\n🎯 La demo incluye casos de uso específicos para tu empresa\n💡 Verás ejemplos prácticos de implementación\n\n¡Es completamente gratuita y sin compromiso!'
    } else if (input.includes('hola') || input.includes('buenos días') || input.includes('buenas')) {
      return '¡Hola! 👋 Soy el asistente virtual de Authenology. Estoy aquí para ayudarte con:\n\n📋 Información sobre firma electrónica\n📝 Proceso de registro y recaudos\n💰 Nuestros planes y precios\n⚖️ Aspectos legales y de seguridad\n📞 Contacto y soporte\n\n¿En qué área específica puedo ayudarte hoy?'
    } else {
      return '¡Gracias por tu consulta! 🤖 Como asistente virtual de Authenology, puedo ayudarte con:\n\n📋 **Información detallada** sobre firma electrónica\n📝 **Proceso de registro** y recaudos necesarios\n💰 **Planes y precios** de nuestros servicios\n⚖️ **Aspectos legales** y normativas SUSCERTE\n🔒 **Seguridad** y tecnologías de cifrado\n📞 **Contacto** y soporte técnico\n\n¿En qué área específica puedo ayudarte? También puedes solicitar una demo gratuita si quieres ver nuestro sistema en acción.'
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickReplies = [
    '¿Cómo me registro?',
    '¿Qué recaudos necesito?',
    '¿Cuáles son sus planes?',
    '¿Es legal en Venezuela?',
    'Solicitar demo'
  ]

  return (
    <>
      {/* Enhanced Chatbot Button */}
      <div className="chatbot-container">
        <motion.button
          onClick={onToggle}
          className="chatbot-button"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Abrir chat"
        >
          <div className="relative">
            <Fingerprint className="w-6 h-6" />
            <Lock className="w-3 h-3 absolute -top-1 -right-1 text-primary-400" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
            />
          </div>
        </motion.button>
      </div>

      {/* Enhanced Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="chatbot-window"
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Bot className="w-6 h-6" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Asistente Authenology</h3>
                    <p className="text-xs text-white/80 flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      IA • Respuesta inteligente
                    </p>
                  </div>
                </div>
                <button
                  onClick={onToggle}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Enhanced Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`rounded-lg px-3 py-2 ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="whitespace-pre-line text-sm">{message.content}</div>
                      <div className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-700" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-1">
                        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                        <span className="text-sm text-gray-600">Pensando...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Quick Actions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Respuestas rápidas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {messages[0].quickActions?.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-700 px-3 py-1 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {action.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions for other messages */}
            {messages.length > 1 && messages[messages.length - 1]?.quickActions && (
              <div className="p-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {action.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot 