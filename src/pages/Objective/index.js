import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import obj_trasn from '../../assets/devices/obj_trasn.svg';
import objetivos_cards from '../../assets/objetivos_cards.svg';
import objetivos_grafica from '../../assets/objetivos_grafica.svg';
import objetivos_sam from '../../assets/sam/objetivos-sam.svg';
import { CenterDiv } from '../../styles/GlobalStyles';
import { TopContainer } from '../../components/GradientContainer';
import {
  ContainerTitle,
  Container,
  ContainerP,
  ContalinerList,
} from '../../components/UI/Content';
import { ThanksCard } from '../../components/ClassCard/ThanksCard';
import { CardGrids } from '../../components/UI/Cards';

export const Objective = () => {
  return (
    <AppLayout>
      <section>
        <TopContainer>
          <CenterDiv direction='row'>
            <ContainerTitle size={4} color='#fff'>
              {`OBJETIVOS`}
            </ContainerTitle>
            <img src={obj_trasn} alt='Sam' style={{ width: '300px' }} />
          </CenterDiv>
        </TopContainer>
        <Container>
          <ContainerTitle size={2} align='left'>
            OBJETIVO GENERAL
          </ContainerTitle>
          <ContainerP size={1.3}>
            El programa Máquinas Inteligentes se centra en la ciencia de
            inteligencia artificial (IA) y el subcampo de Machine Learning con
            el microcontrolador NRF52840 (Kit de Arduino Tiny Machine Learning)
            y la plataforma de Edge Impulse . Introducir a alumnos de 16 años en
            adelante con conocimientos previos en programación de
            microcontroladores con Arduino IDE y profesores de nivel educativo
            media superior en adelante, en el mundo de Tiny Machine Learning.
            Mostrar a la próxima generación de profesionistas las aplicaciones
            de las especialidades de ciencia de datos e inteligencia artificial
            para fomentar alguna de las carreras relacionadas con ciencia y
            tecnología. La demanda de esta profesión en el año 2030 será
            demasiada, para países como México será difícil proveer la cantidad
            de profesionistas que demandará esta carrera es por eso que Maquinas
            Inteligentes tiene como objetivo atraer a más personas en el
            aprendizaje de este subcampo de las ciencias de la computación.
          </ContainerP>
          <ContainerTitle size={2} align='left'>
            OBJETIVOS PARTICULARES
          </ContainerTitle>
          <ContalinerList color='var(--color-green)'>
            <li>
              Entender el funcionamiento de la inteligencia artificial en
              nuestros dispositivos.
            </li>
            <li>
              Conocer la Ética y responsabilidades de la inteligencia artificial
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
            <li>
              Entender el funcionamiento de aprendizaje de dispositivos.
              embebidos
            </li>
            <li>Utilizar la plataforma Edge Impulse para Machine Learning.</li>
            <li>
              Aprender, mediante la experimentación científica sobre análisis de
              datos en dispositivos embebidos con múltiples sensores tales como:
              Giroscopio, Magnetómetro, Acelerómetro, colorimetría, temperatura,
              humedad y presión atmosférica.
            </li>
            <li>
              Programar dispositivos embebidos con Arduino IDE y Edge Impulse.
            </li>
          </ContalinerList>
          <img
            src={objetivos_cards}
            alt='Cards'
            style={{ width: '80%', minWidth: '340px' }}
          />
          <CardGrids direction='row'>
            <ThanksCard
              description={`Los cientificos ganan 7 Veces mas que un ingeniero`}
              imgsrc={objetivos_grafica}
              title={'oportunidad de crecimiento'}
            />
            <CardGrids direction='row'>
              <ContalinerList>
                <li>Mejor Calidad de Vida</li>
                <li>Procesos Automatizados</li>
                <li>Seguridad Eficiente</li>
                <li>Atencion al Cliente</li>
                <li>Resolucion de Problemas Complejos</li>
              </ContalinerList>
              <img
                src={objetivos_sam}
                alt={'Sam objective'}
                style={{ width: '300px' }}
              />
            </CardGrids>
          </CardGrids>
        </Container>
      </section>
    </AppLayout>
  );
};
