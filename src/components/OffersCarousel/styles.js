import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-bottom: 40px;
  padding-left: 40px;

  /* Permite as imagens ultrapassarem o card para cima */
  .react-multi-carousel-list {
    overflow: visible !important;
  }

  .react-multiple-carousel_arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel_arrow--right {
    right: 15px;
  }

  .carousel-item {
    padding: 140px 12px 0px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  position: relative;
  text-align: center;
  margin: 70px 0;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: calc(50% - 28px);
  }
`;

export const Message = styled.p`
  color: #333;
  font-size: 16px;
  padding: 16px;
`;
