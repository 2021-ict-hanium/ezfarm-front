import { applyMiddleware, createStore, compose, Store } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducers';
import { UserState } from '../interfaces/data/user';
import { MyFarmState } from '../interfaces/data/myFarm';
import { OtherFarmState } from '../interfaces/data/otherFarm';

export interface CombinedState {
    index: string;
    user: UserState;
    myFarm: MyFarmState;
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
