import GlobalStyle from './shared/GlobalStyle';
import Routers from './Router';
import Header from './components/shared/Header';
import { IssueProvider } from './context/IssueContext';

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
