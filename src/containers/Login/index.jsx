import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/Logo.png';
import { Button } from '../../components/Button';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burger!</span>
          <br />
          Acesse com seu <span>login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Button>Entrar</Button>
          <p>
            Não possui conta? <a>Clique aqui.</a>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
