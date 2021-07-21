import React from 'react';
import styled from 'styled-components';
import { StyledModalOverlay, StyledModal } from '../styles/styles';

type Props = {
    text: string;
    onOk: () => void;
    onCancel: () => void;
};

const ConfirmModal = ({ text, onOk, onCancel }: Props) => (
    <StyledModalOverlay>
        <StyledModal>
            <ModalText>{text}</ModalText>
            <ButtonWrapper>
                <button type="button" className="ok" onClick={onOk}>
                    확인
                </button>
                <button type="button" className="cancel" onClick={onCancel}>
                    취소
                </button>
            </ButtonWrapper>
        </StyledModal>
    </StyledModalOverlay>
);

const ModalText = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 30px;
`;

const ButtonWrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 30px;
    button {
        font-weight: 600;
        width: 120px;
        height: 40px;
        border-radius: 25px;
    }
    .ok {
        color: white;
        background-color: rgba(241, 107, 111, 0.6);
        &:hover {
            background-color: rgba(241, 107, 111, 0.8);
        }
    }
    .cancel {
        background-color: rgba(128, 128, 128, 0.4);
        &:hover {
            background-color: rgba(128, 128, 128, 0.6);
        }
    }
`;

export default ConfirmModal;
