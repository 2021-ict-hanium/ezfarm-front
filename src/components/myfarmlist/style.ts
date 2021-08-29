import styled from '../../src/node_modules/@types/styled-components';

export const Wrapper = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-table-row:nth-child(odd) {
        background-color: #eeeeee;
    }
    th.ant-table-cell {
        background-color: white;
        font-size: 20px;
        font-weight: 600;
    }
    td.ant-table-cell {
        font-size: 15px;
        font-weight: 600;
    }
    .optionBtn {
        padding: 5px 15px;
        border-radius: 20px;
        cursor: pointer;
    }
    .optionBtn--modify {
        background-color: #d2d2d2;
    }
    .optionBtn--remove {
        background-color: #f16b6f;
        color: white;
    }
    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f16b6f;
    }
    & > button {
        margin-top: 30px;
    }
`;
