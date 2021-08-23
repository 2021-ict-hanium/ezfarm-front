import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import image from 'antd/lib/image';
import React, { RefObject } from 'react';
import { IOnSubmit, ISetState } from '../../../interfaces/data/common';
import { Me } from '../../../interfaces/data/user';
import { CompleteBtn } from '../../common/Btn';
import ErrorMessage from '../../common/ErrorMessage';
import Loading from '../../common/Loading';
import Modal from '../../common/Modal';
import SuccessModal from '../../common/SuccessModal';
import { Avatar, DeleteBtn, Form, Hr, ImageWrapper, InputWrapper } from './style';

type Props = {
    onOk: () => void;
    onClose: () => void;
    currentImage: string;
    imageInput: RefObject<HTMLInputElement>;
    onChangeImages: ISetState;
    imageUpload: () => void;
    removeImage: () => void;
    me: Me;
    phoneNumber: string;
    onChangePhoneNumber: ISetState;
    address: string;
    onChangeAddress: ISetState;
    isChange: boolean;
    modifyProfileLoading: boolean;
    modifyProfileDone: boolean;
    modifyProfileError: boolean;
    onSubmit: IOnSubmit;
};

const ProfileModifyModalPresenter = ({
    onOk,
    onClose,
    removeImage,
    currentImage,
    imageInput,
    onChangeImages,
    imageUpload,
    me,
    phoneNumber,
    onChangePhoneNumber,
    address,
    onChangeAddress,
    isChange,
    modifyProfileLoading,
    modifyProfileDone,
    modifyProfileError,
    onSubmit,
}: Props) => (
    <>
        {modifyProfileDone ? (
            <SuccessModal text="회원정보 수정 완료" onOk={onOk} />
        ) : (
            <Modal title="회원정보 수정" onCancel={onClose}>
                <Form onSubmit={onSubmit}>
                    <ImageWrapper>
                        {image ? (
                            <>
                                <Avatar src={URL.createObjectURL(image)} alt="avatar" />
                                <DeleteBtn onClick={removeImage}>
                                    <CloseOutlined />
                                </DeleteBtn>
                            </>
                        ) : (
                            <>
                                {currentImage ? (
                                    <>
                                        <Avatar src={currentImage} alt="avatar" />
                                        <DeleteBtn onClick={removeImage}>
                                            <CloseOutlined />
                                        </DeleteBtn>
                                    </>
                                ) : (
                                    <Avatar src="/images/avatar_default.png" alt="avatar" />
                                )}
                            </>
                        )}
                    </ImageWrapper>
                    <ImageWrapper>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            hidden
                            ref={imageInput}
                            onChange={onChangeImages}
                        />
                        <Button icon={<UploadOutlined />} onClick={imageUpload}>
                            Upload
                        </Button>
                    </ImageWrapper>
                    <InputWrapper>
                        <Hr width={100}>
                            <span className="line" />
                            <span className="circle" />
                        </Hr>
                        <label>이메일</label>
                        <span>{me.email}</span>
                    </InputWrapper>
                    <InputWrapper>
                        <Hr width={110}>
                            <span className="line" />
                            <span className="circle" />
                        </Hr>
                        <label>이름</label>
                        <span>{me.name}</span>
                    </InputWrapper>
                    <InputWrapper>
                        <Hr width={90}>
                            <span className="line" />
                            <span className="circle" />
                        </Hr>
                        <label htmlFor="phoneNumber">전화번호</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={onChangePhoneNumber}
                            placeholder="전화번호를 입력해주세요"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Hr width={116}>
                            <span className="line" />
                            <span className="circle" />
                        </Hr>
                        <label htmlFor="address">주소</label>
                        <input
                            name="address"
                            value={address}
                            onChange={onChangeAddress}
                            placeholder="주소를 입력해주세요"
                        />
                    </InputWrapper>
                    {isChange && <CompleteBtn>수정완료</CompleteBtn>}
                    {modifyProfileError && <ErrorMessage message="회원정보 수정에 실패하였습니다." />}
                    {modifyProfileLoading && <Loading />}
                </Form>
            </Modal>
        )}
    </>
);
export default ProfileModifyModalPresenter;
