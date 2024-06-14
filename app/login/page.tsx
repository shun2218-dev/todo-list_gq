"use client";
import type { FormEvent } from "react";
import { AuthFormContainer } from "@components/AuthForm/AuthFormContainer";
// import { useSignInMutation } from "@schema/__generated__/client/operations-types";
import { FormData } from "@types";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  router.replace("/", {});
  // const [signIn, { data, loading, error }] = useSignInMutation();
  // const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const variables: FormData = {
  //     email: e.currentTarget.email.value,
  //     password: e.currentTarget.password.value,
  //   };
  //   await signIn({ variables });
  //   console.log(data);
  // };
  return (
    <></>
    // <AuthFormContainer submitButtonText="LogIn" handleSubmit={handleSignIn}>
    //   <input type="email" name="email" />
    //   <input type="password" name="password" />
    // </AuthFormContainer>
  );
};

export default LoginPage;
