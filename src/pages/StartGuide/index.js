import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import samStand from '../../assets/sam/sam-stand.svg';
import { CenterDiv } from '../../styles/GlobalStyles';
import { ContainerP, ContaineFexDiv } from '../../components/UI/Content';
import { ExplainCard } from '../../components/ExplainCard';
import { ImagesGrids } from '../../components/Devices';

export const StartGuide = () => {
  return (
    <AppLayout>
      <>
        <ContaineFexDiv direction='row'>
          <article>
            <img src={samStand} alt='Sam ' style={{ width: '300px' }} />
          </article>
          <article style={{ maxWidth: '850px' }}>
            <ContainerP>
              Máquinas Inteligentes es un programa educativo, para desarrollar
              habilidades interpretativas de lectura de información, obtenida
              atreves de los sensores en dispositivos embebidos
              (Microcontroladores), utilizando una interfaz amigable de
              programación que permite utilizarla sin ser un experto en
              programación y/o matemáticas.
            </ContainerP>
            <ExplainCard
              title='Guia de Arranque'
              color='var(--color-blue)'
              descriptions={`Máquinas inteligentes tiene el objetivo de introducirte
               en la ciencia de datos y de desarrollar habilidades y competencias básicas
               para la solución de problemas,creatividad, 
              todo esto con la aplicación de conceptos de electrónica, 
              programación e inteligencia artificial.`}
            />
          </article>
        </ContaineFexDiv>
        <ContaineFexDiv direction='row'>
          <article>
            <ImagesGrids />
          </article>
          <article style={{ maxWidth: '850px' }}>
            <ExplainCard
              title='¿PARA Quién VA DIRIGIDO?'
              color='var(--color-green)'
              descriptions={`Este curso está dirigido a participantes de 16
              años en adelante o que estén cursando alguna
              carrera técnica, bachillerato o preparatoria y
              que cuente con conocimientos básicos sobre 
              programación y electrónica.`}
            />
            <ExplainCard
              title='Actividades'
              color='var(--color-pink)'
              bullets={[
                `Sesiones de aprendizaje teórico con videos,
                lecturas y ejércitos prueba`,
                'Actividades técnicas: Programación, electrónica y análisis de datos.',
                'Evaluación diagnostica, intermedia y final del curso.',
                'Elaboración de un cuaderno de trabajo con evidencias y análisis.',
                'Proyecto Final documentado.',
                'Compartir con la comunidad',
              ]}
            />
            <ExplainCard
              title='Recursos Necesarios'
              color='var(--color-orange)'
              bullets={[
                `Salon para llevar a acabo el taller
                (con computadora y proyector).`,
                `Computadoras y mesas de trabajo para los asistentes.`,
                `smartphone con Android.`,
                `Kit para Curso.`,
                `Materiales para cada actividad
                (la lista se encuentra en cada clase).`,
              ]}
            />
          </article>
        </ContaineFexDiv>
      </>
    </AppLayout>
  );
};
