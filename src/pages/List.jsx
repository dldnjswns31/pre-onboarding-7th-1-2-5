import ListFrame from '../components/List/ListFrame';
import IssueContext from '../context/IssueContext';

const List = () => {
  return (
    <IssueContext.Consumer>
      {(issues) => {
        return <ListFrame issues={issues} />;
      }}
    </IssueContext.Consumer>
  );
};

export default List;
