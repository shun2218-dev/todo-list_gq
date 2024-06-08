"use client";
import type { FC, ReactNode } from "react";
import { WithApollo } from "@components/WithApollo";

type Props = {
  children: ReactNode;
};

const TaskLayout: FC<Props> = ({ children }) => {
  return (
    <main style={{ width: "100%" }}>
      <WithApollo>{children}</WithApollo>
    </main>
  );
};

export default TaskLayout;
