export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    language: {
      toggleLabel: "Change language",
      english: "English",
      spanish: "Spanish",
    },
    nav: {
      about: "About",
      projects: "Projects",
      stack: "Stack",
      journey: "Journey",
      github: "GitHub",
      contact: "Contact",
    },
    common: {
      core: "core",
      categories: {
        All: "All",
        Frontend: "Frontend",
        "Full-Stack": "Full-Stack",
        Backend: "Backend",
        Database: "Database",
        Cloud: "Cloud",
        Experimental: "Experimental",
      },
      statuses: {
        Completed: "Completed",
        "In Progress": "In Progress",
        Experimental: "Experimental",
        Placeholder: "Placeholder",
      },
      skillLevels: {
        Learning: "Learning",
        Comfortable: "Comfortable",
        Exploring: "Exploring",
      },
    },
    site: {
      role: "Software Engineering Student / Full-Stack Developer",
      headline: "Software Engineering Student building my path one project at a time.",
      description:
        "I enjoy turning ideas into web projects, understanding what happens behind the scenes, and shaping interfaces that feel intentional.",
      quote: "Every project is a new level to unlock.",
    },
    hero: {
      badge: "Frontend + Backend + Databases",
      currentFocus: "current focus",
      personalNote: "Personal note",
      learningPath: "learning path",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      imageAlt:
        "Japanese-inspired gaming illustration used as the main visual for Jandroel's portfolio.",
      stats: [
        ["current.arc", "Software Engineering Student"],
        ["main.focus", "Interfaces, APIs, and data"],
        ["motto", "Every project is a new level to unlock."],
      ],
    },
    terminal: {
      lines: [
        ["whoami", "Jandroel - Software Engineering Student"],
        ["focus --current", "Interfaces, APIs, and data models"],
        ["learning --mode", "Building real projects from class concepts"],
        ["review --assist", "Question assumptions before shipping"],
        ["status", "Learning, building, improving"],
      ],
      saveLabel: "portfolio.save",
      consoleLine: "console.log('building...')",
    },
    about: {
      eyebrow: "Profile",
      title: "About Me",
      description:
        "Building, learning, and improving through projects while focusing on clear systems, clean interfaces, and thoughtful implementation.",
      body: "I'm Gustavo Jandroel Aguirre Rodríguez, a Software Engineering student focused on building web projects that connect clean interfaces with reliable backend logic and well-structured data.",
      mottoLabel: "personal motto",
      focusCards: [
        {
          title: "Frontend",
          label: "UI",
          description:
            "Interfaces with clean hierarchy, responsiveness, and motion details.",
        },
        {
          title: "Backend",
          label: "API",
          description:
            "API logic, service structure, and maintainable server-side patterns.",
        },
        {
          title: "Databases",
          label: "DB",
          description:
            "Data models, queries, records, and reliable information structure.",
        },
        {
          title: "Cloud",
          label: "OPS",
          description:
            "Deployment concepts, infrastructure basics, and production workflows.",
        },
        {
          title: "Tools",
          label: "DEV",
          description:
            "Git, editors, API clients, containers, and practical engineering habits.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured Projects",
      description:
        "A curated selection of builds presented as compact case files with visual, technical, and learning context.",
      tabsLabel: "Project categories",
      card: {
        caseFile: "Case file",
        editablePlaceholder: "Editable placeholder",
        viewCode: "View Code",
        liveDemo: "Live Demo",
        conceptPreview: "Visual concept",
        interfaceMap: "Interface map",
        galleryLabel: "Project preview gallery for {title}",
        previousImage: "Previous project image",
        nextImage: "Next project image",
        goToImage: "Go to image {number}",
        imagePosition: "Image {current} of {total}",
        conceptImageAlt: "Concept preview for {title}",
        schematicImageAlt: "Interface structure preview for {title}",
        viewCodeAria: "View code for {title}",
        liveDemoAria: "Open live demo for {title}",
      },
      items: {
        "redevops-lab": {
          description:
            "DevOps learning lab that analyzes public GitHub repositories and turns them into actionable learning paths.",
          longDescription:
            "A monorepo with a Next.js web app, NestJS API, repository analyzer, rule-based scoring engine, and generated learning reports.",
          highlights: [
            "Rule-based DevOps maturity score",
            "Repository analyzer and stack detection",
            "Learning paths, lab cards, and Markdown export",
          ],
        },
        "gestobra-frontend": {
          description:
            "Angular dashboard for construction management, connected to a JWT-secured API with role-aware workflows.",
          longDescription:
            "A dense administrative interface with authentication, role guards, responsive navigation, operational modules, reports, and testing setup.",
          highlights: [
            "JWT authentication and role-based guards",
            "Operational modules for projects, inventory, costs, and reports",
            "Responsive admin shell with toasts and dialogs",
          ],
        },
        "gestobra-backend": {
          description:
            "Spring Boot REST API for managing construction projects, clients, workers, materials, progress, costs, and reports.",
          longDescription:
            "A backend service with domain modules, DTOs, JWT security, environment profiles, Swagger documentation, PostgreSQL, Docker, and CI.",
          highlights: [
            "Domain modules for construction operations",
            "JWT security, DTOs, profiles, and Swagger docs",
            "PostgreSQL and Docker-ready local workflow",
          ],
        },
        clickmemories: {
          description:
            "Spanish portfolio website for a photography and video studio, built with an editorial visual system.",
          longDescription:
            "A responsive Astro site with typed portfolio content, service pages, SEO metadata, gallery interactions, documentation, and smoke tests.",
          highlights: [
            "Editorial landing and service-oriented structure",
            "Typed portfolio content with detail pages",
            "Responsive UI, SEO metadata, and Playwright smoke test",
          ],
        },
      },
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Technologies & Tools I Use",
      description:
        "A focused mix of languages, frameworks, databases, cloud platforms, and workflow tools arranged like a character stat screen.",
      groups: {
        "Programming Languages": {
          title: "Programming Languages",
          description: "Core languages for problem solving and application logic.",
        },
        Frontend: {
          title: "Frontend",
          description: "Tools for building polished, responsive interfaces.",
        },
        "Backend & Frameworks": {
          title: "Backend & Frameworks",
          description: "Server-side foundations and API development.",
        },
        Databases: {
          title: "Databases",
          description: "Structured data, documents, and relational thinking.",
        },
        Cloud: {
          title: "Cloud",
          description: "Deployment and infrastructure skills in progress.",
        },
        Tools: {
          title: "Tools",
          description: "Daily tools for versioning, testing, and development.",
        },
        "Assisted Workflow": {
          title: "Assisted Workflow",
          description:
            "Research, validation, and iteration habits with assistive tools kept as a support layer.",
        },
        Agile: {
          title: "Agile",
          description: "Planning habits for steady project progress.",
        },
      },
      skills: {
        Prompting: "Prompting",
        "Code Review Assistants": "Code Review Assistants",
        "Research & Docs": "Research & Docs",
      },
    },
    timeline: {
      eyebrow: "Journey",
      title: "My Developer Journey",
      description:
        "A simple timeline of what I am learning, building, and improving, framed like unlocked chapters.",
      items: [
        {
          title: "Learning Software Engineering",
          period: "Now",
          description:
            "Studying software foundations, practicing problem solving, and connecting theory with real projects.",
          tags: ["Software Engineering", "Learning", "Practice"],
        },
        {
          title: "Building Web Projects",
          period: "In progress",
          description:
            "Creating frontend experiences that focus on structure, responsiveness, and clean interaction details.",
          tags: ["Frontend", "React", "UI"],
        },
        {
          title: "Exploring Backend & Databases",
          period: "In progress",
          description:
            "Improving backend logic, API thinking, and data modeling with relational and document databases.",
          tags: ["Backend", "APIs", "Databases"],
        },
        {
          title: "Improving Cloud & DevOps Skills",
          period: "Exploring",
          description:
            "Learning deployment workflows, cloud concepts, and the tools that help projects run reliably.",
          tags: ["Cloud", "Deploy", "DevOps"],
        },
        {
          title: "Practicing Clean Code & Better Architecture",
          period: "Always",
          description:
            "Refactoring, organizing components, and building habits that make software easier to maintain.",
          tags: ["Clean Code", "Architecture", "Growth"],
        },
      ],
    },
    github: {
      eyebrow: "GitHub",
      title: "GitHub & Projects",
      description:
        "My GitHub is where I share experiments, learning projects, and ideas while the portfolio becomes a more personal build archive.",
      visit: "Visit GitHub",
      viewProjects: "View Projects",
      gridTitle: "Learning Archive",
      gridNote:
        "A visual map of repositories, experiments, and notes that document my progress.",
      visualRepresentation: "project map",
      viewRepository: "View repository",
    },
    process: {
      eyebrow: "Process",
      title: "How I Build",
      description:
        "A practical workflow for turning rough ideas into something I can test, show, and improve.",
      steps: [
        {
          title: "Plan",
          description:
            "Understand the goal, define the structure, and decide the right tools.",
        },
        {
          title: "Design",
          description:
            "Create clean interfaces with attention to hierarchy, spacing, and user experience.",
        },
        {
          title: "Code",
          description:
            "Build reusable components with TypeScript, clear data structures, and maintainable patterns.",
        },
        {
          title: "Test",
          description:
            "Check responsiveness, accessibility, edge cases, and performance.",
        },
        {
          title: "Improve",
          description:
            "Use assisted review, refactor with intent, polish details, and learn from every project.",
        },
      ],
    },
    contact: {
      chip: "available_for_learning_projects",
      title: "Let's build something.",
      description:
        "I'm always exploring new technologies and creating projects that help me grow as a developer.",
      sendEmail: "Send Email",
      viewGithub: "View GitHub",
      downloadCv: "Download CV",
      info: {
        channel: "channel",
        github: "github",
        linkedin: "linkedin",
        status: "status",
        statusValue: "learning.building",
      },
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript, Tailwind CSS and Motion.",
      rights: "All rights reserved.",
    },
  },
  es: {
    language: {
      toggleLabel: "Cambiar idioma",
      english: "Inglés",
      spanish: "Español",
    },
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      stack: "Stack",
      journey: "Camino",
      github: "GitHub",
      contact: "Contacto",
    },
    common: {
      core: "base",
      categories: {
        All: "Todos",
        Frontend: "Frontend",
        "Full-Stack": "Full-Stack",
        Backend: "Backend",
        Database: "Datos",
        Cloud: "Cloud",
        Experimental: "Experimental",
      },
      statuses: {
        Completed: "Completado",
        "In Progress": "En progreso",
        Experimental: "Experimental",
        Placeholder: "Editable",
      },
      skillLevels: {
        Learning: "Aprendiendo",
        Comfortable: "Cómodo",
        Exploring: "Explorando",
      },
    },
    site: {
      role: "Estudiante de Ingeniería de Software / Full-Stack Developer",
      headline:
        "Estudiante de Ingeniería de Software construyendo mi camino proyecto a proyecto.",
      description:
        "Me gusta convertir ideas en proyectos web, entender lo que ocurre detrás de la interfaz y construir experiencias con intención.",
      quote: "Cada proyecto es un nuevo nivel por desbloquear.",
    },
    hero: {
      badge: "Frontend + Backend + Bases de datos",
      currentFocus: "enfoque actual",
      personalNote: "Nota personal",
      learningPath: "ruta de aprendizaje",
      viewProjects: "Ver proyectos",
      contactMe: "Contactarme",
      imageAlt:
        "Ilustración gamer de inspiración japonesa usada como imagen principal del portafolio de Jandroel.",
      stats: [
        ["current.arc", "Estudiante de Ingeniería de Software"],
        ["main.focus", "Interfaces, APIs y datos"],
        ["motto", "Cada proyecto es un nuevo nivel por desbloquear."],
      ],
    },
    terminal: {
      lines: [
        ["whoami", "Jandroel - Estudiante de Ingeniería de Software"],
        ["focus --current", "Interfaces, APIs y modelos de datos"],
        ["learning --mode", "Construyendo proyectos reales desde conceptos de clase"],
        ["review --assist", "Cuestionar supuestos antes de publicar"],
        ["status", "Aprendiendo, construyendo, mejorando"],
      ],
      saveLabel: "portfolio.save",
      consoleLine: "console.log('building...')",
    },
    about: {
      eyebrow: "Perfil",
      title: "Sobre mí",
      description:
        "Construyo, aprendo y mejoro a través de proyectos, enfocándome en sistemas claros, interfaces limpias y soluciones bien cuidadas.",
      body: "Soy Gustavo Jandroel Aguirre Rodríguez, estudiante de Ingeniería de Software, y me enfoco en crear proyectos web que conecten interfaces limpias con lógica backend confiable y datos bien estructurados.",
      mottoLabel: "motto personal",
      focusCards: [
        {
          title: "Frontend",
          label: "UI",
          description:
            "Interfaces con buena jerarquía, responsividad y detalles de movimiento.",
        },
        {
          title: "Backend",
          label: "API",
          description: "Lógica de APIs, estructura de servicios y patrones mantenibles.",
        },
        {
          title: "Bases de datos",
          label: "DB",
          description:
            "Modelos de datos, consultas, registros y estructura de información.",
        },
        {
          title: "Cloud",
          label: "OPS",
          description: "Conceptos de despliegue, infraestructura y flujos de producción.",
        },
        {
          title: "Herramientas",
          label: "DEV",
          description:
            "Git, editores, clientes API, contenedores y hábitos prácticos de desarrollo.",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Una selección de builds presentados como fichas compactas con contexto visual, técnico y de aprendizaje.",
      tabsLabel: "Categorías de proyectos",
      card: {
        caseFile: "Ficha",
        editablePlaceholder: "Placeholder editable",
        viewCode: "Ver código",
        liveDemo: "Demo",
        conceptPreview: "Concepto visual",
        interfaceMap: "Mapa de interfaz",
        galleryLabel: "Galería de vistas del proyecto {title}",
        previousImage: "Imagen anterior del proyecto",
        nextImage: "Siguiente imagen del proyecto",
        goToImage: "Ir a la imagen {number}",
        imagePosition: "Imagen {current} de {total}",
        conceptImageAlt: "Vista conceptual de {title}",
        schematicImageAlt: "Vista de la estructura de interfaz de {title}",
        viewCodeAria: "Ver código de {title}",
        liveDemoAria: "Abrir demo de {title}",
      },
      items: {
        "redevops-lab": {
          description:
            "Laboratorio de aprendizaje DevOps que analiza repositorios públicos de GitHub y los convierte en rutas accionables.",
          longDescription:
            "Monorepo con app Next.js, API NestJS, analizador de repositorios, scoring por reglas y reportes de aprendizaje.",
          highlights: [
            "Score de madurez DevOps basado en reglas",
            "Analizador de repositorios y detección de stack",
            "Rutas de aprendizaje, lab cards y exportación Markdown",
          ],
        },
        "gestobra-frontend": {
          description:
            "Dashboard Angular para gestión de obras, conectado a una API con JWT y flujos según rol.",
          longDescription:
            "Interfaz administrativa con autenticación, guards por rol, navegación responsive, módulos operativos, reportes y pruebas.",
          highlights: [
            "Autenticación JWT y guards basados en roles",
            "Módulos para proyectos, inventario, costos y reportes",
            "Shell administrativo responsive con toasts y diálogos",
          ],
        },
        "gestobra-backend": {
          description:
            "API REST con Spring Boot para gestionar proyectos, clientes, trabajadores, materiales, avances, costos y reportes.",
          longDescription:
            "Servicio backend con módulos de dominio, DTOs, seguridad JWT, perfiles de entorno, Swagger, PostgreSQL, Docker y CI.",
          highlights: [
            "Módulos de dominio para operaciones de obra",
            "Seguridad JWT, DTOs, perfiles y documentación Swagger",
            "Flujo local listo para PostgreSQL y Docker",
          ],
        },
        clickmemories: {
          description:
            "Sitio web en español para un estudio de fotografía y video, construido con un sistema visual editorial.",
          longDescription:
            "Sitio responsive con contenido tipado, páginas de servicios, metadatos SEO, galería, documentación y smoke tests.",
          highlights: [
            "Landing editorial y estructura orientada a servicios",
            "Contenido tipado con páginas de detalle",
            "UI responsive, SEO metadata y smoke test con Playwright",
          ],
        },
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologías y herramientas que uso",
      description:
        "Una mezcla enfocada de lenguajes, frameworks, bases de datos, cloud y herramientas de flujo de trabajo.",
      groups: {
        "Programming Languages": {
          title: "Lenguajes de programación",
          description:
            "Lenguajes base para resolver problemas y construir lógica de aplicación.",
        },
        Frontend: {
          title: "Frontend",
          description: "Herramientas para construir interfaces pulidas y responsivas.",
        },
        "Backend & Frameworks": {
          title: "Backend y frameworks",
          description: "Bases para desarrollo server-side y construcción de APIs.",
        },
        Databases: {
          title: "Bases de datos",
          description: "Datos estructurados, documentos y pensamiento relacional.",
        },
        Cloud: {
          title: "Cloud",
          description: "Habilidades de despliegue e infraestructura en progreso.",
        },
        Tools: {
          title: "Herramientas",
          description: "Herramientas diarias para versionado, testing y desarrollo.",
        },
        "Assisted Workflow": {
          title: "Flujo asistido",
          description:
            "Hábitos de investigación, validación e iteración con herramientas de apoyo como capa secundaria.",
        },
        Agile: {
          title: "Agile",
          description: "Hábitos de planificación para avanzar proyectos con constancia.",
        },
      },
      skills: {
        Prompting: "Prompting",
        "Code Review Assistants": "Asistentes de revisión",
        "Research & Docs": "Investigación y docs",
      },
    },
    timeline: {
      eyebrow: "Camino",
      title: "Mi camino como developer",
      description:
        "Una línea simple de lo que estoy aprendiendo, construyendo y mejorando, como capítulos desbloqueados.",
      items: [
        {
          title: "Aprendiendo Ingeniería de Software",
          period: "Ahora",
          description:
            "Estudiando fundamentos de software, practicando resolución de problemas y conectando teoría con proyectos reales.",
          tags: ["Ingeniería de Software", "Aprendizaje", "Práctica"],
        },
        {
          title: "Construyendo proyectos web",
          period: "En progreso",
          description:
            "Creando experiencias frontend enfocadas en estructura, responsividad e interacción limpia.",
          tags: ["Frontend", "React", "UI"],
        },
        {
          title: "Explorando backend y bases de datos",
          period: "En progreso",
          description:
            "Mejorando lógica backend, pensamiento API y modelado de datos relacionales y documentales.",
          tags: ["Backend", "APIs", "Datos"],
        },
        {
          title: "Mejorando Cloud y DevOps",
          period: "Explorando",
          description:
            "Aprendiendo flujos de despliegue, conceptos cloud y herramientas para que los proyectos corran mejor.",
          tags: ["Cloud", "Deploy", "DevOps"],
        },
        {
          title: "Practicando clean code y arquitectura",
          period: "Siempre",
          description:
            "Refactorizando, organizando componentes y creando hábitos que hacen el software más mantenible.",
          tags: ["Clean Code", "Arquitectura", "Crecimiento"],
        },
      ],
    },
    github: {
      eyebrow: "GitHub",
      title: "GitHub y proyectos",
      description:
        "Mi GitHub es donde comparto experimentos, proyectos de aprendizaje e ideas mientras el portafolio se vuelve un archivo más personal.",
      visit: "Visitar GitHub",
      viewProjects: "Ver proyectos",
      gridTitle: "Archivo de aprendizaje",
      gridNote:
        "Mapa visual de repositorios, experimentos y notas que documentan mi progreso.",
      visualRepresentation: "mapa de proyectos",
      viewRepository: "Ver repositorio",
    },
    process: {
      eyebrow: "Proceso",
      title: "Cómo construyo",
      description:
        "Un flujo práctico para convertir ideas iniciales en algo que pueda probar, mostrar y mejorar.",
      steps: [
        {
          title: "Planear",
          description:
            "Entender el objetivo, definir la estructura y elegir las herramientas correctas.",
        },
        {
          title: "Diseñar",
          description:
            "Crear interfaces limpias cuidando jerarquía, espaciado y experiencia de usuario.",
        },
        {
          title: "Codificar",
          description:
            "Construir componentes reutilizables con TypeScript, datos claros y patrones mantenibles.",
        },
        {
          title: "Probar",
          description: "Revisar responsividad, accesibilidad, casos borde y rendimiento.",
        },
        {
          title: "Mejorar",
          description:
            "Usar revisión asistida, refactorizar con intención, pulir detalles y aprender de cada proyecto.",
        },
      ],
    },
    contact: {
      chip: "available_for_learning_projects",
      title: "Construyamos algo.",
      description:
        "Siempre estoy explorando nuevas tecnologías y creando proyectos que me ayudan a crecer como developer.",
      sendEmail: "Enviar email",
      viewGithub: "Ver GitHub",
      downloadCv: "Descargar CV",
      info: {
        channel: "canal",
        github: "github",
        linkedin: "linkedin",
        status: "estado",
        statusValue: "learning.building",
      },
    },
    footer: {
      builtWith: "Construido con Next.js, TypeScript, Tailwind CSS y Motion.",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Translation = (typeof translations)["en"];
