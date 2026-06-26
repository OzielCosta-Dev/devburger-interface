import {
  Container,
  Navigation,
  HeaderLink,
  Options,
  Profile,
  LinkContainer,
  Logout as LogoutButton,
  Content,
} from './styles';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();

  const { pathname } = useLocation();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Ola, <span>{userInfo.name}</span>
              </p>
              <LogoutButton onClick={logoutUser}>Sair</LogoutButton>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
