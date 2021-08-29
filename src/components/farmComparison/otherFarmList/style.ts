import styled from '../../../src/node_modules/@types/styled-components';

export const Wrapper = styled.section`
    width: 900px;
    box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
    background-color: white;
    border-radius: 30px;
    padding: 30px 0;
    header {
        font-size: 20px;
        margin-left: 30px;
        font-weight: 600;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-table-row:nth-child(odd) {
        background-color: #eeeeee;
    }
    th.ant-table-cell {
        background-color: white;
        font-weight: 600;
    }
    td.ant-table-cell {
        font-size: 15px;
        font-weight: 600;
    }
    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #f16b6f;
        cursor: pointer;
    }
    .favorite {
        background-color: #f16b6f;
    }
    & > button {
        margin-top: 30px;
    }
`;
