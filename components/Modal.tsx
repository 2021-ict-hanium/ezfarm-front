import React from 'react';
import styled from 'styled-components';
import { StyledModalOverlay, StyledModal } from '../styles/styles';

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

const StyledModalCloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    font-size: 25px;
    font-weight: 700;
    color: #999;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        color: #505050;
    }
`;

export default Modal;
