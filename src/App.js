import logo from './logo.svg';
import { GlobalStyle } from './styles/GlobalStyles';
import {AppContainer, AppHeader, AppLogo, AppTitle, AppIntro } from './components/UI'
import { useTheme } from './contexts/theme-context';


function App() {
  const { theme } = useTheme();
  return (
<>
<GlobalStyle theme={theme} />
     <AppContainer>
       <AppHeader>
         <AppLogo src={logo} alt="logo" />
         <AppTitle>Welcome to React</AppTitle>
       </AppHeader>
       <AppIntro>
         To get started, edit <code>src/App.js</code> and save to reload.
       </AppIntro>
     </AppContainer>
    </>
  );
}

export default App;
