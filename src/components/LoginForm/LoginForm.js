import { Form, Input, Label } from 'components/UI/Forms.styled';
import { Mail, Password } from 'components/UI/icons';
import { FormWrapper, Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Button, LinkButton } from 'components/UI/Button.styles';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" icon required />
          <Mail className="icon" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" icon required />
          <Password className="icon" />
        </Label>
        <Wrapper flex jcsb pt="1em">
          <LinkButton type="button" onClick={handleClick}>
            Don't have account yet?
          </LinkButton>
          <Button type="submit">Log In</Button>
        </Wrapper>
      </Form>
    </FormWrapper>
  );
};
