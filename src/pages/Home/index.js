import React from 'react';
import logo from '../../assets/logo_desk.png';
import { AppLayout } from '../../components/AppLayout';
import { Container, ContainerTitle } from '../../components/UI/Content';
import { ClassCard } from '../../components/ClassCard';
export const Home = () => {
  return (
    <AppLayout>
      <Container>
        <ContainerTitle>Home</ContainerTitle>
        <ClassCard title='Plataforma -Edge impulse-' imgsrc={logo} />
      </Container>
    </AppLayout>
  );
};
