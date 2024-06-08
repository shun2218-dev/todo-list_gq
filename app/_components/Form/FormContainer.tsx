import { memo } from "react";
import type { FC, FormEvent } from "react";
import { HasChildren } from "@types";
import { FormPresenter } from "./FormPresenter";

type Props = HasChildren & {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const FormContainerMemo: FC<Props> = ({ children, handleSubmit }) => {
  return <FormPresenter handleSubmit={handleSubmit}>{children}</FormPresenter>;
};

const FormContainer = memo(FormContainerMemo);
export { FormContainer };
