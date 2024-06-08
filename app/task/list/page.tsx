import { CreateFromContainer } from "@/app/_components/CreateForm/CreateFormContainer";
import { TaskListContainer } from "@components/TaskList/TaskListContainer";

const TaskListPage = () => {
  return (
    <div>
      <CreateFromContainer />
      <TaskListContainer />
    </div>
  );
};

export default TaskListPage;
