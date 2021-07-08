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
import curso_final from '../../assets/courses/curso_final.svg';

export const CURSES_CARDS = [
  {
    id: 'introduccion_ia',
    couseName: 'Introducción a IA',
    imagePath: intro_ia,
  },
  {
    id: 'etica_responsabilidad',
    couseName: `Ética &\nResponsabilidades`,
    imagePath: etc_resp,
  },
  {
    id: 'tyni_machine_learning',
    couseName: `Tiny Machine \nLearning`,
    imagePath: tyni_mach,
  },
  { id: 'nuestro_kit', couseName: 'Nuestro Kit', imagePath: our_kit },
  {
    id: 'platforma_edge',
    couseName: `Plataforma \n-Edge Impulse-`,
    imagePath: platform_edge,
  },
  {
    id: 'programando_codigo',
    couseName: `Programando \nNuestro Código`,
    imagePath: dev_code,
  },
  {
    id: 'sensor_temperatura',
    couseName: `Sensor de \nTemperatura`,
    imagePath: temp_sens,
  },
  {
    id: 'sensor_color',
    couseName: `Sensor de \nColometría`,
    imagePath: color_sens,
  },
  { id: 'sensor_imu', couseName: `Sensor IMU \n9 ejes`, imagePath: imu_sens },
  { id: 'microfono', couseName: `Micrófono`, imagePath: micro_phon },
  {
    id: 'vision_artificial',
    couseName: `Vision Artificial`,
    imagePath: ia_vis,
  },
  { id: 'curso_final', couseName: `Proyecto Final`, imagePath: curso_final },
];
