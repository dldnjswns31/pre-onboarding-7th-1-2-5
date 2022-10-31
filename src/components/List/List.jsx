import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = ({ issue, listRef }) => {
  const { number, title, user, created_at, comments } = issue;
  return (
    <StList ref={listRef}>
      <Link to={`/issue/${number}`}>
        <StListLeftContent>
          <StListTitleAndInfo>
            <StListIssueNumber># {number}</StListIssueNumber>
            <StListTitle>{title}</StListTitle>
          </StListTitleAndInfo>
          <StListInfo>
            <p>작성자: {user.login},</p>{' '}
            <p>작성일: {`${created_at.slice(0, 4)}년 ${created_at.slice(5, 7)}월 ${created_at.slice(8, 10)}일`}</p>
          </StListInfo>
        </StListLeftContent>
        <StListRightContent>
          <StCommentNumber>코멘트 : {comments}</StCommentNumber>
        </StListRightContent>
      </Link>
    </StList>
  );
};

export default List;

const StList = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #000000;

  a {
    display: flex;
  }
`;

const StListLeftContent = styled.div`
  flex: 19 1 0;
  margin-right: 2rem;
`;

const StListTitleAndInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
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

const StListRightContent = styled.div`
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
