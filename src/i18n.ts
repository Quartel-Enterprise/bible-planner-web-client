import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "app_title": "Bible Planner",
      "app_description": "Read the entire Bible in 1 year. Organize your reading, track your progress, and dive deeper into the Word with the ultimate Bible companion.",
      "coming_soon": "Coming Soon",
      "features": "Why Choose Bible Planner?",
      "features_intro": "Why Choose",
      "download": "Download Now",
      "download_short": "Download",
      "reading_plans": "Structured Reading Plans",
      "reading_plans_desc": "Stay consistent with curated plans. Choose from Chronological, Canonical, or customize your own path through Scripture.",
      "progress_tracking": "Visual Progress Tracking",
      "progress_tracking_desc": "Watch your faith grow. Track every chapter and verse to see how far you've come in your journey.",
      "offline_first": "Always Available",
      "offline_first_desc": "Your devotionals, anywhere. Access your plans and progress offline, with zero distractions.",
      "theming": "Beautifully Personal",
      "theming_desc": "A reading experience that adapts to you. Light, dark, and dynamic themes that feel right at home on your device.",
      "download_suggestion": "Ready to dive deeper? Get the app now.",
      "privacy_policy": "Privacy Policy",
      "terms_of_service": "Terms of Service",
      "language": "Language",
      "footer_text": "© {{year}} Quartel Enterprise. All rights reserved",
      "language_en": "English",
      "language_pt": "Portuguese",
      "language_es": "Spanish",
      "option_android": "Android",
      "option_ios": "iOS"
    }
  },
  pt: {
    translation: {
      "app_title": "Bible Planner",
      "app_description": "Leia a Bíblia inteira em 1 ano. Organize sua leitura, acompanhe seu progresso e mergulhe na Palavra com o companheiro definitivo.",
      "coming_soon": "Em Breve",
      "features": "Por que o Bible Planner?",
      "features_intro": "Por que o",
      "download": "Baixe Agora",
      "download_short": "Baixar",
      "reading_plans": "Planos de Leitura Estruturados",
      "reading_plans_desc": "Mantenha a constância com planos curados. Escolha entre Cronológico, Canônico ou personalize seu próprio caminho pelas Escrituras.",
      "progress_tracking": "Acompanhamento Visual",
      "progress_tracking_desc": "Veja sua fé crescer. Acompanhe cada capítulo e versículo para ver o quanto você avançou em sua jornada.",
      "offline_first": "Sempre Disponível",
      "offline_first_desc": "Seus devocionais, em qualquer lugar. Acesse seus planos e progresso offline, sem distrações.",
      "theming": "Belamente Pessoal",
      "theming_desc": "Uma experiência de leitura que se adapta a você. Temas claros, escuros e dinâmicos que se sentem em casa no seu dispositivo.",
      "download_suggestion": "Pronto para mergulhar mais fundo? Baixe o app agora.",
      "privacy_policy": "Política de Privacidade",
      "terms_of_service": "Termos de Serviço",
      "language": "Idioma",
      "footer_text": "© {{year}} Quartel Enterprise. Todos os direitos reservados",
      "language_en": "Inglês",
      "language_pt": "Português",
      "language_es": "Espanhol",
      "option_android": "Android",
      "option_ios": "iOS"
    }
  },
  es: {
    translation: {
      "app_title": "Bible Planner",
      "app_description": "Lee toda la Biblia en 1 año. Organiza tu lectura, sigue tu progreso y profundiza en la Palabra con el compañero definitivo.",
      "coming_soon": "Próximamente",
      "features": "¿Por qué Bible Planner?",
      "features_intro": "¿Por qué",
      "download": "Descargar Ahora",
      "download_short": "Descargar",
      "reading_plans": "Planes de Lectura Estructurados",
      "reading_plans_desc": "Mantén la constancia con planes seleccionados. Elige entre Cronológico, Canónico o personaliza tu propio camino a través de las Escrituras.",
      "progress_tracking": "Seguimiento Visual",
      "progress_tracking_desc": "Mira crecer tu fe. Sigue cada capítulo y versículo para ver cuánto has avanzado en tu viaje.",
      "offline_first": "Siempre Disponible",
      "offline_first_desc": "Tus devocionales, en cualquier lugar. Accede a tus planes y progreso sin conexión, sin distracciones.",
      "theming": "Bellamente Personal",
      "theming_desc": "Una experiencia de lectura que se adapta a ti. Temas claros, oscuros y dinámicos que se sienten como en casa en tu dispositivo.",
      "download_suggestion": "¿Listo para profundizar? Obtén la aplicación ahora.",
      "privacy_policy": "Política de Privacidad",
      "terms_of_service": "Términos de Servicio",
      "language": "Idioma",
      "footer_text": "© {{year}} Quartel Enterprise. Todos los derechos reservados",
      "language_en": "Inglés",
      "language_pt": "Portugués",
      "language_es": "Español",
      "option_android": "Android",
      "option_ios": "iOS"
    }
  }
};



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
