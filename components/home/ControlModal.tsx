import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import Modal from '../Modal';
import { controlModalClose } from '../../actions/modal';
import ControlForm from './ControlForm';
import SuccessModal from '../SuccessModal';
import { controlClear } from '../../actions/farm';
import { RootState } from '../../reducers';

const ControlModal = () => {
    const dispatch = useDispatch();
    const { controlDone } = useSelector((state: RootState) => state.farm);

    const onClose = useCallback(() => {
        dispatch(controlModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(controlClear());
        dispatch(controlModalClose());
    }, [dispatch]);

    return (
        <>
            {controlDone ? (
                <SuccessModal text="실시간 제어 완료" onOk={onOk} />
            ) : (
                <Modal title="실시간 제어" onCancel={onClose}>
                    <ControlForm />
                </Modal>
            )}
        </>
    );
};

export default ControlModal;
