"use client";
import type { FC, ReactNode } from "react";
import { WithApollo } from "@components/WithApollo";

type Props = {
  children: ReactNode;
};

const LoginLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <WithApollo>{children}</WithApollo>
    </main>
  );
};

export default LoginLayout;
