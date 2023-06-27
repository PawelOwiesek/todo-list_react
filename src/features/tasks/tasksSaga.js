import {
  takeEvery,
  takeLatest,
  call,
  put,
  delay,
  select,
} from "redux-saga/effects";

import {
  fetchExampleTasks,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";

import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1500);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
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
