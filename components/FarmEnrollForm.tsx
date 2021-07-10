import React from 'react';
import styled from 'styled-components';
import { InputWrapper, CompleteBtn } from '../styles/styles';

const FarmEnrollForm = () => (
    <>
        <Wrapper>
            <Form>
                <div className="title">농가 등록</div>
                <FarmEnrollInputWrapper>
                    <label htmlFor="farm-name">농가 이름</label>
                    <input name="farm-name" placeholder="농가명에 표시될 이름을 작성해주세요." />
                </FarmEnrollInputWrapper>
                <FarmEnrollInputWrapper>
                    <label htmlFor="farm-address">농가 주소</label>
                    <input name="farm-address" placeholder="주소를 입력해 주세요." />
                </FarmEnrollInputWrapper>
                <FarmEnrollInputWrapper>
                    <label htmlFor="farm-phonenumber">농가 전화번호</label>
                    <input name="farm-phonenumber" placeholder="ex) 02-1234-5678" />
                </FarmEnrollInputWrapper>
                <FarmEnrollInputWrapper>
                    <label htmlFor="farm-kind">농가 종류</label>
                    <input name="farm-kind" placeholder="ex) 비닐" />
                </FarmEnrollInputWrapper>
                <FarmEnrollInputWrapper>
                    <label htmlFor="crop-kind">작물 종류</label>
                    <input name="crop-kind" placeholder="ex) 토마토,파프리카" />
                </FarmEnrollInputWrapper>
                <FarmEnrollInputWrapper>
                    <label htmlFor="farm-area">농가 면적</label>
                    <input name="farm-area" placeholder="(단위:ha)" />
                </FarmEnrollInputWrapper>
                <FarmEnrollInputWrapper>
                    <label htmlFor="farm-startdate">농가 생산 시작일</label>
                    <input name="farm-startdate" placeholder="ex) 2021.01.01" />
                </FarmEnrollInputWrapper>
                <CompleteBtn type="submit">등록하기</CompleteBtn>
            </Form>
        </Wrapper>
    </>
);

const Wrapper = styled.div`
    /* border: 1px solid black; */
    background-color: #ffffff;
    margin: 100px 0 0 0;
    padding: 50px 80px;
    border-radius: 30px;
`;

const Form = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 900px;
    .title {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 40px;
    }
`;

const FarmEnrollInputWrapper = styled(InputWrapper)`
    /* border: 1px solid black; */
    justify-content: flex-start;
    label {
        width: 120px;
        font-weight: 600;
        margin-right: 50px;
    }
    input {
        width: 220px;
    }
    input[name='farm-name'] {
        width: 290px;
    }
    input[name='farm-address'] {
        width: 380px;
    }
    input[name='farm-phonenumber'] {
        width: 250px;
    }
    margin-bottom: 20px;
`;

export default FarmEnrollForm;
