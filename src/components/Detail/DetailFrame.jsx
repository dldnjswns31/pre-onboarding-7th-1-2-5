import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apis } from '../../shared/axios';
import Spinner from '../shared/Spinner';
import IssueContent from './IssueContent';
import IssueInfo from './IssueInfo';

const DetailFrame = () => {
  const { id } = useParams();

  const [issue, setIssue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apis.getIssue(id).then((res) => {
      setIssue({ ...res.data });
      setIsLoading(false);
    });
  }, []);

  return (
    <StMain>
      <StContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <IssueInfo issue={issue} />
            <IssueContent issue={issue} />
          </>
        )}
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
