import { applyMiddleware, createStore, compose } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './modules/reducer';
import { UserState } from '../interfaces/data/user';
import { IMyFarmState } from '../interfaces/data/myFarm';
import { OtherFarmState } from '../interfaces/data/otherFarm';

export interface CombinedState {
    index: string;
    user: UserState;
    myFarm: IMyFarmState;
    otherFarm: OtherFarmState;
}

const configureStore: MakeStore<CombinedState> = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer =
        process.env.NEXT_PUBLIC_NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper<CombinedState>(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
