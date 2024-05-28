"use client";
import { WithApollo } from "./_components/WithApollo";
import { TaskListContainer } from "./_components/TaskList/TaskListContainer";
import { CreateFromContainer } from "./_components/CreateForm/CreateFormContainer";

export default function Home() {
  return (
    <main>
      <WithApollo>
        <TaskListContainer />
        <CreateFromContainer />
      </WithApollo>
    </main>
  );
}
