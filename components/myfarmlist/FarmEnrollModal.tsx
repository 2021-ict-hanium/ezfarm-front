import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import Modal from '../Modal';
import SuccessModal from '../SuccessModal';
import { RootState } from '../../reducers';
import { addMyfarmClear, loadAllMyfarmRequest } from '../../actions/farm';
import FarmEnrollForm from './FarmEnrollForm';
import { farmEnrollModalClose } from '../../actions/modal';
import { getToken } from '../../sagas';

const FarmEnrollModal = () => {
    const dispatch = useDispatch();
    const { addMyfarmDone } = useSelector((state: RootState) => state.farm);

    const onClose = useCallback(() => {
        dispatch(farmEnrollModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(loadAllMyfarmRequest(getToken()));
        dispatch(addMyfarmClear());
        dispatch(farmEnrollModalClose());
    }, [dispatch]);

    return (
        <>
            {addMyfarmDone ? (
                <SuccessModal text="농가 등록 완료" onOk={onOk} />
            ) : (
                <Modal title="농가등록" onCancel={onClose}>
                    <FarmEnrollForm />
                </Modal>
            )}
        </>
    );
};

export default FarmEnrollModal;
