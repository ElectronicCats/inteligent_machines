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
                Máquinas Inteligentes es un programa educativo, para
                deasarrollar habilidades interpretativas de lectura de
                información, obtenida a travez de los sensores en dispostivos
                embebidos (Microcontrolado- res), utilizando una interfaz
                amigable de programación que permi- te utilizarla sin ser un
                experto en programación y/o matemáticas.
              </ContainerP>
              <ContainerP size='1.3'>
                Consta de 3 Módulos cada uno de 4 a 10 clases de 10 a 50
                minutos, donde los estudiantes aprenden a desarrollar un modelo
                de apren- dizaje con inteligencia articial utilizando Arduino y
                Edge Impulse como herramientas de programación.
              </ContainerP>
            </article>
            <article>
              <ContainerP size='1.3'>
                Este programa puede ser tomado por cualquier alumno y/o replica-
                do por profesores de educación media superior en adelante que
                busque compartir el conocimiento adquirido en este taller
                online.
              </ContainerP>
              <ContainerP size='1.3'>
                Esperamos que quien tome este taller online se comprometan a
                compartir el conocimiento con nuevas generaciones de su plantel,
                comunidad o colegas, para de esta manera tenga continuidad el
                taller fomentando la curiosidad por la ciencia y tecnología.
              </ContainerP>
            </article>
          </CardGrids>
          <ContainerP>
            <i>
              Este taller fue posible gracias al apoyo y participación de
              distintas organizaciones y asociacio- nes como: Kybernus, Arduino,
              Edge Impulse y Electronic Cats.
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
