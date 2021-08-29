/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';

type Props = {
    title?: string;
    onCancel?: () => void;
    children: React.ReactNode;
};

const Modal = ({ title, onCancel, children }: Props) => (
    <StyledModalOverlay>
        <StyledModal>
            {title && (
                <>
                    <StyledModalCloseBtn onClick={onCancel}>&times;</StyledModalCloseBtn>
                    <header>{title}</header>
                </>
            )}
            <section>{children}</section>
        </StyledModal>
    </StyledModalOverlay>
);

Modal.defaultProps = {
    title: '',
    onCancel: () => {},
};

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000073;
    display: flex;
    justify-content: center;
    animation: overlay-show 0.3s;
    @keyframes overlay-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const StyledModal = styled.div`
    position: relative;
    margin: auto;
    background: #ffffff;
    border-radius: 30px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        /* border: 1px solid gray; */
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        margin-bottom: 40px;
    }
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

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
    &:hover {
        color: #505050;
    }
`;

export default Modal;
