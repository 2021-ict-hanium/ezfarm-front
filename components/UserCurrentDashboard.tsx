/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { controlModalOpen, viewModalOpen } from '../actions/modal';
import DashboardItem from './DashboardItem';

const UserCurrentDashboard = () => {
    const dispatch = useDispatch();

    const onOpenControlModal = () => {
        dispatch(controlModalOpen());
    };

    const onOpenViewModal = () => {
        dispatch(viewModalOpen());
    };

    return (
        <Wrapper>
            <div className="title1">User Current</div>
            <div className="title2">Dashboard</div>
            <div className="container">
                <Dashboard>
                    {/* <DashboardItem eng="Temperature" kor="온도" value="35.8°C" /> */}
                    <div>
                        <DashboardItem eng="Temperature" kor="온도" value="35.8°C" />
                        <DashboardItem eng="Illuminance" kor="조도" value="1800lx" />
                        <DashboardItem eng="Humidity" kor="습도" value="45%" />
                    </div>
                    <div>
                        <DashboardItem eng="CO2" kor="이산화탄소" value="550ppm" />
                        <DashboardItem eng="pH" kor="급액" value="5.98" />
                        <DashboardItem eng="EC" kor="토양수분" value="2.63%" />
                    </div>
                </Dashboard>
                <ButtonTap>
                    <div onClick={onOpenControlModal}>실시간 제어</div>
                    <div onClick={onOpenViewModal}>실시간 화면</div>
                    <div>농가 선택</div>
                </ButtonTap>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* border: 1px solid gray; */
    margin-top: 70px;
    max-width: 1056px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    .title1,
    .title2 {
        color: #ffffff;
        margin-left: 26px;
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

const Dashboard = styled.div`
    /* border: 1px solid gray; */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & > div {
        display: flex;
        justify-content: space-between;
    }
`;

const ButtonTap = styled.div`
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
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        &:active {
            transform: scale(0.95);
        }
    }
`;

export default UserCurrentDashboard;
