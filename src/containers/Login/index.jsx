import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';
import Logo from '../../assets/Logo.png';
import { Button } from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email valido')
        .required('O email e obrigatorio'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { data: userData } = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                navigate('/');
              }, 2000);
              return `Seja Bem-vindo(a) 👌`;
            },
          },
          error: 'Email ou senha incorretos',
        },
      );

      putUserData(userData);
      //localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
      toast.error('Email ou senha incorretos');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Ola, seja bem vindo ao <span>Dev Burger!</span>
          <br />
          Acesse com seu <span>login e senha.</span>
        </Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
          <p>
            Nao possui conta? <Link to="/cadastro">Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
