"use client";
import { memo } from "react";
import { GetAllTasksQuery } from "@/apollo/__generated__/client/operations-types";

import type { FC } from "react";
import { TaskItemContainer } from "../TaskItem/TaskItemContainer";

type Props = {
  data: GetAllTasksQuery;
};

const TaskListPresenterMemo: FC<Props> = ({ data }) => {
  return (
    <div>
      useGetAllTasksQuery
      <ul>
        {data?.tasks.map((task) => (
          <TaskItemContainer key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const TaskListPresenter = memo(TaskListPresenterMemo);
export { TaskListPresenter };
