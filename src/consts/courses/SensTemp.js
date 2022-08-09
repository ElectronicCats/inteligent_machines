export const Sensor_Temperatura = {
  name: 'Sensor de temperatura',
  introContent: {
    vimeoSrc: 'https://player.vimeo.com/video/579490011',
    introClass: [
      {
        title: 'Objetivo',
        description:
          'Desarrollar el código para adquirir la temperatura y la humedad relativa del sensor integrado en la tarjeta Nano 33 BLE Sense, realizar la recolección de información en Edge Impulse y crear un impulso para clasificar los datos.',
        bullets: [],
      },
      {
        title: 'Aprendizaje esperado',
        description:
          'Programará de manera correcta la lectura del sensor de temperatura en la tarjeta de desarrollo utilizando Arduino IDE. Generará el formato de datos en CSV para enviar a Edge Impulse y crear un impulso nuevo.',
      },
      {
        title: 'Competencia que favorece',
        description:
          'Programación de microcontroladores con Arduino IDE y análisis de datos con aprendizaje automático con Edge Impulse.',
        bullets: [],
      },
      {
        title: 'Contenidos temáticos',
        description:
          'Arduino IDE, microcontroladores, sensores, comunicación I2C, Edge Impulse, análisis de datos.',
      },
    ],
  },
  planContent: [
    {
      theme: 'Lectura del sensor de temperatura',
      objective:
        'Comprender la programación de la tarjeta de desarrollo para adquirir la información del sensor de temperatura. ',
      activitie:
        'El instructor realizará el ejemplo de lectura del sensor, mostrando y explicando cada parte del código.',
      material: 'Kit Machine Learning, Computadora y Arduino IDE',
      classTime: '30 min',
    },
    {
      theme: 'Envío de información a Edge Impulse',
      objective:
        'Recopilar información del sensor, crear etiquetas de clasificación y analizar la información recolectada.',
      activitie:
        'Los alumnos tomarán las muestras de información de los sensores en Edge Impulse creando por lo menos 3 etiquetas: Frío-Caliente-Templado.',
      material: 'Kit Machine Learning, Computadora y Arduino IDE',
      classTime: '30 min',
    },
    {
      theme: 'Creando un impulso',
      objective:
        'Generar el aprendizaje automático de la información recolectada.',
      activitie:
        'El instructor explicará el proceso de creación del impulso con edge Impulse Studio y resolverá dudas a los alumnos.',
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
        'Kit Machine Learning, computadora, Edge Impulse y conexión a internet',
      classTime: '60 min',
    },
  ],
  contentClass: {
    downloadFileName: 'Contenido_Módulo_7',
    downloadLabel: 'Descarga el material para impartir esta clase',
    pathToDownloadFile:
      'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_7/modulo7_sensor_temperatura.pdf',
    content: [
      {
        title: 'Lectura del sensor de temperatura',
        description:
          'En esta clase aprenderás a desarrollar el código de lectura del sensor de temperatura.',
        videoClass: 'https://player.vimeo.com/737959199'
      },
      {
        title: 'Envío de información a Edge Impulse',
        description:
          'En esta clase aprenderás a enviar la información del sensor de lectura a Edge Impulse y registrarla con etiquetas.',
          videoClass: 'https://player.vimeo.com/737959286'
      },
      {
        title: 'Creando un impulso',
        description:
          'En esta clase desarrollarás un impulso de aprendizaje automático clasificando la información del sensor en 3 categorías de datos',
          videoClass: 'https://player.vimeo.com/737959380'
      },
    ],
  },
  practiceClass: {
    precticeName: 'Conceptos de repaso Modulo 7',
    time: '02:30 HORA',
    meterials: [
      'Archivo de Contenido para Modulo 7',
      'Kit Tiny Machine Learning',
      'Edge Impulse Estudio',
    ],
    objective:
      'Comprender como funciona el sensor de temperatura al programar con Arduino IDE y su libreria',
    steps:
      'Descargar el material del Modulo 7 y completar la información con relación a tu proyecto',
  },
  resoursesClass: {
    mainLink: {
      pathToFile:
        'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/tree/main/Modulo_7',
      downloadName: '',
      label: 'Carpeta del módulo 7',
    },
    links: [
      {
        pathToFile: 'https://www.youtube.com/watch?v=2v8U9fc2Z9k',
        downloadName: '',
        label: 'Video estructura de un programa en Arduino',
      },
      {
        pathToFile: 'https://www.picuino.com/es/arduprog/sensor-temp.html',
        downloadName: '',
        label: 'Lectura como funciona un Sensor de temperatura',
      },
    ],
  },
};
