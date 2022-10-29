import styled from 'styled-components';
import List from './List';

const ListFrame = ({ issues }) => {
  console.log(issues);
  return (
    <StMain>
      <StContainer>
        <ul>
          {issues &&
            issues.map((issue) => {
              return <List key={issue.number} issue={issue} />;
            })}
        </ul>
      </StContainer>
    </StMain>
  );
};

export default ListFrame;

const StMain = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - 8rem);
  margin-top: 8rem;
  justify-content: center;
`;

const StContainer = styled.div`
  width: 100%;
  max-width: calc(1200px + 4rem);
  margin: 0 2rem;
`;
