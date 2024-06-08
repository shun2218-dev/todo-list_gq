import Link from "next/link";

const TaskPage = () => {
  return (
    <main>
      <div>
        <div>
          <Link href={"/task/list"}>Task List</Link>
        </div>
        <div>
          <Link href={"/task/add"}>Create Task</Link>
        </div>
      </div>
    </main>
  );
};

export default TaskPage;
