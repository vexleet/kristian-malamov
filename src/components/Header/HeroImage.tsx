import styled from '@emotion/styled';

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const HeroImage = () => {
  return <HeaderImage src="header-aarhus.jpg" />;
};

export default HeroImage;
