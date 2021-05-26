import { Home } from './Home';
import { Courses } from './Courses';
import { Cvmap } from './Cvmap';
import { Workshops } from './Workshops';
import { NotFound } from './NotFound';

export const routes = [
  {
    path: '/curso',
    name: 'Cursos',
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
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];