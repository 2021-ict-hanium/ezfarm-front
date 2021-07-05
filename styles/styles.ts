/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseBtn = styled.span`
    margin-left: auto;
    font-size: 30px;
    cursor: pointer;
`;

export const ModalTitle = styled.div`
    font-size: 30px;
    font-weight: 800;
    text-align: center;
`;
