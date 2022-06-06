import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { theme } from './GlobalStyles/theme';
import { Container } from './styles';

import Header from './Components/Header';
import Routes from './Routes';
import Footer from './Components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles/>
          <Header/>
          <Routes/>
          <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
