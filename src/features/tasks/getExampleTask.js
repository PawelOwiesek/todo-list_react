import axios from "axios";

const fetchData = "/todo-list_react/exampleTasks.json";

export const getExampleTasks = async () => {
  try {
    const response = await axios.get(fetchData);
    return response.data;
  } catch (error) {
    return new Error(error).statusText;
  }
};
