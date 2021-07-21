import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import Modal from './Modal';
import { RootState } from '../reducers';
import { profileModifyModalClose } from '../actions/modal';
import SuccessModal from './SuccessModal';
import ProfileModifyForm from './ProfileModifyForm';
import { loadProfileRequest, modifyProfileClear } from '../actions/user';
import { getToken } from '../sagas';

const ProfileModifyModal = () => {
    const dispatch = useDispatch();
    const { profileModifyDone } = useSelector((state: RootState) => state.user);

    const onClose = useCallback(() => {
        dispatch(profileModifyModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(modifyProfileClear());
        dispatch(loadProfileRequest(getToken()));
        dispatch(profileModifyModalClose());
    }, [dispatch]);

    return (
        <>
            {profileModifyDone ? (
                <SuccessModal text="회원정보 수정 완료" onOk={onOk} />
            ) : (
                <Modal title="회원정보 수정" onCancel={onClose}>
                    <ProfileModifyForm />
                </Modal>
            )}
        </>
    );
};

export default ProfileModifyModal;
