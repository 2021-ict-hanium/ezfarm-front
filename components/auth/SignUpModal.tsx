import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpModalClose } from '../../actions/modal';
import { signUpClear } from '../../actions/user';
import { RootState } from '../../reducers';
import Modal from '../Modal';
import SuccessModal from '../SuccessModal';
import SignUpForm from './SignUpForm';

const SignUpModal = () => {
    const dispatch = useDispatch();

    const { signUpDone } = useSelector((state: RootState) => state.user);

    const onClose = useCallback(() => {
        dispatch(signUpModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(signUpClear());
        dispatch(signUpModalClose());
    }, [dispatch]);

    return (
        <>
            {signUpDone ? (
                <SuccessModal text="회원가입 완료" onOk={onOk} />
            ) : (
                <Modal title="회원가입" onCancel={onClose}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    );
};

export default SignUpModal;
