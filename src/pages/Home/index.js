import React from 'react';
import logo from '../../assets/logo_desk.svg';
import { AppLayout } from '../../components/AppLayout';
import {
  Container,
  ContainerTitle,
  ContainerOrderList,
} from '../../components/UI/Content';
import { CardGrids } from '../../components/UI/Cards';
import { BlueContainer } from '../../components/BlueContainer';

export const Home = () => {
  return (
    <AppLayout>
      <section>
        <article>
          <Container>
            <img src={logo} alt='maquinas inteligentes' />
            <h3>Curso de Tiny Machine learning & analisis de datos</h3>
            <p>
              Máquinas Inteligentes es un programa educativo, para desarrollar
              habilidades interpretativas de lectura de información, obtenida a
              través de los sensores en dispositivos embebidos
              (Microcontroladores), utilizando una interfaz amigable de
              programación que permite utilizarla sin ser un experto en
              programación y/o matemáticas.
            </p>
          </Container>
        </article>
        <BlueContainer>
          <Container>
            <ContainerTitle color='var(--color-green)' size='3'>
              Objetivos
            </ContainerTitle>
            <CardGrids>
              <ContainerOrderList type='1' color='var(--color-green)'>
                <li>
                  Entender el funcionamiento de la inteligencia artificial en
                  nuestros dispositivos
                </li>
                <li>
                  Conocer la Ética y responsabilidades de la inteligencia
                  artificial
                </li>
                <li>
                  Generar conciencia de la responsabilidad, limitaciones y
                  planificación a futuro de la inteligencia artificial.
                </li>
                <li>
                  Entender cómo funciona el análisis de datos en nuestra vida
                  actual.
                </li>
                <li>Desarrollar una red neuronal de aprendizaje</li>
              </ContainerOrderList>
              <ContainerOrderList type='1' start='6' color='var(--color-green)'>
                <li>
                  Entender el funcionamiento de aprendizaje de dispositivos
                  embebidos
                </li>
                <li>
                  Utilizar la plataforma Edge Impulse para Machine Learning
                </li>
                <li>
                  Aprender, mediante la experimentación científica sobre
                  análisis de datos en dispositivos embebidos con múltiples
                  sensores tales como: Giroscopio, Magnetómetro, Acelerómetro,
                  colorimetría, temperatura, humedad y presión atmosférica.
                </li>
                <li>
                  Programar dispositivos embebidos con Arduino IDE y Edge
                  Impulse.
                </li>
              </ContainerOrderList>
            </CardGrids>
          </Container>
        </BlueContainer>
        <article>
          <Container>
            <p>
              Nos gustaría saber en donde replicaste este curso, compartenos tu
              experiencia junto a diferentes educadores de latinoamérica en el
              Facebook oficial del curso. Puedes aportar con tus experiencias y
              recomendaciones
            </p>
          </Container>
        </article>
      </section>
    </AppLayout>
  );
};
