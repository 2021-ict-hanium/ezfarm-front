import styled from '../../../src/node_modules/@types/styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
    position: relative;
    min-width: 772px;
    max-height: 146px;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 26px;
    margin-top: 50px;
    .title {
        font-size: 22px;
        font-weight: 700;
    }
    .content {
        font-size: 20px;
        font-weight: 500;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: -20px;
        right: 30px;
        border: 30px solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-right: 0;
        border-radius: 0 30px 0;
        transform: rotate(90deg);
        box-shadow: 0.3rem 0.2rem 0.2rem 0.1rem rgba(85, 85, 85, 0.25);
    }
`;
