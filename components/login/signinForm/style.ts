import styled from 'styled-components';
import { Inputwrapper } from '../../../styles/styles';

export const InputWrapper = styled(Inputwrapper)`
    justify-content: space-between;
    label {
        color: #fff;
    }
`;

export const Form = styled.form`
    /* border: 1px solid black; */
    width: 400px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    margin-top: 120px;
    input {
        color: #1c140d;
    }
    button {
        height: 60px;
        border-radius: 10px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .title {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 20px;
        color: #fff;
    }
    .loginBtn {
        background-color: #ffffff;
        color: #f16b6f;
    }
    .signupBtn {
        color: #ffffff;
        background-color: #f16b6f;
    }
`;
