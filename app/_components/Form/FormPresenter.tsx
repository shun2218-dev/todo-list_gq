import { memo } from "react";
import type { FC, FormEvent } from "react";
import { HasChildren } from "@types";

type Props = HasChildren & {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const FormPresenterMemo: FC<Props> = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

const FormPresenter = memo(FormPresenterMemo);
export { FormPresenter };
