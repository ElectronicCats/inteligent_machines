export const Sensor_Rgb = {
  name: 'Sensor RGB',
  introContent: {
    vimeoSrc: 'https://player.vimeo.com/video/522444610',
    introClass: [
      {
        title: 'Objetivo',
        description:
          'Desarrollar el código para adquirir los valores RGB de diferentes objetos del sensor integrado en la tarjeta Nano 33 BLE Sense, realizar la recolección de información en Edge Impulse y crear un impulso para clasificar los datos.',
        bullets: [],
      },
      {
        title: 'Aprendizaje esperado',
        description:
          'Programará de manera correcta la lectura del sensor RGB en la tarjeta de desarrollo utilizando Arduino IDE, Generará el formato de datos en CSV para enviar a Edge Impulse y crear un impulso nuevo.',
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
          'Arduino IDE, Microcontroladores, Sensores, Comunicación I2C, Edge Impulse, Análisis de datos, sensor RGB',
      },
    ],
  },
  planContent: [
    {
      theme: 'Lectura del sensor RGB',
      objective:
        'Comprender la programación de la tarjeta de desarrollo para adquirir la información del sensor RGB',
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
        'Los alumnos tomarán las muestras de información de los sensores en Edge Impulse creando por lo menos 3 etiquetas de diferente color.',
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
        'Kit Machine Learning, Computadora, Edge Impulse y Conexión a internet',
      classTime: '60 min',
    },
  ],
  contentClass: {
    downloadFileName: 'Contenido_Módulo_8',
    downloadLabel: 'Descarga el material para impartir esta clase',
    pathToDownloadFile: '',
    content: [
      {
        title: 'Lectura del sensor RGB',
        description:
          'En esta clase aprenderás a desarrollar el código de lectura del sensor RGB.',
      },
      {
        title: 'Envío de información a Edge Impulse',
        description:
          'En esta clase aprenderás a enviar la información del sensor de lectura a Edge Impulse y registrarla con etiquetas.',
      },
      {
        title: 'Creando un impulso',
        description:
          'En esta clase desarrollarás un impulso de aprendizaje automático clasificando la información del sensor en 3 categorías de datos',
      },
    ],
  },
  practiceClass: {
    precticeName: '',
    time: '',
    meterials: [''],
    objective: '',
    steps: '',
  },
  resoursesClass: {
    mainLink: {
      pathToFile:
        'https://www.ibm.com/docs/es/elm/6.0.3?topic=files-csv-file-format-examples',
      downloadName: '',
      label: 'Lectura formato CSV',
    },
    links: [
      {
        pathToFile: 'https://www.youtube.com/watch?v=2v8U9fc2Z9k',
        downloadName: '',
        label: 'Video estructura de un programa en Arduino',
      },
    ],
  },
};
