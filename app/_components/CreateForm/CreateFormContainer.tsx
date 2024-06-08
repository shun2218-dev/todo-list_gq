"use client";
import type { FormEvent, ChangeEvent } from "react";
import { useState, useCallback } from "react";
import { useCreateTaskMutation } from "@schema/__generated__/client/operations-types";
import { CreateFromPresenter } from "./CreateFormPresenter";
import { refetchAllTasks } from "@utils/refetchAllTasks";

export const CreateFromContainer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createTask, { loading }] = useCreateTaskMutation();
  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        console.log(title, description);

        await createTask({
          variables: {
            // FIXME: Hardcoded UID, will fix later
            title,
            description,
          },
          onCompleted: async () => {
            await refetchAllTasks();
            resetForm();
          },
          onError: () => {
            throw new Error("Failed to create new task");
          },
        });
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
        else console.error("Something was wrong");
      }
    },
    [description, title, createTask]
  );

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  return (
    <CreateFromPresenter mutate={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChangeDescription}
      />
      <button disabled={!title || loading} type="submit">
        Create Task
      </button>
    </CreateFromPresenter>
  );
};
