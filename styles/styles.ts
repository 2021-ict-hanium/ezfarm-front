/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
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

export const StyledModal = styled.div`
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

export const StyledModalCloseBtn = styled.button`
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

export const CompleteBtn = styled.button`
    /* border: 1px solid gray; */
    width: 120px;
    height: 40px;
    border-radius: 25px;
    background-color: rgba(241, 107, 111, 0.8);
    text-align: center;
    line-height: 40px;
    color: white;
    font-weight: 600;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #f16b6f;
    }
`;

export const Inputwrapper = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    label {
        font-size: 16px;
        font-weight: 500;
    }
    input {
        border: 1px solid #e5e5e5;
        width: 295px;
        height: 45px;
        border-radius: 22px;
        padding: 0 10px;
        &:focus {
            outline: none;
        }
    }
    margin-bottom: 40px;
`;
