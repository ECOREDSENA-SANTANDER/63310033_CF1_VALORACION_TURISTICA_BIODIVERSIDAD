export default {
  global: {
    Name: 'Turismo y biodiversidad sostenible',
    Description:
      'Colombia es uno de los países más biodiversos del mundo, con una riqueza natural única que incluye ecosistemas, hábitats, especies endémicas y servicios ecosistémicos fundamentales. La biodiversidad no solo representa un patrimonio natural, sino también una fuente de desarrollo sostenible; comprender sus componentes y dinámicas permite valorar su importancia ecológica, cultural y económica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es la biodiversidad?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de la biodiversidad en Colombia',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Colombia y el contexto mundial de la biodiversidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '¿Qué son los "<em>hotspots</em>" de biodiversidad?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Efectos del cambio climático sobre la biodiversidad y los servicios ecosistémicos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es la biodiversidad?',
      referencia: 'SENA. (2022). Afectaciones y riesgos de la fauna silvestre.',
      tipo: 'Video',
      link: 'https://youtu.be/Qh2nSdrrIMc',
    },
    {
      tema: 'Colombia y el contexto mundial de la biodiversidad.',
      referencia:
        'Caviedes-Rubio, D. I., & Olaya-Amaya, A. (2018). Ecoturismo en áreas protegidas de Colombia: una revisión de impactos ambientales con énfasis en las normas de sostenibilidad ambiental. Revista Luna Azul, (46), 311-330.',
      tipo: 'PDF',
      link:
        'https://www.redalyc.org/journal/3217/321759619016/321759619016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Biodiversidad',
      significado:
        'variedad de formas de vida (especies, genes y ecosistemas) en una región y su interacción ecológica.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Sistema natural compuesto por organismos vivos y su entorno no vivo que interactúan como una unidad funcional.',
    },
    {
      termino: 'Endemismo',
      significado:
        'Presencia exclusiva de una especie en una región geográfica específica.',
    },
    {
      termino: '<em>Hotspot</em>',
      significado:
        'Zona con alta concentración de especies endémicas y biodiversidad amenazada, prioritaria para la conservación.',
    },
    {
      termino: 'Servicios ecosistémicos',
      significado:
        'Beneficios directos e indirectos que los humanos obtienen de los ecosistemas.',
    },
    {
      termino: 'Conservación',
      significado:
        'Conjunto de acciones orientadas a proteger y mantener la biodiversidad y los recursos naturales.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de satisfacer las necesidades actuales sin comprometer los recursos de las futuras generaciones.',
    },
    {
      termino: 'Ecoturismo',
      significado:
        'Modalidad turística responsable que promueve el disfrute y la conservación de la naturaleza.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'Variaciones a largo plazo del clima global, que impactan directamente los ecosistemas y la biodiversidad.',
    },
    {
      termino: 'Hábitat',
      significado:
        'Lugar natural donde una especie vive, se alimenta y se reproduce.',
    },
    {
      termino: 'Migración',
      significado:
        'Desplazamiento periódico de especies animales entre hábitats por razones reproductivas o alimenticias.',
    },
    {
      termino: 'Especies amenazadas',
      significado:
        'Organismos que enfrentan riesgo de extinción, clasificados como vulnerables, en peligro o en peligro crítico.',
    },
    {
      termino: 'Variabilidad genética',
      significado:
        'Diversidad de información genética dentro de una especie, clave para su adaptación y evolución.',
    },
    {
      termino: 'Turismo sostenible',
      significado:
        'Actividad turística que minimiza impactos ambientales y socioculturales, y genera beneficios económicos locales.',
    },
    {
      termino: 'Patrimonio natural',
      significado:
        'Conjunto de bienes naturales que poseen valor ecológico, cultural y económico, propios de una nación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Política nacional de gestión integral de la biodiversidad y sus servicios ecosistémicos. ',
      link: 'https://www.minambiente.gov.co/',
    },
    {
      referencia:
        'Calle Diaz, Z. (1994). Curso de Campo sobre Biodiversidad. Fundación Herencia Verde. CEPAL. (2015). El cambio climático y sus efectos en la biodiversidad en América Latina.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). V Informe Nacional de Biodiversidad de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Medio Ambiente y Desarrollo Sostenible. (2010). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos.',
      link: '',
    },
    {
      referencia: 'SiB. (27 de 12 de 2017). La biodiversidad en Cifras.',
      link: 'https://www.sibcolombia.net/actualidad/biodiversidad-en-cifras/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Eugenia Arango Narváez',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Turismo - Regional Quindío',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
