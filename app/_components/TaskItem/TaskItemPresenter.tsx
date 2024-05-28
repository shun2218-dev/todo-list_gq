"use client";
import type { FC } from "react";
import { memo } from "react";
import { TaskItemProps } from "./TaskItemContainer";

type Props = TaskItemProps & {
  onUpdate: () => void;
  onDelete: () => void;
};

const TaskItemPresenterMemo: FC<Props> = ({ task, onUpdate, onDelete }) => {
  return (
    <li key={task.id} style={{ listStyle: "none", display: "flex" }}>
      <input type="checkbox" checked={task.isDone} onChange={onUpdate} />
      <div>
        <p>id: {task.id}</p>
        <p>title: {task.title}</p>
        <p>description: {task.description}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

const TaskItemPresenter = memo(TaskItemPresenterMemo);
export { TaskItemPresenter };
