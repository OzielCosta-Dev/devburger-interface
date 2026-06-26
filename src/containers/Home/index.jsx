import { OffersCarousel, CategoriesCarousel } from '../../components';
import { Banner, Container, Content } from './styles';
import { useUser } from '../../hooks/UserContext';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel>
            <div>Carrossel Produtos</div>
          </CategoriesCarousel>
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
}
