import React from 'react';
import styled from 'styled-components';
import { CompleteBtn, StyledModalOverlay, StyledModal } from '../styles/styles';

type Props = {
    text: string;
    onOk: () => void;
};

const SuccessModal = ({ text, onOk }: Props) => (
    <StyledModalOverlay>
        <StyledModal>
            <ModalText>{text}</ModalText>
            <CompleteBtn onClick={onOk}>완료</CompleteBtn>
        </StyledModal>
    </StyledModalOverlay>
);

const ModalText = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 30px;
`;

export default SuccessModal;
