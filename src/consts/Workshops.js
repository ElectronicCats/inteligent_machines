import electronic from '../assets/workers/ec.svg';
import inventors from '../assets/workers/inventorshouse.svg';
import garage from '../assets/workers/garage.png';
import redpanda from '../assets/workers/redpanda.svg';

export const WORKSHOPS = [
  {
    id: 'ec',
    title: 'Electronic Cats Education',
    description: `Somos una empresa mexicana dedicada al diseño y fabricación de sistemas embebidos para el público en general y las empresas privadas,
      caracterizados por trabajar siempre con pasión por el desarrollo de dispositivos electrónicos,
      buscando contribuir al bienestar de nuestros consumidores ofreciendo calidad productos adecuados a sus necesidades.`,
    imagePath: electronic,
  },
  {
    id: 'inventor_house',
    title: 'Inventor House',
    description: `Espacio físico que integra personas que puedan compartir y/o colaborar en trabajo
    y conocimiento que a través de la cultura de innovación, puedan generar diversos proyectos.
    "Es posible lo imposible, basta con pedir ayuda a las personas adecuadas"`,
    imagePath: inventors,
  },
  {
    id: 'garage_hub',
    title: 'Garage Hub',
    description: `Espacio creativo que diseña experiencias de aprendizaje innovadoras
    a través de la metodología STEM ( Ciencia Tecnología Ingeniería y Matemáticas) con impacto social.
    Contamos con instalaciones en México y Estados Unidos, siendo una empresa binacional de gran impacto tecnológico,
    trabajamos con Instituciones Gubernamentales, Educativas y con el Sector Privado de nuestra ciudad.`,
    imagePath: garage,
  },
  {
    id: 'garage_hub',
    title: 'Red Panda',
    description: `Brindamos servicio de orientación en prácticas STEM a través del uso de herramientas, máquinas y plataformas digitales.
    ¿Qué hacemos? Compartir prácticas de proyectos educativos con el fin de fomentar el interés por las áreas STEM que promuevan la creatividad,
    curiosidad y el juicio crítico a través del uso de conceptos teóricos puestos en práctica mediante el uso de tecnologías.`,
    imagePath: redpanda,
  },
];
