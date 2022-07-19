export const DevCode = {
  name: 'Programando nuestro código',
  introContent: {
    vimeoSrc: 'https://player.vimeo.com/video/579486254',
    introClass: [
      {
        title: 'Objetivo',
        description:
          'Realizar de manera correcta la instalación de dependencias para enviar la información de la tarjeta Nano 33 BLE Sense a Edge Impulse Studio para realizar la clasificación de los datos.',
        bullets: [],
      },
      {
        title: 'Aprendizaje esperado',
        description:
          'Comunicar de manera correcta a Edge Impulse con la tarjeta Nano 33 BLE Sense la captura de información de los sensores. ',
      },
      {
        title: 'Competencia que favorece',
        description:
          'Se comunicará entre distintas plataformas o entornos de programación.',
        bullets: [],
      },
      {
        title: 'Contenidos temáticos',
        description:
          'Programación con Arduino, Edge Impulse, análisis de datos.',
      },
    ],
  },
  planContent: [
    {
      theme: 'Instalando Edge CLI',
      objective:
        'Conocer el proceso correcto de la instalación de dependencias para comunicar los datos adquiridos por la tarjeta Nano 33 BLE Sense a Edge Impulse.',
      activitie:
        'El instructor enseñará la correcta instalación de las dependencias para comunicar la tarjeta Nano 33 BLE Sense con Edge Impulse Studio.',
      material:
        'Proyector, Computadora, Software descargado:, Node.js, Arduino CLI, Python 3, Edge CLI y Conexión a internet',
      classTime: '30 min',
    },
    {
      theme: 'Nuestro primer programa con el Kit en Arduino IDE',
      objective:
        'Comprender el formato que recibe Edge Impulse y realizar el primer ejemplo con el grupo.',
      activitie: `El instructor realizará el primer ejemplo explicando al grupo la manera correcta en la que debe de mandarse la información de los sensores a Edge Impulse.
     Práctica: El alumno desarrollará el código para leer la información de algún sensor diferente al del ejemplo.,
      material: 'Kit Tiny Machine Learning, Computadora y Conexión a internet`,
      classTime: '30 min',
    },
    {
      theme: 'Enviando nuestra información a Edge Impulse',
      objective:
        'Enviar la información recolectada a través de los sensores del kit a Edge Impulse para registrar la información y posteriormente hacer un Impulso.',
      activitie:
        'El instructor realizará el primer ejemplo explicando al grupo la manera correcta en la que debe Impulse. Práctica: El alumno realizará la recolección de información y la clasificará.',
      material: 'Kit Tiny Machine Learning, Computadora y Conexión a internet',
      classTime: '60 min',
    },
  ],
  contentClass: {
    downloadFileName: 'Contenido_Módulo_6',
    downloadLabel: 'Descarga el material para impartir esta clase',
    pathToDownloadFile:
      'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_6/modulo6_programando_nuestro_codigo.pdf',
    content: [
      {
        vimeoSrc: 'https://player.vimeo.com/video/579484299',
        title: 'Instalando Edge Impulse CLI',
        description:
          'En esta clase aprenderás a instalar correctamente Edge Impulse CLI para comunicar tu Kit con el estudio.',
      },
      {
        vimeoSrc: 'https://player.vimeo.com/video/579484299',
        title: 'Nuestro primer programa con el Kit en Arduino IDE',
        description:
          'En esta clase aprenderás a desarrollar el código para enviar la información de los sensores de la tarjeta Nano 33 BLE Sense a Edge Impulse Studio en el formato correcto.',
      },
      {
        vimeoSrc: 'https://player.vimeo.com/video/579484299',
        title: 'Enviando nuestra información a Edge Impulse',
        description:
          'En esta clase comprenderás la manera de enviar la información a Edge Impulse Studio de la tarjeta Nano 33 BLE Sense.',
      },
    ],
  },
  practiceClass: {
    precticeName: 'Conceptos de repaso modulo 6',
    time: '02:00 HORA',
    meterials: ['Arduino Kit Tiny Machine Learning',
    'Archivo de Contenido para Modulo 6',
    'Edge Impulse Estudio',
  ],
    objective: 'Realizar de manera correcta la instalación de dependencias para enviar la información',
    steps: 'Descarga de material del módulo 6 y completar la información con relación a tu proyecto',
  },
  resoursesClass: {
    mainLink: {
      pathToFile: 'https://www.arduino.cc/', // esto es para descargar no para redirigir, por que la pagina de arduino
      downloadName: '',
      label: 'Página oficial Arduino',
    },
    links: [
      {
        pathToFile:
          'https://www.ibm.com/docs/es/elm/6.0.3?topic=files-csv-file-format-examples',
        downloadName: '',
        label: 'Link de lectura',
      },
      {
        pathToFile: 'https://www.youtube.com/watch?v=2v8U9fc2Z9k',
        downloadName: '',
        label: 'Video para aprender a programar con Arduino',
      },
    ],
  },
};
