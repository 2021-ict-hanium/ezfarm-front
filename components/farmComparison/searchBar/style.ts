import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    justify-content: space-evenly;
    width: 900px;
    background-color: white;
    border-radius: 30px;
    padding: 30px 0;
    margin: 30px 0;
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: 30px;
    }
    .ant-select-arrow {
        color: #f16b6f;
    }
`;

export const SearchBtn = styled.button`
    width: 78px;
    height: 34px;
    border-radius: 17px;
    background-color: #f16b6f;
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;
`;
