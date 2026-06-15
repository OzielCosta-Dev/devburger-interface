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
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome e obrigatorio'),
      email: yup
        .string()
        .email('Digite um email valido')
        .required('O email e obrigatorio'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await toast.promise(
        api.post('/users', {
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Cadastro efetuado com sucesso!',
          error: {
            render({ data: error }) {
              const apiError = error.response?.data?.error;

              if (Array.isArray(apiError)) {
                return apiError.join(', ');
              }

              return apiError || 'Ops, algo deu errado! Tente novamente.';
            },
          },
        },
      );

      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit" disabled={isSubmitting}>
            Criar Conta
          </Button>
          <p>
            Ja possui conta? <Link to="/login">Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
