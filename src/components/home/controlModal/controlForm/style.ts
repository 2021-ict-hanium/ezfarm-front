import styled from '../../../../src/node_modules/@types/styled-components';
import { Inputwrapper } from '../../../../src/styles/styles';

export const InputWrapper = styled(Inputwrapper)`
    justify-content: space-between;
`;

export const Form = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    width: 300px;
    span:first-child {
        font-size: 15px;
        font-weight: 600;
        margin-right: 50px;
    }
    .ant-switch-checked {
        background-color: #b6da72;
    }
    input {
        width: 100px;
        border: none;
        border-bottom: 1px solid #b6da72;
        border-radius: 0;
    }
`;
