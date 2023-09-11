import { Form, Input, Label } from 'components/UI/Forms.styled';
import { FormWrapper, Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Mail, Password, Profile } from 'components/UI/icons';
import { Button, LinkButton } from 'components/UI/Button.styles';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <FormWrapper flex ai="center">
      <Form onSubmit={handleSubmit}>
        <Label>
          Username
          <Input type="text" name="name" icon required />
          <Profile className="icon" />
        </Label>
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
            Already registered?
          </LinkButton>
          <Button type="submit">Register</Button>
        </Wrapper>
      </Form>
    </FormWrapper>
  );
};
