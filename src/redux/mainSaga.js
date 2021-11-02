import {all} from 'redux-saga/effects';
import TodoAppSaga from '../containers/redux/sagas';

//@BlueprintReduxSagaImportInsertion

export function* mainSaga() {
  yield all([TodoAppSaga]);
}
