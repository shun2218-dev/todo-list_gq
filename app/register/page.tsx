"use client";
import type { FormEvent } from "react";
// import { useCreateUserMutation } from "@schema/__generated__/client/operations-types";
import { AuthFormContainer } from "@components/AuthForm/AuthFormContainer";
import { FormData } from "@types";

const RegisterPage = () => {
  // const [register, { data, loading, error }] = useCreateUserMutation();
  // const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const variables: FormData = {
  //     email: e.currentTarget.email.value,
  //     password: e.currentTarget.password.value,
  //   };
  //   await register({ variables });
  //   console.log(data);
  // };
  return (
    <></>
    // <AuthFormContainer
    //   submitButtonText="Register"
    //   handleSubmit={handleRegister}
    // >
    //   <input type="email" name="email" />
    //   <input type="password" name="password" />
    // </AuthFormContainer>
  );
};

export default RegisterPage;
