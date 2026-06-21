import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, Container, Content } from './styles';

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
