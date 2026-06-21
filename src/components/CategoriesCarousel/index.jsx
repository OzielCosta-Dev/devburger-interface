import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { api } from '../../services/api';
import { Container, Title, ContainerItens, Message, CategoryButton  } from './styles';
import 'react-multi-carousel/lib/styles.css';
import { useLocation, useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
       const categoryId = +queryParams.get('categoria');

       if(categoryId){
        return categoryId;
       }
       return 0;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        // Se o backend exigir token, usar mock local para desenvolvimento
        const requiresToken =
          err?.response?.data?.error === 'Token is missing.' ||
          err?.response?.status === 401;

        if (requiresToken) {
          try {
            const res = await fetch('/mock-categories.json');
            const mock = await res.json();
            setCategories(Array.isArray(mock) ? mock : []);
            setError(null);
          } catch (fetchErr) {
            console.error(fetchErr);
            setError(fetchErr.message || 'Erro ao carregar categorias');
          }
        } else {
          setError(
            err?.response?.data?.message ||
              err.message ||
              'Erro ao carregar categorias',
          );
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
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
      <Title>Categorias</Title>

      {isLoading ? (
        <Message>Carregando categorias...</Message>
      ) : error ? (
        <Message>{error}</Message>
      ) : categories.length === 0 ? (
        <Message>Nenhuma categoria encontrada.</Message>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={true}
          partialVisbile={false}
          itemClass="carousel-item"
        >
          {categories.map((category) => (
            <ContainerItens key={category.id} imageUrl={category.url}>
              <CategoryButton

              onClick={() => {
                navigate(
                  {
                    pathname: '/cardapio',
                    search: `?categoria=${category.id}`,
                })
              }}
              
              
              >{category.name}</CategoryButton>
             
            </ContainerItens>
          ))}
        </Carousel>
      )}
    </Container>
  );
}
