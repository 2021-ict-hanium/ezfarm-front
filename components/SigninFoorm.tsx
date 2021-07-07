import { FormEvent, useCallback } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const SigninForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onsubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(email);
            console.log(password);
        },
        [email, password],
    );

    return (
        <>
            <Form onSubmit={onsubmit}>
                <div className="title">로그인</div>
                <InputWrapper>
                    <label htmlFor="user-email">이메일</label>
                    <input name="user-email" type="email" value={email} onChange={onChangeEmail} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="user-password">비밀번호</label>
                    <input
                        name="user-password"
                        type="password"
                        onChange={onChangePassword}
                        value={password}
                        minLength={6}
                    />
                </InputWrapper>
                <div className="options">
                    <label>
                        <input type="checkbox" />
                        로그인상태유지
                    </label>
                    <div>이메일/비밀번호 찾기</div>
                </div>
                <FormBtn>로그인</FormBtn>
            </Form>
        </>
    );
};

const FormBtn = styled.button.attrs({
    type: 'submit',
})`
    border: none;
    height: 60px;
    background-color: #ffffff;
    border-radius: 10px;
    font-weight: 600;
    color: #f16b6f;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

const Form = styled.form`
    /* border: 1px solid black; */
    width: 400px;
    height: 336px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    input {
        color: #1c140d;
    }
    .title {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 20px;
    }
    .options {
        display: flex;
        margin: -15px 0 28px auto;
        & > * {
            margin-left: 30px;
            font-weight: 500;
            font-size: 12px;
        }
    }
    margin-top: 120px;
`;

const InputWrapper = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    label {
        font-size: 16px;
        font-weight: 500;
    }
    input {
        border: 1px solid #e5e5e5;
        width: 295px;
        height: 45px;
        border-radius: 22px;
        padding: 0 10px;
        &:focus {
            outline: none;
        }
    }
    margin-bottom: 32px;
`;

export default SigninForm;
