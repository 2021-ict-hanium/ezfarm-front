import styled from '../../../../src/node_modules/@types/styled-components';

export const Topbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding-left: 50px;
    & > button.search {
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f16b6f;
        color: #ffffff;
        font-weight: 700;
        padding: 10px;
    }
    & > div:first-child {
        display: flex;
        flex-direction: column;
        .ant-picker {
            margin-top: 10px;
        }
    }
    .currentFarm {
        margin-left: 200px;
        width: 210px;
        height: 34px;
        border-radius: 17px;
        background-color: #eeeeee;
        font-size: 14px;
        font-weight: 500;
        line-height: 34px;
        span {
            margin-left: 22px;
            color: #f16b6f;
            font-weight: 700;
        }
        margin-right: 15px;
    }
`;

export const SelectedBtn = styled.button`
    width: 98px;
    height: 34px;
    border-radius: 17px;
    background-color: #f16b6f;
    color: #ffffff;
    font-weight: 500;
`;

export const Container = styled.div`
    /* border: 1px solid gray; */
    width: 100%;
    margin-top: 30px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;
