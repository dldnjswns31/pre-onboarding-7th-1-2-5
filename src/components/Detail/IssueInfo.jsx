import React from 'react';
import styled from 'styled-components';

const IssueInfo = ({ issue }) => {
  return (
    <StTitleAndInfo>
      <StImageContainer>
        <StUserImage src={issue.user.avatar_url} />
      </StImageContainer>
      <StListInfoContainer>
        <StListTitleAndInfo>
          <StListIssueNumber># {issue.number}</StListIssueNumber>
          <StListTitle>{issue.title}</StListTitle>
        </StListTitleAndInfo>
        <StListInfo>
          <p>작성자: {issue.user.login},</p>{' '}
          <p>
            작성일:{' '}
            {`${issue.created_at.slice(0, 4)}년 ${issue.created_at.slice(5, 7)}월 ${issue.created_at.slice(8, 10)}일`}
          </p>
        </StListInfo>
      </StListInfoContainer>
      <StListCommentContainer>
        <StCommentNumber>코멘트 : {issue.comments}</StCommentNumber>
      </StListCommentContainer>
    </StTitleAndInfo>
  );
};

export default IssueInfo;

const StTitleAndInfo = styled.div`
  display: flex;
  min-height: 5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-bottom: 1px solid black;
  align-items: center;
`;

const StImageContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 5rem;
  margin-right: 1rem;
  flex: 0.2 0 4rem;
  align-items: center;
  @media (max-width: 768px) {
    flex: 0.2 0 3rem;
  }
`;

const StUserImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StListInfoContainer = styled.div`
  flex: 19 1 0;
  margin-right: 2rem;
`;

const StListTitleAndInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StListIssueNumber = styled.span`
  margin-right: 1rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

const StListTitle = styled.span``;

const StListInfo = styled.div`
  font-size: 1.2rem;
  p {
    display: inline-block;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StListCommentContainer = styled.div`
  display: flex;
  flex: 1 0 4.5rem;
  justify-content: center;
  align-items: center;
`;

const StCommentNumber = styled.span`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
