import axios from "axios";

const fetchData = "/todo-list_react/exampleTasks.json";

export const getExampleTasks = (async () => {
  try {
    const response = await axios.get(fetchData);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    return new Error(error).statusText;
  }
})();
