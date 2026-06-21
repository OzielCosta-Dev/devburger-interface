import PropTypes from 'prop-types';
import { Container, CardImage, CartButton } from './styles';
import cartIcon from '../../assets/cart.png';

export function CardProduct({ product }) {
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
        <CartButton type="button">
          <img src={cartIcon} alt="Carrinho" />
        </CartButton>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
