import ListFrame from '../components/List/ListFrame';
import IssueContext from '../context/IssueContext';

const List = () => {
  return (
    <IssueContext.Consumer>
      {(obj) => {
        return <ListFrame obj={obj} />;
      }}
    </IssueContext.Consumer>
  );
};

export default List;
