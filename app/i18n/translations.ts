// translations_parallel.ts

export type Language = "en" | "es";

interface ProductItem {
  title: string;
  description: string;
}

interface ContactForm {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
}

interface AboutTeam {
  title: string;
  description: string;
  trader1: string;
  role1: string;
  trader2: string;
  role2: string;
}

export type Translations = {
  nav: Record<string, string>;
  hero: Record<string, string>;
  about: {
    title: string;
    subtitle: string;
    description: string;
    team: AboutTeam;
  };
  products: {
    title: string;
    subtitle: string;
    description: string;
    items: ProductItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: ContactForm;
  };
  footer: Record<string, string>;
};

const nav = {
  home: { en: "Home", es: "Inicio" },
  about: { en: "About", es: "Nosotros" },
  products: { en: "Products", es: "Productos" },
  contact: { en: "Contact", es: "Contacto" },
};

const hero = {
  headline: { en: "Trading Engineering", es: "Ingeniería del Trading" },
  subheadline: { en: "Our practical approach to the ICT methodology", es: "Nuestra visión práctica del método ICT" },
  description: {
    en: "A new way to understand trading with ICT: simple, structured, and focused on EUR/USD.",
    es: "Una nueva forma de entender el trading con ICT: simple, estructurada y enfocada en el EUR/USD.",
  },
  cta1: { en: "Contact Us", es: "Contactanos" },
  cta2: { en: "Coming Soon", es: "Próximamente" },
};

const about = {
  title: { en: "About us", es: "Acerca de nosotros" },
  subtitle: { en: "We apply logical thinking, structure, and real experience to market analysis.", es: "Aplicamos pensamiento lógico, estructura y experiencia real al análisis de mercados." },
  description: {
    en: "Fractal Trading was born from the collaboration of two engineers passionate about trading. With a focus on the EUR/USD pair, we build clear and efficient systems based on years of experience, data analysis, and one simple principle: in trading, less is more.",
    es: "Fractal Trading nace del encuentro entre dos ingenieros apasionados por el trading. Con un enfoque centrado en el par EUR/USD, diseñamos sistemas claros y eficientes basados en años de experiencia, análisis de datos y una premisa simple: en trading, menos es más.",
  },
  team: {
    title: { en: "The Team", es: "El Equipo" },
    description: {
      en: "We focus on teaching and building tools that enhance your trading performance day by day.",
      es: "Nos enfocamos en enseñar y construir herramientas que potencien tu operativa día a día.",
    },
    trader1: { en: "Leandro Lozano", es: "Leandro Lozano" },
    role1: { en: "Co-Fundador/ Trader", es: "Co-Fundador/ Trader" },
    trader2: { en: "Gustavo Paz", es: "Gustavo Paz" },
    role2: { en: "Co-Fundador/ Trader", es: "Co-Fundador/ Trader" },
  },
};

const products = {
  title: { en: "Fractal Trading Products", es: "Productos de Fractal Trading" },
  subtitle: { en: "Coming Soon", es: "Próximamente" },
  description: {
    en: "Discover our upcoming suite of professional trading tools and services.",
    es: "Descubre nuestra próxima suite de herramientas y servicios profesionales de trading.",
  },
  items: [
    {
      title: { en: "Daily Trading Operations", es: "Operativa Diaria" },
      description: {
        en: "Access our daily trading operations and learn from real-time market decisions.",
        es: "Conoce nuestra operativa diaria y aprende de decisiones de mercado en tiempo real.",
      },
    },
    {
      title: { en: "Structured Trading Plan", es: "Plan de Trading Estructurado" },
      description: {
        en: "Get our comprehensive trading plan with proven strategies and risk management.",
        es: "Accede a nuestro plan de trading integral con estrategias probadas y gestión de riesgo.",
      },
    },
    {
      title: { en: "Macro News Analysis", es: "Análisis de Noticias Macro" },
      description: {
        en: "Read our analysis of news that impacts EUR/USD price movements.",
        es: "Accede a nuestro análisis de noticias que tienen impacto en el precio del EUR/USD.",
      },
    },
    {
      title: { en: "Asia Session Trading Bot", es: "Bot de Trading Sesión Asia" },
      description: {
        en: "Use our automated trading bot designed for the Asian trading session.",
        es: "Accede a nuestro bot del modelo operativo diseñado para la sesión asiática.",
      },
    },
    {
      title: { en: "Professional Trading Courses", es: "Cursos Profesionales" },
      description: {
        en: "Practical and comprehensive training to improve your trading.",
        es: "Formación práctica y completa para mejorar tu operativa.",
      },
    },
  ],
};

const contact = {
  title: { en: "Get in Touch", es: "¿Tenés dudas? Escribinos." },
  subtitle: { en: "We’re here to help you trade better.", es: "Estamos para ayudarte a operar mejor." },
  description: {
    en: "Ask us anything about our tools, approach, or ICT methodology. We personally reply to every message.",
    es: "Consultanos lo que necesites sobre nuestras herramientas, nuestra visión o sobre el enfoque ICT. Respondemos personalmente cada mensaje.",
  },
  form: {
    name: { en: "Full Name", es: "Nombre Completo" },
    namePlaceholder: { en: "Full name", es: "Nombre completo" },
    email: { en: "Email Address", es: "Correo Electrónico" },
    emailPlaceholder: { en: "Email address", es: "Correo Electrónico" },
    message: { en: "Message", es: "Mensaje" },
    messagePlaceholder: {
      en: "Tell us what you'd like to know or how we can help.",
      es: "Contanos qué te gustaría saber, o cómo te podemos ayudar.",
    },
    submit: { en: "Send message", es: "Enviar consulta" },
  },
};

const footer = {
  copyright: {
    en: "© 2025 Gustavo Paz. All rights reserved.",
    es: "© 2025 Gustavo Paz. Todos los derechos reservados.",
  },
  description: {
    en: "Trading engineers",
    es: "Ingenieros del trading",
  },
};

export const translations: Record<Language, Translations> = {
  en: {
    nav: Object.fromEntries(Object.entries(nav).map(([key, value]) => [key, value.en])),
    hero: Object.fromEntries(Object.entries(hero).map(([key, value]) => [key, value.en])),
    about: {
      title: about.title.en,
      subtitle: about.subtitle.en,
      description: about.description.en,
      team: {
        title: about.team.title.en,
        description: about.team.description.en,
        trader1: about.team.trader1.en,
        role1: about.team.role1.en,
        trader2: about.team.trader2.en,
        role2: about.team.role2.en,
      },
    },
    products: {
      title: products.title.en,
      subtitle: products.subtitle.en,
      description: products.description.en,
      items: products.items.map(item => ({
        title: item.title.en,
        description: item.description.en,
      })),
    },
    contact: {
      title: contact.title.en,
      subtitle: contact.subtitle.en,
      description: contact.description.en,
      form: {
        name: contact.form.name.en,
        namePlaceholder: contact.form.namePlaceholder.en,
        email: contact.form.email.en,
        emailPlaceholder: contact.form.emailPlaceholder.en,
        message: contact.form.message.en,
        messagePlaceholder: contact.form.messagePlaceholder.en,
        submit: contact.form.submit.en,
      },
    },
    footer: Object.fromEntries(Object.entries(footer).map(([key, value]) => [key, value.en])),
  },
  es: {
    nav: Object.fromEntries(Object.entries(nav).map(([key, value]) => [key, value.es])),
    hero: Object.fromEntries(Object.entries(hero).map(([key, value]) => [key, value.es])),
    about: {
      title: about.title.es,
      subtitle: about.subtitle.es,
      description: about.description.es,
      team: {
        title: about.team.title.es,
        description: about.team.description.es,
        trader1: about.team.trader1.es,
        role1: about.team.role1.es,
        trader2: about.team.trader2.es,
        role2: about.team.role2.es,
      },
    },
    products: {
      title: products.title.es,
      subtitle: products.subtitle.es,
      description: products.description.es,
      items: products.items.map(item => ({
        title: item.title.es,
        description: item.description.es,
      })),
    },
    contact: {
      title: contact.title.es,
      subtitle: contact.subtitle.es,
      description: contact.description.es,
      form: {
        name: contact.form.name.es,
        namePlaceholder: contact.form.namePlaceholder.es,
        email: contact.form.email.es,
        emailPlaceholder: contact.form.emailPlaceholder.es,
        message: contact.form.message.es,
        messagePlaceholder: contact.form.messagePlaceholder.es,
        submit: contact.form.submit.es,
      },
    },
    footer: Object.fromEntries(Object.entries(footer).map(([key, value]) => [key, value.es])),
  },
};
