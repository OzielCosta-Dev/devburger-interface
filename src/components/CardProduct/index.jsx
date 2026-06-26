import PropTypes from 'prop-types';
import { useCart } from '../../hooks/CartContext';
import { Container, CardImage, CartButton } from './styles';
import cartIcon from '../../assets/cart.png';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
        <CartButton type="button" onClick={() => putProductInCart(product)}>
          <img src={cartIcon} alt="Carrinho" />
        </CartButton>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
