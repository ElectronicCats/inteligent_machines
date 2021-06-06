import React from 'react';

import intro_ia from '../../assets/courses/intro_ia.svg';
import etc_resp from '../../assets/courses/etc_resp.svg';
import tyni_mach from '../../assets/courses/tyni_mach.svg';
import our_kit from '../../assets/courses/our_kit.svg';
import platform_edge from '../../assets/courses/platform_edge.svg';
import dev_code from '../../assets/courses/dev_code.svg';
import temp_sens from '../../assets/courses/temp_sens.svg';
import color_sens from '../../assets/courses/color_sens.svg';
import imu_sens from '../../assets/courses/imu_sens.svg';
import micro_phon from '../../assets/courses/micro_phon.svg';
import ia_vis from '../../assets/courses/ia_vis.svg';

import { ClassCard } from '../../components/ClassCard';
import { CardGrids } from '../../components/UI/Cards';
import { TopContainer } from '../../components/GradientContainer';

export const CourseList = () => {
  return (
    <TopContainer>
      <CardGrids>
        <ClassCard title='Introducción a IA' imgsrc={intro_ia} />
        <ClassCard title={`Ética &\nResponsabilidades`} imgsrc={etc_resp} />
        <ClassCard title={`Tiny Machine \nLearning`} imgsrc={tyni_mach} />
        <ClassCard title='Nuestro Kit' imgsrc={our_kit} />
        <ClassCard
          title={`Plataforma \n-Edge Impulse-`}
          imgsrc={platform_edge}
        />
        <ClassCard title={`Programando \nNuestro Código`} imgsrc={dev_code} />
        <ClassCard title={`Sensor de \nTemperatura`} imgsrc={temp_sens} />
        <ClassCard title={`Sensor de \nColometría`} imgsrc={color_sens} />
        <ClassCard title={`Sensor IMU \n9 ejes`} imgsrc={imu_sens} />
        <ClassCard title={`Micrófono`} imgsrc={micro_phon} />
        <ClassCard title={`Vision Artificial`} imgsrc={ia_vis} />
        <ClassCard title={`Proyecto Final`} imgsrc={ia_vis} />
      </CardGrids>
    </TopContainer>
  );
};
