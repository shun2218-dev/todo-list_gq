"use client";

import { useGetAllTasksQuery } from "@/apollo/__generated__/client/operations-types";
import { TaskListPresenter } from "./TaskListPresenter";
import Loading from "@/app/loading";

export const TaskListContainer = () => {
  const { data, previousData, loading, error } = useGetAllTasksQuery();

  if (loading)
    return (
      <div
        style={{
          height: "100dvh",
          width: "100dvw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#000000",
        }}
      >
        <Loading />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div>{!loading && error ? "Failed" : "Successfull"}</div>
      <div>
        {data ? (
          <TaskListPresenter data={data} />
        ) : (
          previousData && <TaskListPresenter data={previousData} />
        )}
      </div>
    </div>
  );
};
