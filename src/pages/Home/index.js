import React from 'react';
import logo from '../../assets/logo_desk.png';
import { AppLayout } from '../../components/AppLayout';
import { Container, ContainerTitle } from '../../components/UI/Content';
import { ClassCard } from '../../components/ClassCard';
import { ExplainCard } from '../../components/ExplainCard';
import { BlueContainer } from '../../components/BlueContainer';
import { DownLoadButton } from '../../components/Buttons';

export const Home = () => {
  return (
    <AppLayout>
      <section>
        <Container>
          <ContainerTitle>Home</ContainerTitle>
          <ClassCard title='Plataforma -Edge impulse-' imgsrc={logo} />
          <ExplainCard
            title='Actividades'
            color='green'
            descriptions={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
          Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
          ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
          id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem, quis`}
            bullets={[
              'Salon para llevar acabo el taller (con Computadora y Proyector)',
              'Computadoras y mesa de trabajo para asistentes',
              'Smartphone con Android',
              'Accesso a Internet',
              'Kit para curso',
              'Materiales para Cada actividad',
            ]}
          />
        </Container>

        <BlueContainer>
          <DownLoadButton
            pathToFile='/assets/logo_desk.png'
            downloadName='lodo_inteligent'
            bgColor='#fbac3d'
            label='Nombre del archivo a descargar'
          />
          <DownLoadButton
            pathToFile='/assets/logo_desk.png'
            downloadName='lodo_inteligent'
            bgColor='#da247e'
            label='Nombre del archivo a descargar'
          />
          <DownLoadButton
            pathToFile='/assets/logo_desk.png'
            downloadName='lodo_inteligent'
            bgColor='#00FF95'
            label='Nombre del archivo a descargar'
          />
          <DownLoadButton
            pathToFile='/assets/logo_desk.png'
            downloadName='lodo_inteligent'
            bgColor='#0071b5'
            label='Nombre del archivo a descargar'
          />
        </BlueContainer>
      </section>
    </AppLayout>
  );
};
