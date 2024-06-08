import type { FC, FormEvent } from "react";
import { HasChildren } from "@types";
import { FormContainer } from "@components/Form/FormContainer";

type Props = HasChildren & {
  mutate: (e: FormEvent<HTMLFormElement>) => void;
};

export const CreateFromPresenter: FC<Props> = ({ mutate, children }) => {
  return <FormContainer handleSubmit={mutate}>{children}</FormContainer>;
};
