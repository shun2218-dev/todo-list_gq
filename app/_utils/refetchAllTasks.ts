import { client } from "../_components/WithApollo";

export const refetchAllTasks = async () => {
  await client.refetchQueries({
    include: ["GetAllTasks"],
  });
};
