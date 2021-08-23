import styled from 'styled-components';

export const FarmInfo = styled.div`
    margin: 70px auto 20px 0;
    color: white;
    font-size: 30px;
    font-weight: 700;
`;

export const Wrapper = styled.div`
    width: 1100px;
    height: 600px;
    padding-bottom: 0px;
`;

export const Tab = styled.div`
    position: absolute;
    top: -20px;
    right: 0;
    display: flex;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    button {
        width: 96px;
        height: 43px;
        border-radius: 30px;
        line-height: 43px;
        font-weight: 500;
        background-color: #d5d6df;
    }
    .selected {
        background-color: #f16b6f;
    }
`;
