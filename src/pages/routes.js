import { Home } from './Home';
import { Courses } from './Courses';
import { Cvmap } from './Cvmap';
import { Workshops } from './Workshops';
import { NotFound } from './NotFound';

export const routes = [
  {
    path: '/curso',
    component: Courses,
  },
  {
    path: '/talleristas',
    component: Workshops,
  },
  {
    path: '/mapa-curicular',
    component: Cvmap,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];
