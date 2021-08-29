import React from '../../../src/node_modules/@types/react';
import Modal from '../../common/Modal';
import SuccessModal from '../../common/SuccessModal';
import ControlFormContainer from './controlForm/ControlFormContainer';

type Props = {
    onOk: () => void;
    onClose: () => void;
    controlDone: boolean;
};

const ControlModalPresenter = ({ onOk, onClose, controlDone }: Props) => (
    <>
        {controlDone ? (
            <SuccessModal text="실시간 제어 완료" onOk={onOk} />
        ) : (
            <Modal title="실시간 제어" onCancel={onClose}>
                <ControlFormContainer />
            </Modal>
        )}
    </>
);
export default ControlModalPresenter;
