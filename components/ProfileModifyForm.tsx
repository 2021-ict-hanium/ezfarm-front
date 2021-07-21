import React, { useState, useCallback, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Loading from './Loading';
import { CompleteBtn, Inputwrapper } from '../styles/styles';
import useInput from '../hooks/useInput';
import { RootState } from '../reducers';
import { modifyProfileRequest } from '../actions/user';
import ErrorMessage from './ErrorMessage';

const ProfileModifyForm = () => {
    const dispatch = useDispatch();
    const { me, modifyProfileLoading, modifyProfileError } = useSelector((state: RootState) => state.user);

    const [currentImage, setCurrentImage] = useState(me.imageUrl);
    const [image, setImage] = useState<File | null>(null);
    const [phoneNumber, onChangePhoneNumber] = useInput(me.phoneNumber);
    const [address, onChangeAddress] = useInput(me.address);
    const [isDefaultImage, setIsDefaultImage] = useState('N');
    const [isChange, setIsChange] = useState(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const imageUpload = useCallback(() => {
        if (!imageInput.current) return;
        imageInput.current.click();
    }, [imageInput]);
    const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setImage(e.target.files[0]);
        setIsDefaultImage('N');
        setIsChange(true);
    }, []);
    const removeImage = useCallback(() => {
        if (currentImage) {
            setCurrentImage(null);
        } else {
            setImage(null);
        }
        setIsDefaultImage('Y');
    }, [currentImage]);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isChange) {
                const data = new FormData();
                console.log(image);
                console.log(phoneNumber);
                console.log(address);
                console.log(isDefaultImage);
                data.append('image', image as File);
                data.append('phoneNumber', phoneNumber);
                data.append('address', address);
                data.append('isDefaultImage', String(isDefaultImage));
                dispatch(modifyProfileRequest(data));
            }
        },
        [dispatch, image, phoneNumber, address, isDefaultImage, isChange],
    );

    useEffect(() => {
        if (phoneNumber === me.phoneNumber && currentImage === me.imageUrl && address === me.address) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    }, [currentImage, image, phoneNumber, address, me]);

    return (
        <>
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
                    <input type="file" accept="image/*" multiple hidden ref={imageInput} onChange={onChangeImages} />
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
                        name="phoneNumber"
                        onChange={onChangePhoneNumber}
                        value={phoneNumber}
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
                        onChange={onChangeAddress}
                        value={address}
                        placeholder="주소를 입력해주세요"
                    />
                </InputWrapper>
                {isChange && <CompleteBtn>수정완료</CompleteBtn>}
                {modifyProfileError && <ErrorMessage message="회원정보 수정에 실패하였습니다." />}
            </Form>
            {modifyProfileLoading && <Loading />}
        </>
    );
};

const Form = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    button {
        margin-top: 30px;
    }
`;

const ImageWrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    justify-content: center;
    position: relative;
`;

const DeleteBtn = styled.div`
    position: absolute;
    bottom: 0;
    right: 150px;
    cursor: pointer;
`;

const Avatar = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
`;

const InputWrapper = styled(Inputwrapper)`
    /* border: 1px solid gray; */
    width: 500px;
    display: flex;
    label {
        margin-right: 30px;
    }
    input {
        width: 250px;
    }
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Hr = styled.div<{ width: number }>`
    /* border: 1px solid gray; */
    position: relative;
    width: ${(props) => `${props.width}px`};
    .line {
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #b6da72;
    }
    .circle {
        position: absolute;
        right: 0;
        top: -4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #b6da72;
    }
    margin-right: 10px;
`;

export default ProfileModifyForm;
