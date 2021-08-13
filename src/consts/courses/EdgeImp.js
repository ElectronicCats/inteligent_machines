export const EdgeImpulse = {
  name: 'Edge Impulse',
  introContent: {
    vimeoSrc: 'https://player.vimeo.com/video/583044059',
    introClass: [
      {
        title: 'Objetivo',
        description:
          'Aprender a utilizar la plataforma de Edge Impulse Studio para generar el aprendizaje automático de información recolectada con un smartphone desde el sensor de micrófono y el acelerómetro.',
        bullets: [],
      },
      {
        title: 'Aprendizaje esperado',
        description:
          'Aprenderá la función de cada sección de Edge Impulse, utilizar bloques de funciones para el aprendizaje de clasificación de los datos y a conectar un smartphone con la plataforma de desarrollo.',
      },
      {
        title: 'Competencia que favorece',
        description:
          'Conoce el uso de cada función de Edge Impulse para el aprendizaje de datos y la manera correcta de vincular un smartphone con la plataforma.',
        bullets: [],
      },
      {
        title: 'Contenidos temáticos',
        description:
          'Machine Learning, Red Neuronal, Aprendizaje reforzado, Edge Impulse, Filtro de datos, Clasificación de datos, Análisis de datos.',
      },
    ],
  },
  planContent: [
    {
      theme: 'Edge Impulse',
      objective: 'Conocer la plataforma de entrenamiento de datos Edge Impulse',
      activitie:
        'El instructor mostrará al grupo el funcionamiento de la plataforma Edge Impulse y cada una de las funciones de entrenamiento.',
      material: 'Computadora, proyector y apuntador',
      classTime: '30 min',
    },
    {
      theme: 'Funciones básicas',
      objective:
        'Comprender cada función de esta plataforma para crear tu primer impulso.',
      activitie:
        'El instructor explicará cada una de las funciones y secciones de Edge Impulse. ',
      material: 'Computadora, proyector, apuntador y conexión a internet.',
      classTime: '40 min',
    },
    {
      theme: 'Conectando un dispositivo',
      objective:
        'Conectar un smartphone con la plataforma para realizar el primer proyecto.',
      activitie:
        'El instructor enseñará al alumno la correcta instalación del software Arduino IDE y la tarjeta Nano 33 BLE Sense.',
      material: 'Arduino IDE, Computadora y Kit Arduino Tiny Machine Learning',
      classTime: '20 min',
    },
    {
      theme: 'Creando mi primer impulso',
      objective:
        'Aplicar los conocimientos adquiridos en una práctica utilizo un Smartphone para adquirir información de algún sensor.',
      activitie:
        'El grupo realizará la lectura de información del micrófono y la registrará en Edge Impulse para crear un impulso identificando las palabras Si, No y Silencio. ',
      material:
        'Computadora, proyector, apuntador, conexión a internet y smartphone',
      classTime: '40 min',
    },
  ],
  contentClass: {
    downloadFileName: 'Contenido_Módulo_5',
    downloadLabel: 'Descarga el material para impartir esta clase',
    pathToDownloadFile:
      'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_5/modulo5_edge_impulse.pdf',
    content: [
      {
        videoClass: 'https://player.vimeo.com/video/583574793',
        title: 'Edge Impulse',
        description:
          'En esta clase conocerás la plataforma de Edge Impulse y su funcionamiento',
      },
      {
        videoClass: 'https://player.vimeo.com/video/583997048',
        title: 'Funciones Básicas',
        description:
          'En esta clase aprenderás cada una de las funciones en edge impulse, bloques de aprendizaje y parámetros para realizar un impulso de aprendizaje. ',
      },
      {
        videoClass: 'https://player.vimeo.com/video/583997048',
        title: 'Conectando un dispositivo',
        description:
          'En esta clase aprenderás a conectar un smartphone con Edge Impulse e identificar cuáles otros dispositivos son compatibles con la plataforma.',
      },
      {
        videoClass: 'https://player.vimeo.com/video/583997048',
        title: 'Creando mi primer impulso',
        description:
          'En esta clase aprenderás a crear tu primer impulso con Edge Impulse utilizando el micrófono o acelerómetro integrados en tu Smartphone.',
      },
    ],
  },
  practiceClass: {
    precticeName: 'Conceptos de repaso Modulo 5',
    time: '02:30 HORA',
    meterials: [
      'Usuario a Edge Impulse',
      'Smart Phone',
      'Archivo de Contenido para Modulo 5',
      'Libreta',
      'Lápiz',
    ],
    objective: 'Reforzar lo aprendido en las clases del módulo',
    steps:
      'Descargar el material del Modulo 5, contestar las preguntas de refuerzo de lección y desarrollar la práctica propuesta',
  },
  resoursesClass: {
    mainLink: {
      pathToFile:
        'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_5/ejercicios_modulo5.pdf',
      downloadName: 'ejercicios_modulo_5',
      label: 'Práctica 5',
    },
    links: [
      {
        pathToFile: 'https://www.edgeimpulse.com/',
        downloadName: '',
        label: 'Página oficial Edge Impulse',
      },
      {
        pathToFile: 'https://www.youtube.com/watch?v=JrpTmHGJ97A',
        downloadName: '',
        label: 'Ejemplo usando Edge Impulse',
      },
      {
        pathToFile: 'https://docs.edgeimpulse.com/docs',
        downloadName: '',
        label: 'Manual de uso Edge Impulse (inglés)',
      },
    ],
  },
};
