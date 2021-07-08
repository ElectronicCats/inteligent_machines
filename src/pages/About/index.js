import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import logo_microchip from '../../assets/logo_microchip.svg';
import {
  Container,
  ContainerTitle,
  ContainerP,
} from '../../components/UI/Content';
import { CardGrids } from '../../components/UI/Cards';
import { BlueContainer } from '../../components/BlueContainer';
import { CenterDiv } from '../../styles/GlobalStyles';

export const About = () => {
  return (
    <AppLayout>
      <>
        <Container>
          <CardGrids align='center' justify='center' cardSize='350px'>
            <ContainerTitle size='5'>Nosotros</ContainerTitle>
            <img
              src={logo_microchip}
              alt='us mircrochip'
              style={{ width: '350px' }}
            />
          </CardGrids>
          <CardGrids>
            <article>
              <ContainerP size='1.3'>
                Máquinas inteligentes es un programa educativo, para desarrollar
                habilidades interpretativas de lectura de información, obtenida
                a través de los sensores en dispositivos embebidos
                (Microcontroladores), utilizando una interfaz amigable de
                programación que permite utilizarla sin ser un experto en
                programación o inteligencia artificial.
              </ContainerP>
              <ContainerP size='1.3'>
                Este programa consta de 12 módulos, donde los interesados
                aprenden a desarrollar un modelo de aprendizaje con inteligencia
                artificial utilizando a Edge Impulse y Arduino IDE como
                herramienta para programación.
              </ContainerP>
            </article>
            <article>
              <ContainerP size='1.3'>
                Este programa puede ser tomado por cualquier alumno y/o
                replicado por profesores de educación media superior en
                adelante, que busquen introducirse en el mundo de la
                inteligencia artificial sin ser un experto en programación o
                matemáticas.
              </ContainerP>
              <ContainerP size='1.3'>
                Esperamos que quien tome este taller online se comprometa a
                compartir el conocimiento con nuevas generaciones de su plantel,
                comunidad o colegas, para de esta manera tener continuidad en el
                taller fomentando la curiosidad por la ciencia y la tecnología.
              </ContainerP>
            </article>
          </CardGrids>
          <ContainerP>
            <i>
              Este taller fue posible gracias al apoyo y participación de
              distintas organizaciones y asociaciones como: Kybernus, Arduino
              Education y Electronic Cats.
            </i>
          </ContainerP>
        </Container>
        <BlueContainer>
          <CenterDiv>
            <iframe
              id='my_frame'
              title='my vid'
              src='https://player.vimeo.com/video/522444610'
              width='640'
              height='564'
              frameBorder='0'
              allow='autoplay; fullscreen'
              allowFullScreen
            ></iframe>
          </CenterDiv>
        </BlueContainer>
      </>
    </AppLayout>
  );
};
