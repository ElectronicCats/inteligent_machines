export const NuestroKit = {
  name: 'Nuestro Kit',
  introContent: {
    vimeoSrc: 'https://player.vimeo.com/video/583026107',
    introClass: [
      {
        title: 'Objetivo',
        description:
          'Conocer la tarjeta de desarrollo Arduino Nano 33 BLE sense, los sensores que tiene integrada, el módulo de cámara y el shield de Tiny Machine Learning. Entender el funcionamiento básico de cada sensor e interpretar su hoja de datos. ',
        bullets: [],
      },
      {
        title: 'Aprendizaje esperado',
        description:
          'Conocer los componentes de la tarjeta de desarrollo Nano 33 BLE Sense, entender cómo funcionan los sensores y qué tipo de datos recolecta.',
      },
      {
        title: 'Competencia que favorece',
        description:
          'Comprende el funcionamiento básico de los microcontroladores integrados en una tarjeta de desarrollo, identifica la función de utilizar Arduino IDE y conoce el proceso de instalación de la tarjeta en el entorno de desarrollo.',
        bullets: [],
      },
      {
        title: 'Contenidos temáticos',
        description:
          'Microcontroladores, Arduino, programación en C, lectura de hoja de datos.',
      },
    ],
  },
  planContent: [
    {
      theme: 'Conociendo el kit',
      objective:
        'Identificar cada una de los componentes del kit y conocer su funcionamiento.',
      activitie:
        'El alumno recibirá un kit e identificará cada una de sus partes y su funcionamiento en el programa.',
      material: 'Kit Arduino Tiny Machine Learning',
      classTime: '30 min',
    },
    {
      theme: 'Los sensores',
      objective: 'Identificar el tipo de sensor y cómo funciona.',
      activitie:
        'El alumno identificará de la hoja de datos los puntos más importantes de cada sensor que contiene la tarjeta de desarrollo.',
      material: 'Hoja de datos de cada sensor',
      classTime: '30 min',
    },
    {
      theme: 'Instalando Arduino IDE y la tarjeta Nano 33 BLE Sense',
      objective:
        'Instalar de manera correcta las dependencias para el funcionamiento del kit.',
      activitie:
        'El instructor enseñará al alumno la correcta instalación del software Arduino IDE y la tarjeta Nano 33 BLE Sense.',
      material: 'Arduino IDE, Computadora y Kit Arduino Tiny Machine Learning',
      classTime: '20 min',
    },
    {
      theme: 'Mi primer ejemplo',
      objective:
        'Desarrollar el código para la lectura de los sensores del Kit.',
      activitie:
        'El alumno desarrollará el código para mostrar en el monitor serie el valor del sensor propuesto por el instructor.',
      material: 'Arduino IDE, Computadora y Kit Arduino Tiny Machine Learning',
      classTime: '60 min',
    },
  ],
  contentClass: {
    downloadFileName: 'Contenido_Módulo_4',
    downloadLabel: 'Descarga el material para impartir esta clase',
    pathToDownloadFile:
      'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_4/modulo4_nuestro_kit.pdf',
    content: [
      {
        videoClass: 'https://player.vimeo.com/video/583005910',
        title: 'Conociendo el Kit Tiny Machine Learning',
        description:
          'En esta clase conocerás cada componente que integra el Kit de tiny Machine Learning y el tipo de sensor integrado a la tarjeta',
      },
      {
        videoClass: 'https://player.vimeo.com/video/583021936',
        title:
          'Instalando Arduino IDE y el paquete de la tarjeta Nano 33 BLE Sense',
        description:
          'En esta clase aprenderás a instalar correctamente Arduino IDE y el paquete de la tarjeta Nano 33 BLE Sense',
      },
      {
        videoClass: 'https://player.vimeo.com/737949739',
        title: 'Mi primer ejemplo',
        description:
          'En esta clase aprenderás a cargar el primer ejemplo en tu tarjeta Nano 33 BLE Sense',
      },
    ],
  },
  practiceClass: {
    precticeName: 'Conceptos de repaso Modulo 4',
    time: '02:20 HORA',
    meterials: [
      'Arduino Kit Tiny Machine Learning',
      'Archivo de Contenido para Modulo 4',
      'Libreta',
      'Lápiz',
    ],
    objective: 'Conocer la tarjeta de desarrollo Arduino Nano 33 BLE sense ',
    steps: 'Descarga el material del Módulo 4 y completar la información con relación a tu proyecto',
  },
  resoursesClass: {
    mainLink: {
      pathToFile:
        'https://github.com/ElectronicCats/ejemplos-maquinas-inteligentes/raw/main/Modulo_4/ejercicios_modulo4.pdf',
      downloadName: 'ejercicios_modulo_4',
      label: 'Práctica 4',
    },
    links: [
      {
        pathToFile: 'https://www.arduino.cc/',
        downloadName: '',
        label: 'Página Arduino Oficial',
      },
      {
        pathToFile: 'https://store.arduino.cc/usa/tiny-machine-learning-kit',
        downloadName: '',
        label: 'Página del Kit oficial',
      },
      {
        pathToFile: 'https://store.arduino.cc/usa/nano-33-ble-sense',
        downloadName: '',
        label: 'Página de la tarjeta de desarrollo Arduino',
      },
      {
        pathToFile:
          'https://www.youtube.com/watch?v=eBVvD85Ml2c&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2',
        downloadName: '',
        label: 'Videos curso de programación con Arduino',
      },
    ],
  },
};
