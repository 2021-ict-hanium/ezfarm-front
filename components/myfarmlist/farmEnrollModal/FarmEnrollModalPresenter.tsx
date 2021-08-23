import { Checkbox, DatePicker, Radio, RadioChangeEvent } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import React from 'react';
import { IOnSubmit, ISetState } from '../../../interfaces/data/common';
import { CompleteBtn } from '../../common/Btn';
import Loading from '../../common/Loading';
import Modal from '../../common/Modal';
import SuccessModal from '../../common/SuccessModal';
import ErrorMessage from '../../common/ErrorMessage';
import { Form, InputWrapper, SideImg } from './style';

type Props = {
    onOk: () => void;
    onClose: () => void;
    name: string;
    changeName: ISetState;
    address: string;
    changeAddress: ISetState;
    phoneNumber: string;
    changePhoneNumber: ISetState;
    farmType: string;
    changeFarmType: (e: RadioChangeEvent) => void;
    cropType: string;
    changeCropType: (e: RadioChangeEvent) => void;
    area: string;
    changeArea: ISetState;
    onChangeStartDate: (_: unknown, dateString: string) => void;
    disabledDate: (current: moment.Moment) => boolean;
    onChangeMain: (e: CheckboxChangeEvent) => void;
    addMyfarmLoading: boolean;
    addMyfarmDone: boolean;
    addMyfarmError: boolean;
    onSubmit: IOnSubmit;
};

const FarmEnrollModalPresenter = ({
    onOk,
    onClose,
    name,
    changeName,
    address,
    changeAddress,
    phoneNumber,
    changePhoneNumber,
    farmType,
    changeFarmType,
    cropType,
    changeCropType,
    area,
    changeArea,
    onChangeStartDate,
    disabledDate,
    onChangeMain,
    addMyfarmLoading,
    addMyfarmDone,
    addMyfarmError,
    onSubmit,
}: Props) => (
    <>
        {addMyfarmDone ? (
            <SuccessModal text="농가 등록 완료" onOk={onOk} />
        ) : (
            <Modal title="농가등록" onCancel={onClose}>
                <Form onSubmit={onSubmit}>
                    <SideImg />
                    <InputWrapper>
                        <label htmlFor="name">농가 이름</label>
                        <input
                            name="name"
                            value={name}
                            onChange={changeName}
                            placeholder="농가명에 표시될 이름을 작성해주세요."
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="address">농가 주소</label>
                        <input
                            name="address"
                            value={address}
                            onChange={changeAddress}
                            placeholder="주소를 입력해 주세요."
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="phoneNumber">농가 전화번호</label>
                        <input
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={changePhoneNumber}
                            placeholder="ex) 02-1234-5678"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="farmType">농가 종류</label>
                        <Radio.Group onChange={changeFarmType} value={farmType}>
                            <Radio value="VINYL">비닐</Radio>
                            <Radio value="GLASS">유리</Radio>
                        </Radio.Group>
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="cropType">작물 종류</label>
                        <Radio.Group onChange={changeCropType} value={cropType}>
                            <Radio value="PAPRIKA">파프리카</Radio>
                            <Radio value="STRAWBERRY">딸기</Radio>
                            <Radio value="TOMATO">토마토</Radio>
                        </Radio.Group>
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="area">농가 면적</label>
                        <input name="area" value={area} onChange={changeArea} placeholder="(단위:ha)" />
                    </InputWrapper>
                    <InputWrapper>
                        <label>농가 생산 시작일</label>
                        <DatePicker onChange={onChangeStartDate} disabledDate={disabledDate} />
                    </InputWrapper>
                    <Checkbox onChange={onChangeMain}>메인 농가 설정</Checkbox>
                    <CompleteBtn type="submit">등록하기</CompleteBtn>
                    {addMyfarmError && <ErrorMessage message="농가등록에 실패하였습니다." />}
                    {addMyfarmLoading && <Loading />}
                </Form>
            </Modal>
        )}
    </>
);
export default FarmEnrollModalPresenter;