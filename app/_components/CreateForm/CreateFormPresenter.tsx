import type { FC, FormEvent, ReactNode } from "react";

type Props = {
  mutate: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};

export const CreateFromPresenter: FC<Props> = ({ mutate, children }) => {
  return <form onSubmit={mutate}>{children}</form>;
};
