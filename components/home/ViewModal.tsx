/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { StyledModalOverlay, StyledModalCloseBtn } from '../../styles/styles';
import { viewModalClose } from '../../actions/modal';
import { RootState } from '../../reducers';
import Loading from '../Loading';
import { FarmView } from '../../interfaces/data/myFarm';
import { loadViewRequest } from '../../actions/myFarm';

const ViewModal = () => {
    const dispatch = useDispatch();
    const scrollRef = useRef<HTMLDivElement>(null);

    const { viewList, loadViewLoading, loadViewDone } = useSelector((state: RootState) => state.myFarm);

    const [currentImage, setCurrentImage] = useState<FarmView | null>(null);
    const [init, setInit] = useState(false);

    const onClickImage = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const selectedImage = viewList.find(
                (ele: FarmView) => ele.measureTime === parseInt((e.target as Element).id, 10),
            );
            if (selectedImage) {
                setCurrentImage(selectedImage);
            }
        },
        [viewList],
    );

    const onClose = useCallback(() => {
        dispatch(viewModalClose());
    }, [dispatch]);

    // 이미지 로딩
    useEffect(() => {
        if (viewList === null) {
            dispatch(loadViewRequest(1));
        }
    }, [dispatch, viewList]);

    // 현재 이미지 설정
    useEffect(() => {
        if (loadViewDone) {
            setCurrentImage(viewList[viewList.length - 1]);
            setInit(true);
        }
    }, [loadViewDone, viewList]);

    useEffect(() => {
        if (init && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [init]);

    return (
        <>
            <StyledModalOverlay>
                <Modal>
                    <div className="content">
                        <LeftSection>
                            <div className="viewList" ref={scrollRef}>
                                {init &&
                                    viewList.map((ele: FarmView) => (
                                        <ImageBox
                                            id={String(ele.measureTime)}
                                            selected={(currentImage as FarmView).measureTime}
                                            key={ele.measureTime}
                                            onClick={onClickImage}
                                        >
                                            <img src={ele.imageUrl} alt="이미지" id={String(ele.measureTime)} />
                                            <ImgTime>{ele.measureTime}:00</ImgTime>
                                        </ImageBox>
                                    ))}
                            </div>
                        </LeftSection>
                        <RightSection>
                            <StyledModalCloseBtn onClick={onClose}>&times;</StyledModalCloseBtn>
                            <Container>
                                <header>실시간 화면</header>
                                {init && (
                                    <>
                                        <img src={(currentImage as FarmView).imageUrl} alt="이미지" />
                                        <ImgTime>{(currentImage as FarmView).measureTime}:00</ImgTime>
                                        <div>
                                            <Stick wt={(currentImage as FarmView).cropCondition} />
                                            <span>숙도 판별 {(currentImage as FarmView).cropCondition}%</span>
                                        </div>
                                    </>
                                )}
                            </Container>
                        </RightSection>
                    </div>
                </Modal>
            </StyledModalOverlay>
            {loadViewLoading && <Loading />}
        </>
    );
};

const Stick = styled.span<{ wt: number }>`
    position: absolute;
    height: 100%;
    width: ${(props) => `${props.wt}%`};
    border-radius: 20px;
    background-color: #b6da72;
    left: 0;
`;

const LeftSection = styled.div`
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

const ImageBox = styled.div<{ selected: number; id: string }>`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
    border: ${(props) => props.selected === parseInt(props.id, 10) && '2px solid red'};
    img {
        cursor: pointer;
    }
`;

const RightSection = styled.div`
    width: 70%;
    height: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 30px;
`;

const ImgTime = styled.span`
    margin-left: auto;
    font-weight: 600;
`;

const Container = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    header {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 20px;
    }
    img {
        align-self: center;
        width: 90%;
        height: 50%;
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

const Modal = styled.div`
    background: white;
    border-radius: 30px;
    margin: auto;
    position: relative;
    width: 70%;
    max-width: 1300px;
    min-width: 700px;
    &::before {
        content: '';
        display: block;
        padding-top: 60%;
    }
    .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
    }
`;

export default ViewModal;
