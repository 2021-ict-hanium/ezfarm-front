import styled from '../../../src/node_modules/@types/styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    margin-top: 70px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    .title1,
    .title2 {
        color: #ffffff;
        margin-left: 26px;
        text-shadow: #f67d6f 1px 0 10px;
    }
    .title1 {
        font-size: 22px;
        font-weight: 700;
    }
    .title2 {
        font-size: 36px;
        font-weight: 700;
    }
    .container {
        margin-top: 20px;
        flex: 1;
        /* overflow: auto; */
        display: flex;
        justify-content: space-between;
    }
`;

export const Dashboard = styled.div`
    /* border: 1px solid gray; */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & > div {
        display: flex;
        justify-content: space-between;
    }
`;

export const ButtonTap = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 10px;
    div {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: white;
        text-align: center;
        line-height: 100px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
        cursor: pointer;
        &:active {
            transform: scale(0.95);
        }
        &:hover {
            background: rgba(153, 198, 68);
        }
    }
`;
