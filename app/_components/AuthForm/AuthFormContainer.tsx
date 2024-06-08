"use client";
import type { FC, FormEvent } from "react";
import { AuthFromPresenter } from "./AuthFormPresenter";
import { HasChildren } from "@types";

// const AuthFormType = {
//   LOGIN: "login",
//   REGISTER: "register",
// } as const;

// export type AuthFormType = (typeof AuthFormType)[keyof typeof AuthFormType];

type Props = HasChildren & {
  // type: AuthFormType;
  submitButtonText?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

const AuthFormContainer: FC<Props> = ({
  children,
  // type,
  submitButtonText,
  handleSubmit,
}) => {
  return (
    <AuthFromPresenter
      handleSubmit={handleSubmit}
      submitButtonText={submitButtonText}
      // type={type}
    >
      {children}
    </AuthFromPresenter>
  );
};

export { AuthFormContainer };
