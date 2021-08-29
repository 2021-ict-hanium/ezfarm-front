import React from '../../src/node_modules/@types/react';
import styled from '../../src/node_modules/@types/styled-components';
import { CompleteBtn } from './Btn';
import Modal from './Modal';

type Props = {
    text: string;
    onOk: () => void;
};

const SuccessModal = ({ text, onOk }: Props) => (
    <Modal>
        <Wrapper>
            <span>{text}</span>
            <CompleteBtn onClick={onOk}>완료</CompleteBtn>
        </Wrapper>
    </Modal>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
        font-size: 20px;
        font-weight: 600;
        padding: 30px;
    }
`;

export default SuccessModal;
