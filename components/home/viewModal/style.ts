import styled from 'styled-components';

export const Stick = styled.span<{ wt: number }>`
    position: absolute;
    height: 100%;
    width: ${(props) => `${props.wt}%`};
    border-radius: 20px;
    background-color: #b6da72;
    left: 0;
`;

export const LeftSection = styled.div`
    /* border: 1px solid gray; */
    width: 30%;
    height: 100%;
    background-color: #eeeeee;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 30px;
    padding-right: 0px;
    .viewList {
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #f16b6f;
        }
        &::-webkit-scrollbar-track {
            background-color: inherit;
        }
    }
`;

export const ImageBox = styled.div<{ selected: number; id: string }>`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
    border: ${(props) => props.selected === parseInt(props.id, 10) && '2px solid red'};
    img {
        cursor: pointer;
    }
`;

export const RightSection = styled.div`
    width: 70%;
    height: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 30px;
`;

export const ImgTime = styled.span`
    margin-left: auto;
    font-weight: 600;
`;

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    padding: 30px;
    .img-box {
        width: 800px;
        height: min-content;
    }
    & > div {
        position: relative;
        align-self: center;
        width: 90%;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #b6da72;

        & > span:last-child {
            position: absolute;
            width: 100%;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            font-weight: 700;
        }
    }
`;
