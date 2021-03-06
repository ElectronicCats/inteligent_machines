import React from 'react';
import logo from '../../assets/logo_desk.svg';
import chips from '../../assets/devices/chips.svg';
import samKit from '../../assets/sam/sam-kit.svg';
import { AppLayout } from '../../components/AppLayout';
import {
  Container,
  ContainerTitle,
  ContainerOrderList,
  ContainerP,
} from '../../components/UI/Content';
import { CardGrids } from '../../components/UI/Cards';
import { BlueContainer } from '../../components/BlueContainer';
import {
  GradientContainer,
  GradientContainerCircle,
} from '../../components/GradientContainer';
import { CenterDiv } from '../../styles/GlobalStyles';
import { RoundLink } from '../../components/Buttons/styles';

export const Home = () => {
  return (
    <AppLayout>
      <section>
        <GradientContainerCircle>
          <>
            <CardGrids>
              <img src={chips} alt='chips' />
              <Container>
                <CenterDiv>
                  <img src={logo} alt='maquinas inteligentes' />
                  <ContainerTitle color='var(--color-blue)'>
                    Curso de Tiny Machine Learning y Análisis de datos
                  </ContainerTitle>
                  <p style={{ color: 'black', textAlign: 'center' }}>
                    Máquinas Inteligentes es un programa educativo, para
                    desarrollar habilidades interpretativas de lectura de
                    información, obtenida a través de los sensores en
                    dispositivos embebidos (Microcontroladores), utilizando una
                    interfaz amigable de programación que permite utilizarla sin
                    ser un experto en programación y/o matemáticas.
                  </p>
                </CenterDiv>
              </Container>
            </CardGrids>
          </>
        </GradientContainerCircle>
        <BlueContainer>
          <>
            <ContainerTitle color='var(--color-green)' size='3'>
              Objetivos
            </ContainerTitle>
            <CardGrids>
              <ContainerOrderList type='1' color='var(--color-green)'>
                <li>
                  Entender el funcionamiento de la inteligencia artificial en
                  nuestros dispositivos.
                </li>
                <li>
                  Conocer la Ética y responsabilidades de la inteligencia
                  artificial.
                </li>
                <li>
                  Generar conciencia de la responsabilidad, limitaciones y
                  planificación a futuro de la inteligencia artificial.
                </li>
                <li>
                  Entender cómo funciona el análisis de datos en nuestra vida
                  actual.
                </li>
                <li>Desarrollar una red neuronal de aprendizaje.</li>
              </ContainerOrderList>
              <ContainerOrderList type='1' start='6' color='var(--color-green)'>
                <li>
                  Entender el funcionamiento de aprendizaje de dispositivos
                  embebidos.
                </li>
                <li>
                  Utilizar la plataforma Edge Impulse para Machine Learning.
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
          </>
        </BlueContainer>
        <Container>
          <img
            src={samKit}
            alt='sam & kit'
            style={{ width: '100%', height: '500px', margin: '20px 0' }}
          />
        </Container>
        <GradientContainer>
          <CenterDiv>
            <ContainerTitle color='white' size='2'>
              Comunidad
            </ContainerTitle>
            <ContainerP style={{ textAlign: 'center' }}>
              Nos gustaría saber en donde replicaste este curso, compartenos tu
              experiencia junto a diferentes educadores de latinoamérica en el
              Facebook oficial del curso. Puedes aportar con tus experiencias y
              recomendaciones.
            </ContainerP>
            <CenterDiv direction='row'>
              <RoundLink
                href='https://www.facebook.com/groups/1709753269220853/?ref=share'
                rel='noreferrer noopener'
                target='_blank'
                color={'var(--color-green)'}
              >
                UNETE
              </RoundLink>
              <RoundLink
                href='https://github.com/ElectronicCats/inteligent_machines/issues'
                rel='noreferrer noopener'
                target='_blank'
                color={'white'}
                bgColor={'var(--color-green)'}
              >
                ISSUES
              </RoundLink>
            </CenterDiv>
          </CenterDiv>
        </GradientContainer>
      </section>
    </AppLayout>
  );
};
