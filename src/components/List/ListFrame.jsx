import styled from 'styled-components';

const ListFrame = () => {
  return (
    <StMain>
      <StContainer>
        <ul>
          <StList>
            <StListLeftContent>
              <StListTitleAndInfo>
                <StListIssueNumber>#111</StListIssueNumber>
                <StListTitle>제목</StListTitle>
              </StListTitleAndInfo>
              <StListInfo>작성자 및 날짜</StListInfo>
            </StListLeftContent>
            <StListRightContent>
              <StCommentNumber>코멘트 : 67</StCommentNumber>
            </StListRightContent>
          </StList>
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
  background-color: blue;
  justify-content: center;
`;

const StContainer = styled.div`
  width: 100%;
  max-width: calc(1200px + 4rem);
  margin: 0 2rem;
  background-color: yellow;
`;

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
