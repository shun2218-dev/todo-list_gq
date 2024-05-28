"use client";
import type { FC } from "react";
import { memo, useCallback } from "react";
import {
  GetTaskFragment,
  useDeleteTaskMutation,
  useUpdateTaskStatusMutation,
} from "@/apollo/__generated__/client/operations-types";
import { TaskItemPresenter } from "./TaskItemPresenter";
import { refetchAllTasks } from "@/app/_utils/refetchAllTasks";

export type TaskItemProps = {
  task: GetTaskFragment;
};

export const TaskItemContainerMemo: FC<TaskItemProps> = ({ task }) => {
  const [updateTask] = useUpdateTaskStatusMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const handleUpdate = useCallback(async () => {
    await updateTask({
      variables: { id: task.id, newStatus: !task.isDone },
      onCompleted: refetchAllTasks,
      onError: () => {
        throw new Error("Failed to update task");
      },
    });
  }, [task, updateTask]);
  const handleDelete = useCallback(async () => {
    await deleteTask({
      variables: { id: task.id },
      onCompleted: refetchAllTasks,
      onError: () => {
        throw new Error("Failed to delete task");
      },
    });
  }, [task, deleteTask]);
  return (
    <TaskItemPresenter
      task={task}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
};

const TaskItemContainer = memo(TaskItemContainerMemo);
export { TaskItemContainer };
