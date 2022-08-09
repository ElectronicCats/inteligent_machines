export const VisionArtificial = {
  name: 'Visión Artificial',
  introContent: {
    vimeoSrc: 'https://player.vimeo.com/video/583131776',
    introClass: [
      {
        title: 'Objetivo',
        description:
          'Comprender qué es la visión artificial, cuál es la información que se adquiere en una muestra de imagen, que es el procesamiento de imágenes y cómo funciona el código para adquirir imágenes utilizando el kit de machine learning y la plataforma de Teachable Machine.',
        bullets: [],
      },
      {
        title: 'Aprendizaje esperado',
        description:
          'Entenderá los conceptos básicos sobre procesamiento de imágenes, conocerá cuál es la información leída de una imagen y sabrá utilizar las plataformas para su registro, entrenamiento y desarrollo del código de programación.',
      },
      {
        title: 'Competencia que favorece',
        description:
          'Programación de visión artificial con microcontroladores en Arduino IDE y procesamiento de imágenes.',
        bullets: [],
      },
      {
        title: 'Contenidos temáticos',
        description:
          'Arduino IDE, microcontroladores, sensores, comunicación I2C, Edge Impulse, análisis de datos, procesamiento de imágenes.',
      },
    ],
  },
  planContent: [
    {
      theme: 'Introducción al procesamiento de imágenes',
      objective:
        'Comprender que es el procesamiento de imágenes,  leer la información de una imagen y aprender a utilizar el shield Tiny Machine Learning',
      activitie:
        'El instructor dará la explicación sobre qué es el procesamiento de imágenes, cómo entiende el procesador la información de una imagen y cómo funcionará el kit para la captura de imágenes.',
      material: 'Kit Machine Learning, Computadora y Arduino IDE',
      classTime: '30 min',
    },
    {
      theme: 'Mi primer ejemplo con Teachable Machine',
      objective:
        'Aprender a utilizar la plataforma de aprendizaje automático Teachable Machine con Arduino y el Kit Tiny Machine Learning',
      activitie:
        'El instructor realizará el primer ejemplo con la plataforma de aprendizaje automático y el alumno realizará la clasificación de la información que obtendrá a través de la cámara de su kit.',
      material: 'Kit Machine Learning, Computadora y Arduino IDE',
      classTime: '30 min',
    },
    {
      theme: 'Exportando proyecto a Arduino IDE',
      objective:
        'Aprender a exportar proyectos de Teachable Machine a Arduino IDE',
      activitie:
        'El instructor enseñará al grupo a exportar el proyecto en Teachable Machine  y explicará brevemente el funcionamiento del programa.',
      material:
        'Kit Machine Learning, Computadora, Edge Impulse y Conexión a internet',
      classTime: '30 min',
    },
    {
      theme: 'Práctica',
      objective: 'Reforzar el aprendizaje del módulo.',
      activitie:
        'Los alumnos realizarán los ejercicios propuestos en el documento en contenido descargable.',
      material:
        'Kit Machine Learning, Computadora, Edge Impulse y Conexión a internet',
      classTime: '60 min',
    },
  ],
  contentClass: {
    downloadFileName: 'Contenido_Módulo_11',
    downloadLabel: 'Descarga el material para impartir esta clase',
    pathToDownloadFile:
      'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_11/modulo11_visi%C3%B3n_artificial.pdf',
    content: [
      {
        videoClass: 'https://player.vimeo.com/video/583127902',
        title: 'Introducción al procesamiento de imágenes',
        description:
          'En esta clase aprenderás los conceptos básicos sobre procesamiento de miagenes para visión artificial.',
      },
      {
        videoClass: 'https://player.vimeo.com/737964692',
        title: 'Mi primer ejemplo con Teachable Machine',
        description:
          'En esta clase aprenderás a utilizar la plataforma Teachable Machine para aprendizaje automático de imágenes',
      },
      {
        videoClass: 'https://player.vimeo.com/737966137',
        title: 'Exportando proyecto a Arduino IDE',
        description:
          'En esta clase desarrollarás el código para realizar un proyecto de visión artificial tomando como base el aprendizaje de la plataforma Teachable Machine.',
      },
    ],
  },
  practiceClass: {
    precticeName: 'Conceptos de repaso Modulo 11',
    time: '02:30 HORA',
    meterials: [
      'Archivo de Contenido para Modulo 11',
      'Kit Tiny Machine Learning',
      'Teachable Machine',
    ],
    objective:
      'Comprender el funcionamiento del módulo cámara con la tarjeta Nano 33 BLE Sense utilizando Teachable Machine',
    steps:
      'Descargar el material del Modulo 11 y completar la información con relación a tu proyecto',
  },
  resoursesClass: {
    mainLink: {
      pathToFile:
        'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/tree/main/Modulo_11',
      downloadName: '',
      label: 'Carpeta Módulo 11',
    },
    links: [
      {
        pathToFile: 'https://teachablemachine.withgoogle.com/',
        downloadName: '',
        label: 'Teachable Machine página principal',
      },
      {
        pathToFile: '',
        downloadName: '',
        label: 'Video aprendiendo Teachable Machine',
      },
    ],
  },
};
