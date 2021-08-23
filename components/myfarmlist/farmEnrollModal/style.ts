import styled from 'styled-components';
import { Inputwrapper } from '../../../styles/styles';

export const Form = styled.form`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    position: relative;
    width: 1100px;
    padding: 0 30px;
    & > button {
        margin-top: 20px;
    }
    .ant-picker,
    .ant-picker-focused {
        padding: 0;
        border: none;
        box-shadow: none;
    }
`;

export const SideImg = styled.img.attrs({
    src: '/images/farmer.png',
})`
    position: absolute;
    top: 0;
    right: -50px;
    width: 700px;
`;

export const InputWrapper = styled(Inputwrapper)`
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
