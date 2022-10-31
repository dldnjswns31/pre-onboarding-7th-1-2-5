import Routers from './Router';
import Header from './components/shared/Header';
import { IssueProvider } from './context/IssueContext';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <IssueProvider>
      <GlobalStyle />
      <Header />
      <Routers />
    </IssueProvider>
  );
};

export default App;
