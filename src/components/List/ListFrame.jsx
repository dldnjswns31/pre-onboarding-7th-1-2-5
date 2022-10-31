import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apis from '../../apis/apis';
import { useIssueDispatch, useIssueNextPageNumber, useIssueState } from '../../context/IssueContext';
import Advertisement from '../shared/Advertisement';
import Spinner from '../shared/Spinner';
import List from './List';

const ListFrame = () => {
  const state = useIssueState();
  const dispatch = useIssueDispatch();
  const nextPageNumber = useIssueNextPageNumber();

  const issues = state.issues;
  const isLastIssue = state.isLastIssue;

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // get first issues
  useEffect(() => {
    setIsLoading(true);
    if (state.issues.length === 0) {
      apis
        .getIssues(1)
        .then((res) => {
          dispatch({ issues: res.data, pageNumber: 1 });
          nextPageNumber.current += 1;
          setIsLoading(false);
        })
        .catch((err) => {
          navigate('/error', {
            state: {
              status: err.response.status,
            },
          });
        });
    }
  }, []);

  // infinite scroll
  const observerRef = useRef(IntersectionObserver);
  const listRef = useRef(null);

  const ioCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsLoading(true);
        observer.unobserve(entry.target);
        apis
          .getIssues(nextPageNumber.current)
          .then((res) => {
            dispatch({ issues: res.data, pageNumber: nextPageNumber });
            nextPageNumber.current += 1;
            setIsLoading(false);
          })
          .catch((err) => {
            navigate('/error', {
              state: {
                status: err.response.status,
              },
            });
          });
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(ioCallback);
    listRef.current && observerRef.current.observe(listRef.current);
  }, [issues]);

  return (
    <StMain>
      <StContainer>
        <ul>
          {issues &&
            issues.map((issue, idx) => {
              if (issue === 'advertisement') {
                return <Advertisement key={Date.now()} />;
              } else {
                if (issues.length - 1 === idx) {
                  return <List key={issue.number} issue={issue} listRef={listRef} />;
                } else {
                  return <List key={issue.number} issue={issue} />;
                }
              }
            })}
          {isLoading && !isLastIssue ? <Spinner /> : null}
          {isLastIssue && <StNoIssue>issue가 더 이상 존재하지 않습니다.</StNoIssue>}
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

const StNoIssue = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
`;
