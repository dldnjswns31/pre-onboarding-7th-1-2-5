import GlobalStyle from './shared/GlobalStyle';
import Routers from './Router';
import Header from './components/shared/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routers />
    </>
  );
};

export default App;
