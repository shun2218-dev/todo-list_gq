"use client";
import { memo } from "react";
import { GetAllTasksQuery } from "@schema/__generated__/client/operations-types";
import styles from "./TaskList.module.scss";

import type { FC } from "react";
import { TaskItemContainer } from "../TaskItem/TaskItemContainer";

type Props = {
  data: GetAllTasksQuery;
};

const TaskListPresenterMemo: FC<Props> = ({ data }) => {
  return (
    <div>
      useGetAllTasksQuery
      <ul className={styles["taskList"]}>
        {data?.tasks.map((task) => (
          <TaskItemContainer key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const TaskListPresenter = memo(TaskListPresenterMemo);
export { TaskListPresenter };
