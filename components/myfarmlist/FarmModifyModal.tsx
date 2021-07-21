import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllMyfarmRequest, modifyControllerClear, modifyMyfarmClear } from '../../actions/farm';
import { controlModalClose, farmModifyModalClose } from '../../actions/modal';
import { MyFarmInfo } from '../../interfaces/data/farm';
import { RootState } from '../../reducers';
import { getToken } from '../../sagas';
import Modal from '../Modal';
import SuccessModal from '../SuccessModal';
import FarmModifyForm from './FarmModifyForm';

type Props = {
    farmId: number;
};

const FarmModifyModal = ({ farmId }: Props) => {
    const dispatch = useDispatch();
    const { myFarmList, modifyMyfarmDone } = useSelector((state: RootState) => state.farm);

    const onClose = useCallback(() => {
        dispatch(farmModifyModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(loadAllMyfarmRequest(getToken()));
        dispatch(modifyMyfarmClear());
        dispatch(farmModifyModalClose());
    }, [dispatch]);

    const farmInfo = myFarmList.find((ele: MyFarmInfo) => ele.id === farmId);

    return (
        <>
            {modifyMyfarmDone ? (
                <SuccessModal text="농가 수정 완료" onOk={onOk} />
            ) : (
                <Modal title="농가 수정" onCancel={onClose}>
                    <FarmModifyForm farmInfo={farmInfo} />
                </Modal>
            )}
        </>
    );
};

export default FarmModifyModal;
