import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 280px;
  padding: 160px 20px 20px;
  border-radius: 28px;
  background-color: #ffffff;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0 16px 32px;
  overflow: visible;
  gap: 40px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;

    p {
      font-size: 18px;
      color: #ff8c05;
      line-height: 24px;
      font-weight: 700;
      margin: 0;
      max-width: 100%;
    }

    strong {
      font-size: 24px;
      color: #363636;
      font-weight: 800;
      line-height: 28px;
    }
  }
`;

export const CardImage = styled.img`
  width: 240px;
  height: 140px;
  object-fit: contain;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

export const CartButton = styled.button`
  background-color: #9758a6;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 14px 32px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }
`;
