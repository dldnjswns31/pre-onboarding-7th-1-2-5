import styled from 'styled-components';

const Advertisement = () => {
  return (
    <StAdvertisement>
      <StAnchor href="https://www.wanted.co.kr" target="_blank">
        <StImageContainer>
          <StAdvertisementImage
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="advertisement"
          />
        </StImageContainer>
      </StAnchor>
    </StAdvertisement>
  );
};

export default Advertisement;

const StAdvertisement = styled.li`
  display: flex;
  height: 6rem;
  min-height: 6rem;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
`;

const StAnchor = styled.a`
  width: 100%;
  height: 100%;
`;

const StImageContainer = styled.div`
  height: 100%;
  text-align: center;
`;

const StAdvertisementImage = styled.img`
  height: 100%;
`;
