import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.png';
import Background from '../../assets/Background.png';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const Content = styled.div`
  padding: 24px;
`;
