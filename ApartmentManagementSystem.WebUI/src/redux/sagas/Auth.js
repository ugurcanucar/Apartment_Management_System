import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { AUTH_TOKEN, SIGNIN, SIGNOUT } from "redux/constants/Auth";
import {
  showAuthMessage,
  authenticated,
  signOutSuccess,
} from "redux/actions/Auth";
import ApiService from "services/ApiService";

export function* signInWithFBEmail() {
  yield takeEvery(SIGNIN, function* ({ payload }) {
    const { email, password } = payload;
    try {
      const user = yield call(ApiService.signIn, email, password);
      if (user.data) {
        localStorage.setItem(AUTH_TOKEN, user.data.accessToken);
        yield put(authenticated(user.data.accessToken));
      } else {
        yield put(showAuthMessage(user.message));
      }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
    try {
      const signOutUser = yield call(ApiService.signOut);
      if (signOutUser === undefined) {
        localStorage.removeItem(AUTH_TOKEN);
        yield put(signOutSuccess(signOutUser));
      } else {
        yield put(showAuthMessage(signOutUser.message));
      }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(signInWithFBEmail), fork(signOut)]);
}
