import '../src/node_modules/redux';
import { Task } from '../src/node_modules/redux-saga';

declare module 'redux' {
    export interface Store {
        sagaTask?: Task;
    }
}
