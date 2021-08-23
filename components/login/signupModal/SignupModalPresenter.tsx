import React from 'react';
import Modal from '../../common/Modal';
import SuccessModal from '../../common/SuccessModal';
import SignupFormContainer from './signupForm/SignupFormContainer';

type Props = {
    onOk: () => void;
    onClose: () => void;
    signUpDone: boolean;
};

const SignupModalPresenter = ({ onOk, onClose, signUpDone }: Props) => (
    <>
        {signUpDone ? (
            <SuccessModal text="회원가입 완료" onOk={onOk} />
        ) : (
            <Modal title="회원가입" onCancel={onClose}>
                <SignupFormContainer />
            </Modal>
        )}
    </>
);
export default SignupModalPresenter;
