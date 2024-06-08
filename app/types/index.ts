import { ReactNode } from "react";

export type HasChildren = {
  children: ReactNode;
};

export type FormData = {
  email: string;
  password: string;
};
