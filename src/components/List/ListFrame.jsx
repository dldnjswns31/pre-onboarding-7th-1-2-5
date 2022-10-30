import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { apis } from '../../shared/axios';
import Advertisement from '../shared/Advertisement';
import List from './List';

const ListFrame = ({ obj }) => {
  const { issues, setIssues, pageNumber, setPageNumber } = obj;
  const [isLastIssue, setIsLastIssue] = useState(false);
  const observerRef = useRef(IntersectionObserver);
  const listRef = useRef(null);

  const ioCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        apis.getIssues(pageNumber).then((res) => {
          if (res.data.length !== 0) {
            setIssues([...issues, ...res.data]);
            setPageNumber(pageNumber + 1);
          } else {
            setIsLastIssue(true);
          }
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
              //   issues.length - 1 === idx ? (
              //     <List key={issue.number} issue={issue} ref={listRef} />
              //   ) : (
              //     <List key={issue.number} issue={issue} />
              // );
              if (issue === 'advertisement') {
                return <Advertisement key={Date()} />;
              } else {
                if (issues.length - 1 === idx) {
                  return <List key={issue.number} issue={issue} listRef={listRef} />;
                } else {
                  return <List key={issue.number} issue={issue} />;
                }
              }
            })}
          {isLastIssue && <div>issue가 더 이상 존재하지 않습니다.</div>}
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
