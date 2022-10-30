import styled from 'styled-components';
import IssueContent from './IssueContent';
import IssueInfo from './IssueInfo';

const DetailFrame = ({ issue }) => {
  console.log(issue);
  return (
    <StMain>
      <StContainer>
        <IssueInfo issue={issue} />
        <IssueContent issue={issue} />
      </StContainer>
    </StMain>
  );
};

export default DetailFrame;

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
