import React, { useCallback } from '../../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../../src/node_modules/react-redux';
import { controlModalClose } from '../../../actions/modal';
import { modifyControllerClear } from '../../../actions/myFarm';
import { RootState } from '../../../src/reducers';
import ControlModalPresenter from './ControlModalPresenter';

const ControlModalContainer = () => {
    const dispatch = useDispatch();
    const { controlDone } = useSelector((state: RootState) => state.myFarm);

    const onOk = useCallback(() => {
        dispatch(modifyControllerClear());
        dispatch(controlModalClose());
    }, [dispatch]);

    const onClose = useCallback(() => {
        dispatch(controlModalClose());
    }, [dispatch]);

    return <ControlModalPresenter controlDone={controlDone} onOk={onOk} onClose={onClose} />;
};
export default ControlModalContainer;
