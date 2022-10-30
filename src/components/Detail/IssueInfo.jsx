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
          작성자: {issue.user.login}, 작성일:{' '}
          {`${issue.created_at.slice(0, 4)}년 ${issue.created_at.slice(5, 7)}월 ${issue.created_at.slice(8, 10)}일`}
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
  align-items: center;
`;

const StImageContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 5rem;
  margin-right: 1rem;
  flex: 0.2 0 4rem;
  align-items: center;
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
`;

const StListIssueNumber = styled.span`
  margin-right: 1rem;
`;

const StListTitle = styled.span``;

const StListInfo = styled.div`
  font-size: 1.2rem;
`;

const StListCommentContainer = styled.div`
  display: flex;
  flex: 1 0 4rem;
  justify-content: center;
  align-items: center;
`;

const StCommentNumber = styled.span`
  font-size: 1.2rem;
`;
