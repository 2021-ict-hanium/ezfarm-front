import React from 'react';
import { StyledModalOverlay, StyledModal, StyledModalCloseBtn } from '../styles/styles';

type Props = {
    title: string;
    onCancel: () => void;
    children: React.ReactNode;
};

const Modal = ({ title, onCancel, children }: Props) => (
    <StyledModalOverlay>
        <StyledModal>
            <StyledModalCloseBtn onClick={onCancel}>&times;</StyledModalCloseBtn>
            <header>{title}</header>
            <section>{children}</section>
        </StyledModal>
    </StyledModalOverlay>
);

export default Modal;
