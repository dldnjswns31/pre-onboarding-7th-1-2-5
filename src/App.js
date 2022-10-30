import GlobalStyle from './shared/GlobalStyle';
import Routers from './Router';
import Header from './components/shared/Header';
import IssueContext from './context/IssueContext';
import { useEffect, useState } from 'react';
import { apis } from './shared/axios';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    apis.getIssues(1).then((res) => {
      if (pageNumber === 1) {
        const newIssues = [...issues, ...res.data];
        newIssues.splice(4, 0, 'advertisement');
        setIssues(newIssues);
      } else {
        setIssues([...issues, ...res.data]);
      }
      setPageNumber(pageNumber + 1);
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <IssueContext.Provider value={{ issues, setIssues, pageNumber, setPageNumber }}>
        <Routers />
      </IssueContext.Provider>
    </>
  );
};

export default App;
