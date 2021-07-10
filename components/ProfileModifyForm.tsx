import React, { useState, useCallback, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Loading from './Loading';
import { CompleteBtn, Inputwrapper } from '../styles/styles';
import useInput from '../hooks/useInput';
import { RootState } from '../reducers';
import { profileModifyRequest } from '../actions/user';
import ErrorMessage from './ErrorMessage';

const ProfileModifyForm = () => {
    const dispatch = useDispatch();
    const { me, profileModifyLoading, profileModifyError } = useSelector((state: RootState) => state.user);

    const [image, setImage] = useState<File | null>(null);
    const [mobile, onChangeMobile] = useInput(me.mobile);
    const [address, onChangeAddress] = useInput(me.address);
    const [isChange, setIsChange] = useState(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const imageUpload = useCallback(() => {
        if (!imageInput.current) return;
        imageInput.current.click();
    }, [imageInput]);
    const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setImage(e.target.files[0]);
        setIsChange(true);
    }, []);
    const removeImage = useCallback(() => setImage(null), []);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isChange) {
                const data = new FormData();
                data.append('image', image as File);
                data.append('mobile', mobile);
                data.append('address', address);

                dispatch(profileModifyRequest());
            }
        },
        [dispatch, image, mobile, address, isChange],
    );

    useEffect(() => {
        if (mobile === me.mobile && image === null && address === me.address) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    }, [image, mobile, address, me]);

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
                        <Avatar src={me.image} alt="avatar" />
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
                    <span>test@test.com</span>
                </InputWrapper>
                <InputWrapper>
                    <Hr width={110}>
                        <span className="line" />
                        <span className="circle" />
                    </Hr>
                    <label>이름</label>
                    <span>김파머</span>
                </InputWrapper>
                <InputWrapper>
                    <Hr width={90}>
                        <span className="line" />
                        <span className="circle" />
                    </Hr>
                    <label htmlFor="mobile">전화번호</label>
                    <input
                        name="mobile"
                        onChange={onChangeMobile}
                        value={mobile}
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
                {profileModifyError && <ErrorMessage message="회원정보 수정에 실패하였습니다." />}
            </Form>
            {profileModifyLoading && <Loading />}
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
