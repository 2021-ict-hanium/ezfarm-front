import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import React, { useState, useCallback, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addMyfarmRequest } from '../../actions/farm';
import useInput from '../../hooks/useInput';
import { RootState } from '../../reducers';
import { CompleteBtn, Inputwrapper } from '../../styles/styles';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';

const FarmEnrollForm = () => {
    const dispatch = useDispatch();

    const { addMyfarmLoading, addMyfarmError } = useSelector((state: RootState) => state.farm);

    const [name, changeName] = useInput('');
    const [address, changeAddress] = useInput('');
    const [phoneNumber, changePhoneNumber] = useInput('');
    const [farmType, changeFarmType] = useInput('');
    const [cropType, changeCropType] = useInput('');
    const [area, changeArea] = useInput('');
    const [startDate, changeStartDate] = useInput('');
    const [main, setMain] = useState(false);

    const onChangeMain = (e: CheckboxChangeEvent) => {
        setMain(e.target.checked);
    };

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(addMyfarmRequest({ name, address, phoneNumber, farmType, cropType, area, startDate, main }));
        },
        [dispatch, name, address, phoneNumber, farmType, cropType, area, startDate, main],
    );

    return (
        <>
            <Form onSubmit={onSubmit}>
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
                    <input name="farmType" value={farmType} onChange={changeFarmType} placeholder="ex) 비닐" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="cropType">작물 종류</label>
                    <input
                        name="cropType"
                        value={cropType}
                        onChange={changeCropType}
                        placeholder="ex) 토마토,파프리카"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="area">농가 면적</label>
                    <input name="area" value={area} onChange={changeArea} placeholder="(단위:ha)" />
                </InputWrapper>
                <InputWrapper>
                    <label>농가 생산 시작일</label>
                    <input type="date" onChange={changeStartDate} />
                </InputWrapper>
                <Checkbox onChange={onChangeMain}>메인 농가 설정</Checkbox>
                <CompleteBtn type="submit">등록하기</CompleteBtn>
                {addMyfarmError && <ErrorMessage message="농가등록에 실패하였습니다." />}
            </Form>
            {addMyfarmLoading && <Loading />}
        </>
    );
};

const Form = styled.form`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    width: 900px;
    padding: 0 30px;
    & > button {
        margin-top: 20px;
    }
`;

const InputWrapper = styled(Inputwrapper)`
    /* border: 1px solid black; */
    label {
        width: 110px;
        font-weight: 600;
        margin-right: 50px;
    }
    input {
        width: 220px;
    }
    input[name='name'] {
        width: 290px;
    }
    input[name='address'] {
        width: 380px;
    }
    input[name='phoneNumber'] {
        width: 250px;
    }
    margin-bottom: 20px;
`;

export default FarmEnrollForm;
