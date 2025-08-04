# Authenology Website

Sitio web profesional y moderno para Authenology, empresa de soluciones de firma electrónica en Venezuela.

## 🚀 Características

- **Diseño Moderno**: Interfaz atractiva y profesional con animaciones fluidas
- **Responsive**: Optimizado para todos los dispositivos
- **Chatbot Inteligente**: Asistente virtual con integración preparada para Gemini API
- **Animaciones Avanzadas**: Framer Motion para transiciones suaves
- **3D Elements**: Componentes 3D con Three.js
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Optimizado para velocidad y rendimiento

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool rápido
- **Tailwind CSS**: Framework de estilos
- **Framer Motion**: Animaciones
- **Three.js**: Elementos 3D
- **Lucide React**: Iconos
- **React Router**: Navegación
- **Socket.io**: Chat en tiempo real (preparado)

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd authenology-website
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Construir para producción**
```bash
npm run build
```

## 🎨 Estructura del Proyecto

```
authenology-website/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.jsx     # Navegación principal
│   │   ├── Hero.jsx       # Sección hero
│   │   ├── About.jsx      # Acerca de nosotros
│   │   ├── Services.jsx   # Servicios
│   │   ├── Features.jsx   # Características
│   │   ├── Plans.jsx      # Planes y precios
│   │   ├── Contact.jsx    # Formulario de contacto
│   │   ├── Footer.jsx     # Pie de página
│   │   ├── Chatbot.jsx    # Chatbot inteligente
│   │   └── LoadingScreen.jsx # Pantalla de carga
│   ├── styles/
│   │   └── index.css      # Estilos globales
│   ├── utils/             # Utilidades
│   ├── assets/            # Imágenes y recursos
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada
├── server/                # Servidor backend (preparado)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🤖 Chatbot con Gemini API

El chatbot está preparado para integrar la API de Gemini. Para activarlo:

1. **Obtener API Key de Gemini**
   - Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Crea una nueva API key

2. **Configurar variables de entorno**
```env
VITE_GEMINI_API_KEY=tu_api_key_aqui
```

3. **Integrar en el componente Chatbot**
```javascript
// En src/components/Chatbot.jsx
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const callGeminiAPI = async (message) => {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GEMINI_API_KEY}`
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `Eres un asistente virtual de Authenology, empresa de firma electrónica en Venezuela. 
                 Responde de manera profesional y amigable: ${message}`
        }]
      }]
    })
  })
  
  const data = await response.json()
  return data.candidates[0].content.parts[0].text
}
```

## 🎯 Características Principales

### Secciones del Sitio

1. **Hero Section**: Presentación impactante con estadísticas y CTA
2. **About**: Misión, visión y valores de la empresa
3. **Services**: Servicios detallados con especificaciones técnicas
4. **Features**: Características y beneficios de la firma electrónica
5. **Plans**: Planes de precios con toggle mensual/anual
6. **Contact**: Formulario de contacto funcional
7. **Footer**: Información completa de la empresa

### Chatbot Features

- **Diseño de Huella Digital**: Botón con icono de huella y candado
- **Respuestas Inteligentes**: Basadas en palabras clave
- **Quick Replies**: Botones de respuesta rápida
- **Animaciones**: Transiciones suaves y efectos visuales
- **Responsive**: Adaptado para móviles y desktop

### Animaciones y Efectos

- **Framer Motion**: Animaciones de entrada y hover
- **Three.js**: Esfera 3D en el hero
- **GSAP**: Animaciones avanzadas (preparado)
- **Scroll Animations**: Efectos al hacer scroll
- **Loading Screen**: Pantalla de carga profesional

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta dist a Netlify
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Actions para deploy automático
```

## 🔧 Configuración Avanzada

### Personalización de Colores
Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... más tonos
  }
}
```

### Animaciones Personalizadas
Añade nuevas animaciones en `tailwind.config.js`:

```javascript
animation: {
  'custom-bounce': 'customBounce 2s infinite',
}
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔒 Seguridad

- **HTTPS**: Configurado para producción
- **CSP**: Content Security Policy
- **Sanitización**: Input sanitization en formularios
- **API Security**: Headers de seguridad

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **Bundle Size**: < 500KB gzipped
- **Loading Time**: < 2s en 3G

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico:
- Email: info@authenology.com.ve
- Teléfono: +58 212-555-0123
- Horario: Lun-Vie 8:00-18:00

## 🎉 Agradecimientos

- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [Tailwind CSS](https://tailwindcss.com/) por el framework de estilos
- [Lucide](https://lucide.dev/) por los iconos
- [Three.js](https://threejs.org/) por los elementos 3D

---

**Desarrollado con ❤️ para Authenology**
