import {
  takeEvery,
  takeLatest,
  call,
  put,
  delay,
  select,
} from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(500);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong");
  }
}

function* saveTasksInLocaleStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocaleStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocaleStorageHandler);
}
