import styled from 'styled-components';

const List = ({ issue, listRef }) => {
  return (
    <StList ref={listRef}>
      <StListLeftContent>
        <StListTitleAndInfo>
          <StListIssueNumber># {issue.number}</StListIssueNumber>
          <StListTitle>{issue.title}</StListTitle>
        </StListTitleAndInfo>
        <StListInfo>
          작성자: {issue.user.login}, 작성일:{' '}
          {`${issue.created_at.slice(0, 4)}년 ${issue.created_at.slice(5, 7)}월 ${issue.created_at.slice(8, 10)}일`}
        </StListInfo>
      </StListLeftContent>
      <StListRightContent>
        <StCommentNumber>코멘트 : {issue.comments}</StCommentNumber>
      </StListRightContent>
    </StList>
  );
};

export default List;

const StList = styled.li`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #000000;
`;

const StListLeftContent = styled.div`
  flex: 19 1 0;
  margin-right: 2rem;
  background-color: aliceblue;
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

const StListRightContent = styled.div`
  display: flex;
  flex: 1 0 4rem;
  background-color: antiquewhite;
  justify-content: center;
  align-items: center;
`;

const StCommentNumber = styled.span`
  font-size: 1.2rem;
`;
