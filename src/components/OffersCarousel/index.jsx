import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { api } from '../../services/api';
import { CardProduct } from '../CardProduct';
import { Container, Title, Message } from './styles';
import 'react-multi-carousel/lib/styles.css';
import { formatPrice } from '../../utils/formatPrice';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        const onlyOffers = Array.isArray(data)
          ? data
              .filter((product) => product.offer)
              .map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
              }))
          : [];
        setOffers(onlyOffers);
      } catch (err) {
        console.error(err);
        // Fallback para mock local quando o backend exigir token
        const requiresToken =
          err?.response?.data?.error === 'Token is missing.' ||
          err?.response?.status === 401;

        if (requiresToken) {
          try {
            const res = await fetch('/mock-products.json');
            const mock = await res.json();
            const onlyOffers = Array.isArray(mock)
              ? mock
                  .filter((p) => p.offer)
                  .map((product) => ({
                    currencyValue: formatPrice(product.price),
                    ...product,
                  }))
              : [];
            setOffers(onlyOffers);
            setError(null);
          } catch (fetchErr) {
            console.error(fetchErr);
            setError(fetchErr.message || 'Erro ao carregar ofertas');
          }
        } else {
          setError(
            err?.response?.data?.message ||
              err.message ||
              'Erro ao carregar ofertas',
          );
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>

      {isLoading ? (
        <Message>Carregando ofertas...</Message>
      ) : error ? (
        <Message>{error}</Message>
      ) : offers.length === 0 ? (
        <Message>Nenhuma oferta encontrada.</Message>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={true}
          partialVisbile={false}
          itemClass="carousel-item"
        >
          {offers.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </Container>
  );
}
