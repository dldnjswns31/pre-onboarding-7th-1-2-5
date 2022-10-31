import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Error = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const errorCode = location.state.status;

  return (
    <Container>
      <h1>Error Code : {errorCode}</h1>
      <h2>알 수 없는 오류가 발생했습니다.</h2>
      <MainBtn type="button" value="메인 페이지로 이동" onClick={() => navigation('/')} />
    </Container>
  );
};

export default Error;

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
