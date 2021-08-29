import styled from 'styled-components';
import { Inputwrapper } from '../../../styles/styles';

export const Form = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    button {
        margin-top: 30px;
    }
`;

export const ImageWrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    justify-content: center;
    position: relative;
`;

export const DeleteBtn = styled.div`
    position: absolute;
    bottom: 0;
    right: 150px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
`;

export const InputWrapper = styled(Inputwrapper)`
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

export const Hr = styled.div<{ width: number }>`
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
