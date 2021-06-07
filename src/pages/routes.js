import { Home } from './Home';
import { Courses } from './Courses';
import { Cvmap } from './Cvmap';
import { Workshops } from './Workshops';
import { NotFound } from './NotFound';
import { Demo } from './Demo';
import { About } from './About';
import { StartGuide } from './StartGuide';
// import { EdgeImpulse } from './EdgeImpulse';
import { Objective } from './Objective';

export const routes = [
  {
    path: '/nosotors',
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
    path: '/demo',
    component: Demo,
  },
  {
    path: '*',
    component: NotFound,
  },
];
