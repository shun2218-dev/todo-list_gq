"use client";
import { memo } from "react";
import type { FC } from "react";
import { TaskItemProps } from "./TaskItemContainer";

type Props = TaskItemProps & {
  onUpdate: () => void;
  onDelete: () => void;
};

const TaskItemPresenterMemo: FC<Props> = ({ task, onUpdate, onDelete }) => {
  return (
    <li key={task.id} style={{ listStyle: "none", display: "flex" }}>
      <div>
        <label htmlFor="done">done: </label>
        <input
          type="checkbox"
          id="done"
          checked={task.done}
          onChange={onUpdate}
        />
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
