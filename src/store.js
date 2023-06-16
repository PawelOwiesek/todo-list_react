import { configureStore } from "@reduxjs/toolkit";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;
