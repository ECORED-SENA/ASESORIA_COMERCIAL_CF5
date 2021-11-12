export default {
  global: {
    componenteFormativo: 'Ventas y comunicación',
    descripcionCurso:
      'Se abordará el concepto y elementos de la venta y el proceso, la venta consultiva, clínicas de ventas y el manejo de objeciones para el cierre de la venta; y conocimientos sobre las transacciones comerciales, los documentos que la soportan de manera legal y aportes al tema de la comunicación para entender el proceso y su utilidad en la venta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas de la venta',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de vendedores',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Proceso de la venta',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Estrategias de ventas',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Técnicas de la venta',
            hash: 't1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Venta consultiva',
            hash: 't1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Clínicas de venta',
            hash: 't1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Manejo de objeciones',
            hash: 't1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Transacciones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Formas de pago',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Documentos comerciales',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Condiciones comerciales',
            hash: 't2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Condiciones de entrega',
            hash: 't2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Antevenio. (2020). Los mejores ejemplos del método AIDA para inspirarte.',
      link:
        'https://www.antevenio.com/blog/2020/01/los-mejores-ejemplos-del-metodo-aida-para-inspirarte/',
    },
    {
      referencia:
        'Artal, C., M. (2010). Dirección de ventas. Organización del departamento de ventas y gestión de vendedores. Alfaomega.',
    },
    {
      referencia:
        'DocuSign. (2020). 5 estrategias clave para facilitar el cierre de ventas.',
      link: 'https://www.docusign.mx/blog/cierre-de-ventas',
    },
    {
      referencia:
        'GestioPolis.com Experto. (2020). Documentos comerciales. Qué son, tipos, características y ejemplos.',
      link: 'https://www.gestiopolis.com/que-son-documentos-comerciales/',
    },
    {
      referencia:
        'Globalkam. (2021). Tipos de clientes, cómo identificarlos y tratarlos para conectar. Globalkam.',
      link: 'https://globalkamconsultoresretail.com/tipos-de-clientes/',
    },
    {
      referencia:
        'González, A., M. R. (2021). La comunicación asertiva, una habilidad fundamental para el convivir. Universidad Central.',
      link: 'https://www.ucentral.edu.co/noticentral/comunicacion-asertiva',
    },
    {
      referencia:
        'Hair, J., Anderson, R., Mehta, R., y Babin, B. (2010). Administración de ventas. Cengage Learning.',
    },
    {
      referencia:
        'Igape-BicGalicia. (s. f.). Cómo elaborar un plan de marketing.',
      link:
        'http://www.igape.es/es/component/k2/item/417-como-elaborar-un-plan-de-marketing',
    },
    {
      referencia:
        'Jobber, D., y Lancaster, G. (2021). Administración de ventas. Pearson Educación.',
    },
    {
      referencia:
        'Lobato, F., De la Mata, M., y Rodríguez, S. (2010). Operaciones administrativas de compra-venta. MacMillan Profesional.',
    },
    {
      referencia:
        'Morfin, A. (2014). La importancia de las ventas en las empresas.',
      link:
        'https://es.scribd.com/document/339249965/La-Importancia-de-Las-Ventas-en-Las-Empresas',
    },
    {
      referencia:
        'Station, R. D. (2020). Todo sobre la venta consultiva: qué es, ventajas, pasos, cómo hacerla y habilidades para trabajar en el área.',
      link: 'https://www.rdstation.com/co/blog/todo-sobre-la-venta-consultiva/',
    },
    {
      referencia:
        'Sy Corvo, H. (2019). Transacciones comerciales: características y ejemplos. Lifeder.',
      link: 'https://www.lifeder.com/transacciones-comerciales/',
    },
    {
      referencia:
        'Torres, V. (2014). Administración de ventas. Grupo Editorial Patria.',
    },
    {
      referencia: 'Westreicher, G. (2020). Ventas.',
      link: 'https://economipedia.com/definiciones/ventas.html',
    },
  ],
  glosario: [
    {
      termino: 'Proceso de ventas',
      significado:
        '“el proceso de venta es la sucesión de pasos que una empresa realiza desde el momento en que intenta captar la atención de un potencial cliente hasta que la transacción final se lleva a cabo” (Inboundcycle, 2020).',
    },
    {
      termino: 'Clínica de ventas',
      significado:
        'actividad de capacitación que implementan las empresas para mantener la fuerza de ventas en las habilidades de la técnica y el proceso de la venta adoptado por la empresa.',
    },
    {
      termino: 'Cierre de ventas',
      significado:
        '“El cierre de ventas se refiere a una parte del proceso de ventas donde (después de haber presentado el producto o servicio y aclarado las dudas existentes) se tiende a cerrar la negociación y el prospecto de venta se convierte en cliente” (DocuSign, 2020).',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'tipo de comunicación que permite dialogar con calma y respeto, expresando lo que queremos decir, pero sin herir los sentimientos de las otras personas (González, 2021).',
    },
    {
      termino: 'Venta consultiva',
      significado:
        'tipo de venta en la que el vendedor también actúa como consultor. Más que vender a toda costa, el profesional escucha al posible cliente, comprende sus necesidades y buscar conjuntamente la solución más adecuada (Station, 2020).',
    },
    {
      termino: 'Técnicas de venta',
      significado:
        'serie de procedimientos, acciones y protocolos para lograr el resultado de ventas.',
    },
  ],
  complementario: [
    {
      texto: 'Westreicher, G. (2020). Ventas. ',
      tipo: 'Página Web',
      link: 'https://economipedia.com/definiciones/ventas.html',
    },
    {
      texto: 'Coll, F. (2020). Transacción comercial.',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/transaccion-comercial.html',
    },
    {
      texto: 'Peiró, R. (2021). Comunicación.',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/comunicacion.html',
    },
    {
      texto:
        'ConectaDEL. (2021). Herramientas básicas para la comunicación aplicada a proyectos digitales y presenciales.',
      tipo: 'Página web',
      link:
        'http://www.conectadel.org/herramientas-basicas-para-la-comunicacion-aplicada-a-proyectos-digitales-y-presenciales/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zenith Chinchilla Ruedas',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Javier del Carmen Martínez Pérez',
        cargo: 'Instructor',
        centro: 'Centro de Comercio y Servicios - Regional Bolívar',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlo Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
