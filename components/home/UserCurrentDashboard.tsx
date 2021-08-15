/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadViewRequest } from '../../actions/myFarm';
import { controlModalOpen, farmListOpen, viewModalOpen } from '../../actions/modal';
import { RootState } from '../../reducers';
import DashboardItem from './DashboardItem';

const UserCurrentDashboard = () => {
    const dispatch = useDispatch();
    const { myFarm, myFarmDashboard, viewList } = useSelector((state: RootState) => state.myFarm);

    const openControlModal = useCallback(() => {
        dispatch(controlModalOpen());
    }, [dispatch]);

    const openViewModal = useCallback(() => {
        if (!viewList) {
            dispatch(loadViewRequest(myFarm.id));
        }
        dispatch(viewModalOpen());
    }, [dispatch, myFarm, viewList]);

    const openFarmList = useCallback(() => {
        dispatch(farmListOpen());
    }, [dispatch]);
    return (
        <Wrapper>
            <div className="title1">User Current</div>
            <div className="title2">Dashboard</div>
            <div className="container">
                <Dashboard>
                    <div>
                        <DashboardItem
                            eng="Temperature"
                            kor="온도"
                            value={myFarmDashboard ? `${myFarmDashboard?.tmp}°C` : ''}
                        />
                        <DashboardItem
                            eng="Illuminance"
                            kor="조도"
                            value={myFarmDashboard ? `${myFarmDashboard?.illuminance}lx` : ''}
                        />
                        <DashboardItem
                            eng="Humidity"
                            kor="습도"
                            value={myFarmDashboard ? `${myFarmDashboard?.humidity}%` : ''}
                        />
                    </div>
                    <div>
                        <DashboardItem
                            eng="CO2"
                            kor="이산화탄소"
                            value={myFarmDashboard ? `${myFarmDashboard?.co2}ppm` : ''}
                        />
                        <DashboardItem eng="pH" kor="급액" value={myFarmDashboard ? myFarmDashboard?.ph : ''} />
                        <DashboardItem
                            eng="EC"
                            kor="토양수분"
                            value={myFarmDashboard ? `${myFarmDashboard?.mos}%` : ''}
                        />
                    </div>
                </Dashboard>
                <ButtonTap>
                    <div onClick={openControlModal}>실시간 제어</div>
                    <div onClick={openViewModal}>실시간 화면</div>
                    <div onClick={openFarmList}>농가 선택</div>
                </ButtonTap>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
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

export default UserCurrentDashboard;
