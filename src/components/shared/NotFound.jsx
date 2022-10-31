import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigation = useNavigate();

  return (
    <Container>
      <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
      <MainBtn type="button" value="메인 페이지로 이동" onClick={() => navigation('/')} />
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainBtn = styled.input`
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
