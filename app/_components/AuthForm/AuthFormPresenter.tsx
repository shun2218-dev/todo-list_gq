import { HasChildren } from "@types";
import type { FC, FormEvent } from "react";
import { FormContainer } from "@components/Form/FormContainer";
// import { AuthFormType } from "./AuthFormContainer";

type Props = HasChildren & {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitButtonText?: string;
  // type: AuthFormType;
};

export const AuthFromPresenter: FC<Props> = ({
  handleSubmit,
  children,
  submitButtonText,
}) => {
  return (
    <FormContainer handleSubmit={handleSubmit}>
      {children}
      <button>{submitButtonText ?? "Submit"}</button>
    </FormContainer>
  );
};
