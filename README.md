[![CD](https://github.com/ElectronicCats/inteligent_machines/actions/workflows/cd.yml/badge.svg)](https://github.com/ElectronicCats/inteligent_machines/actions/workflows/cd.yml)

# Maquinas Inteligentes

Curso de Tiny Machine Learning y Análisis de datos

Máquinas Inteligentes es un programa educativo, para desarrollar habilidades interpretativas de lectura de información, obtenida a través de los sensores en dispositivos embebidos (Microcontroladores), utilizando una interfaz amigable de programación que permite utilizarla sin ser un experto en programación y/o matemáticas.

Este es el repositorio de mantenimiento de la pagina http://maquinasinteligentes.org/

Para disfrutar la version completa entra a [http://maquinasinteligentes.org/](http://maquinasinteligentes.org/)

### Objetivos

- Entender el funcionamiento de la inteligencia artificial en nuestros dispositivos
- Conocer la Ética y responsabilidades de la inteligencia artificial
- Generar conciencia de la responsabilidad, limitaciones y planificación a futuro de la inteligencia artificial.
- Entender cómo funciona el análisis de datos en nuestra vida actual.
- Desarrollar una red neuronal de aprendizaje
- Entender el funcionamiento de aprendizaje de dispositivos embebidos
- Utilizar la plataforma Edge Impulse para Machine Learning
- Aprender, mediante la experimentación científica sobre análisis de datos en dispositivos embebidos con múltiples sensores tales como: Giroscopio, Magnetómetro, Acelerómetro, colorimetría, temperatura, humedad y presión atmosférica.
- Programar dispositivos embebidos con Arduino IDE y Edge Impulse.

### Comunidad

Nos gustaría saber en donde replicaste este curso, compartenos tu experiencia junto a diferentes educadores de latinoamérica en el Facebook oficial del curso. Puedes aportar con tus experiencias y recomendaciones.

## Deseas reportar un error o bug en la pagina

Abre un issue en este repositorio, todas las contribuciones son bienvenidos o pullrequest

## Build project Manual

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Environments

you can set the env var creating a .env file
Remember set yours envs in your .github/workflow from your repoistories secrests.

## Maintainer

<a href="https://github.com/sponsors/ElectronicCats">
  <img src="https://electroniccats.com/wp-content/uploads/2020/07/Badge_GHS.png" height="104" />
</a>

Electronic Cats invests time and resources providing this open source design, please support Electronic Cats and open-source hardware by purchasing products from Electronic Cats!

## Add new Class

To add a new Class in the landing page, need add the card information in `src\consts\courses\CardList.js` & mede match the Id of card and the exported data from `src\consts\courses\index.js` the follow the current structure for data.

## Contact form

To use contact form need set up your [EmailJS](https://www.emailjs.com/) count & updete `.env` file in the root of this project. can update for any other emailer.

### Envars

All the envars used in this project need to be seted into repository secrets.
and applyed into the `.gihub/workflows/cd` pipeline to applyed on the process

## License

GPL-3.0 License
