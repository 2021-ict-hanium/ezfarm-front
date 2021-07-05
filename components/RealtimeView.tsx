/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from 'styled-components';
import { ModalOverlay, CloseBtn, ModalTitle } from '../styles/styles';
import { ViewListData } from '../utils/data';

type Props = {
    onClose: () => void;
};

const RealtimeView = ({ onClose }: Props) => (
    <ModalOverlay>
        <ViewModal>
            <LeftSection>
                <ViewList>
                    {ViewListData.map((ele) => (
                        <div key={ele.id}>
                            <img src={ele.url} alt="이미지" />
                            <ImgTime>{ele.time}:00</ImgTime>
                        </div>
                    ))}
                </ViewList>
            </LeftSection>
            <RightSection>
                <CloseBtn onClick={onClose}>x</CloseBtn>
                <Container>
                    <ModalTitle>실시간 화면</ModalTitle>
                    <img src="https://placeimg.com/300/200/any" alt="이미지" />
                    <ImgTime>12:00</ImgTime>
                </Container>
            </RightSection>
        </ViewModal>
    </ModalOverlay>
);

const LeftSection = styled.div`
    width: 30%;
    background-color: #eeeeee;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 30px;
    padding-right: 0px;
`;

const ImgTime = styled.div`
    margin-left: auto;
    font-weight: 600;
`;

const ViewList = styled.div`
    /* border: 1px solid gray; */
    height: 100%;
    div {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }
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
`;

const RightSection = styled.div`
    width: 70%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
`;

const Container = styled.div`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    & > span:first-child {
        margin-left: auto;
        margin-right: -20px;
        font-size: 30px;
    }
    img {
        /* width: 100%; */
        /* height: 60%; */
        margin: 30px 0 10px 0;
    }
`;

const ViewModal = styled.div`
    background: white;
    border-radius: 30px;
    display: flex;
    width: 70%;
    height: 70%;
    max-width: 1300px;
    max-height: 800px;
`;

export default RealtimeView;
