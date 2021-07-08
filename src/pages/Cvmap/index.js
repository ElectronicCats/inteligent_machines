/* eslint-disable react/jsx-key */
import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import { GradientContainerRound } from '../../components/GradientContainer';
import { ContainerTitle, ContainerP } from '../../components/UI/Content';
import { Table } from '../../components/Tables';

export const Cvmap = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sesión',
        accessor: 'session',
      },
      {
        Header: 'Objetivo',
        accessor: 'objective',
      },
      {
        Header: 'Aprendizaje \nEsperado',
        accessor: 'learn',
      },
      {
        Header: 'Competencia \nque se \nFavorecce',
        accessor: 'upper',
      },
      {
        Header: 'Contenidos \nTemáticos',
        accessor: 'themes',
      },
      {
        Header: 'Materias \nVinculadas',
        accessor: 'materia',
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        session: 'Introducción',
        objective:
          'Conocer la finalidad del curso, su relación con la tecnología actual en dispositivos móviles y plataformas y la responsabilidad y obligaciones que tiene el científico de datos.',
        learn:
          'Conocer la diferencia entre Inteligencia Artificial e Inteligencia Humana, los campos de IA y las responsabilidades y obligaciones que se tiene al desarrollar esta tecnología.',
        visits:
          'Reconoce los diferentes tipos de inteligencias y las herramientas que se utilizan en la actualidad para generar modelos inteligentes aplicados a plataformas y dispositivos móviles.',
        upper:
          'Inteligencia Artificial, Campos de IA, Ejemplos de IA en la actualidad, Valores y Etica de IA, Responsabilidades de IA y El futuro de IA',
        themes: 'Desarrollo de pensamiento computacional',
      },
      {
        session: 'Límites éticos y responsabilidades de IA',
        objective:
          'Aprender cuales son los problemas a los que se enfrenta la Inteligencia Artificial al estar presente con los seres humanos, que debe de mejorar en cuanto a ética antes de estar 100% presente en nuestros días y que responsabilidades tienen los desarrolladores de esta tecnología.',
        learn:
          'Conocer los límites éticos a los que se enfrenta hoy en día la IA y las responsabilidades que tienen los desarrolladores de esta tecnología con la sociedad.',
        visits:
          'Entiende los diferentes casos que se han presentado de discriminación en las pruebas con IA y las responsabilidades que enfrenta el desarrollo de esta tecnologia.',
        upper:
          'Límites Éticos de IA, Casos de mal desarrollo de IA y IA en la Educación',
        themes: 'Desarrollo humano',
      },
      {
        session: 'Machine Learning',
        objective:
          'Analizar la aplicación de algoritmos de Machine Learning en diferentes ejemplos y entender su funcionamiento en el área de análisis de datos.',
        learn:
          'Conocer el subcampo de Machine Learning en dispositivos embebidos',
        visits:
          'Conoce los diferentes tipos de Machine learning y sus usos en el análisis de datos',
        upper:
          'Machine Learning, Algoritmos, Red Neuronal Artificial, Como aprende el ser humano y Análisis de datos',
        themes:
          'Inteligencia Artificial, Análisis de datos, Selección de datos, Reconocimiento de patrones y Aplicación de modelos predictivos',
      },
      {
        session: 'Nuestro Kit',
        objective:
          'Identificar cada uno de los componentes del kit Arduino Tiny Machine Learning.',
        learn:
          'Conocer cada uno de los componentes que componen el kit e identificar cada uno de los sensores que vienen integrados a la tarjeta de desarrollo Nano 33 BLE Sense',
        visits:
          'Identifica componentes electrónicos y conoce los sensores integrados para temperatura, presión atmosférica, RGB, acelerómetro, giroscopio, magnetómetro, micrófono y cámara.',
        upper:
          'Electrónica, tarjetas de desarrollo, Arduino y microcontroladores',
        themes: 'Arduino, microcontroladores y electrónica',
      },
      {
        session: 'Edge Impulse',
        objective:
          'Conocer sobre Tiny ML en dispositivos embebidos y la plataforma propuesta',
        learn:
          'Analizar la plataforma Edge Impulse y su comunicación con dispositivos embebidos',
        visits:
          'Compara datos mediante el uso de condicionales, los analiza y emite resoluciones a un problema dado',
        upper:
          'Programación visual, análisis de adquisición de datos, análisis de gráficas de estadística y aplicación de filtros',
        themes:
          'Uso de herramientas de explotación de datos , análisis de gráficas, probabilidad y estadística, reconocimiento de patrones, configuración matemática y análisis estadístico, implementación de interfaces de programación',
      },
      {
        session: 'Programando nuestro código',
        objective:
          'Aprender a conectar el kit del curso a la interfaz de programación Arduino IDE y Edge Impulse',
        learn:
          'Conectar de manera correcta la tarjeta de desarrollo y la plataforma de machine learning Edge Impulse',
        visits:
          'Comprende la conexión entre la tarjeta de desarrollo y la plataforma en línea Edge Impulse',
        upper:
          'Programación de microcontroladores, entradas y salidas, analógicas y digitales, instalación de librerías, comunicación de tarjeta de desarrollo',
        themes:
          'Microcontroladores, electrónica, programación C y lectura de hoja de datos de componentes electrónicos',
      },
      {
        session: 'Sensor de temperatur, humedad y sensor de presión',
        objective:
          'Entender el funcionamiento del sensor para conocer la temperatura, humedad y presión en el ambiente.',
        learn:
          'Entiende el funcionamiento de un sensor por comunicación I2C y la discretización de valores analógicos a digitales.',
        visits:
          'Utiliza e incorpora nociones de electrónica y Tiny ML a proyectos complejos.',
        upper:
          'Adquisión de datos de sensor analogico atravez de comunicación I2C',
        themes: 'Selección de datos ',
      },
      {
        session: 'Sensor de Luz, Color y Aproximación',
        objective:
          'Entender los valores del sensor APDS9960 para reconocmiento de color RGB, cantidad de luz y aproximación',
        learn:
          'Entiende el funcionamiento de un sensor por comunicación I2C y la discretización de valores analógicos a digitales.',
        visits:
          'Utiliza e incorpora nociones de electrónica y Tiny ML a proyectos complejos.',
        upper:
          'Adquisión de datos de sensor analogico atravez de comunicación I2C',
        themes: 'Selección de datos ',
      },
      {
        session: 'Sensor IMU',
        objective:
          'Entender el funcionamiento de los sensores Acelerómetro, Magnetómetro y Giroscopio para la posición y movimiento de un cuerpo.',
        learn:
          'Entiende el funcionamiento de un sensor por comunicación I2C y la discretización de valores analógicos a digitales.',
        visits:
          'Utiliza e incorpora nociones de electrónica y Tiny ML a proyectos complejos.',
        upper:
          'Adquisición de datos de sensor analogico de 3 ejes a través de comunicación I2C',
        themes: 'Selección de datos',
      },
      {
        session: 'Micrófono',
        objective:
          'Entender el funcionamiento del micrófono IMP34DT05 y los valores recibidos en audio.',
        learn:
          'Entiende el funcionamiento de un sensor por comunicación I2C y la discretización de valores analógicos a digitales.',
        visits:
          'Utiliza e incorpora nociones de electrónica y Tiny ML a proyectos complejos.',
        upper: 'Adquisición de datos de sensor ',
        themes: 'Selección de datos ',
      },
      {
        session: 'Visión artificial',
        objective:
          'Aprender a utilizar el módulo de cámara utilizando la plataforma de Teachables Machine.',
        learn:
          'Comprende el funcionamiento de visión artificial y cómo entrenar con machine learning la identificación de objetos',
        visits:
          'Utiliza e incorpora aprendizaje de visión artificial  en proyectos simples.',
        upper: 'Adquisición de datos por cámara.',
        themes: 'Selección de datos ',
      },
      {
        session: 'Prácticas',
        objective: 'Resolver un problema implementando Tiny Machine Learning',
        learn:
          'Resuelve problemáticas usando los conocimientos de programación, circuitos, uso de motores, actuadores y mecanismos..',
        visits:
          'Resuelve problemas complejos implementando procesos tecnológicos aprendidos.',
        upper:
          'Trabajo en equipo, pensamiento crítico, planificación, programación, innovación, electrónica.',
        themes: '',
      },
      {
        session: 'Proyecto final',
        objective:
          'Elabora un proyecto para la solución de una problemática de salud, ambiental, mecánica, alimenticia o social.',
        learn:
          'Trabaja en equipo, construye prototipos, testea el funcionamiento de un modelo de Tiny ML  y desarrolla el pensamiento crítico.',
        visits:
          'Desarrolla la capacidad de planificar tareas, organizar el trabajo en equipo y gestionar los recursos para la generación del proyecto final.',
        upper:
          'Trabajo en equipo, pensamiento crítico, planificación, programación, innovación, electrónica.',
        themes: '',
      },
    ],
    []
  );

  return (
    <AppLayout>
      <>
        <GradientContainerRound>
          <ContainerTitle color='#fff' size='5'>
            Mapa curicular
          </ContainerTitle>
          <ContainerP>
            A continuación se presenta el temario del programa Máquinas
            Inteligentes y la vinculación que tienen con las asignaturas a nivel
            Bachillerato o Nivel Medio Superior, los contenidos temáticos, Ejes,
            Temas, Competencias que se favorecen y Aprendizajes esperados.
            Máquinas Inteligentes busca alinearse al currículum escolar mediante
            la construcción de modelos de Machine Learning.
          </ContainerP>
          <ContainerP>
            Desarrolla habilidades y capacidades del siglo XXI.
          </ContainerP>
        </GradientContainerRound>
        <Table columns={columns} data={data} />
      </>
    </AppLayout>
  );
};
