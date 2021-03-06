import { Home } from './Home';
import { Courses } from './Courses';
import { Cvmap } from './Cvmap';
import { Workshops } from './Workshops';
import { NotFound } from './NotFound';
import { ContactUs } from './ContactUs';
import { About } from './About';
import { StartGuide } from './StartGuide';
// import { EdgeImpulse } from './EdgeImpulse';
import { Objective } from './Objective';
import { CoursesDetails } from './CoursesDetails';
import { Thanks } from './Thanks';

export const routes = [
  {
    path: '/class/:classId',
    component: CoursesDetails,
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: About,
  },
  {
    path: '/objetivo',
    name: 'Objetivo',
    component: Objective,
  },
  {
    path: '/guia_de_arranque',
    name: 'Guia de Arranque',
    component: StartGuide,
  },
  {
    path: '/curso',
    name: 'Curso',
    component: Courses,
  },
  {
    path: '/talleristas',
    name: 'Red de Talleristas',
    component: Workshops,
  },
  {
    path: '/mapa-curicular',
    name: 'Mapa Curricular',
    component: Cvmap,
  },
  {
    path: '/contacto',
    component: ContactUs,
    name: 'Contacto',
  },
  {
    path: '/thanks',
    component: Thanks,
    name: 'Agradecemos',
  },
  // {
  //   path: '/edge_impulse',
  //   name: 'Edge Impulse',
  //   component: EdgeImpulse,
  // },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];
