"use client";

import styled from "styled-components";
import FormContainer from "../../components/FormContainer/FormContainer";
import LoginForm from "../../components/LogInForm/LogInForm";

export default function Login() {
  return (
    <LoginPage>
      <LoginImage
        src="https://media.istockphoto.com/id/941440378/pt/foto/college-friends-study-for-exam.jpg?s=1024x1024&w=is&k=20&c=vNsGDl4QueCILJJb2zPyYCPOqpOhhTAxpI0VCaWgGO4="
        alt="Three girls studying with flashcards"
      />
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </LoginPage>
  );
}

const LoginPage = styled.main`
  background-color: #32476f;
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0 0 0 0;
`;

const LoginImage = styled.img`
  width: 715px;
  border-radius: 20px 20px 0 20px;
`;