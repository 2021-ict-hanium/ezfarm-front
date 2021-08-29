import React from 'react';
import { IMyFarmDashboard } from '../../../interfaces/data/myFarm';
import DashboardItem from './DashboardItem';
import { ButtonTap, Dashboard, Wrapper } from './style';

type Props = {
    openControlModal: () => void;
    openViewModal: () => void;
    openFarmList: () => void;
    myFarmDashboard: IMyFarmDashboard;
};
const UserCurrentDashboardPresenter = ({ openControlModal, openViewModal, openFarmList, myFarmDashboard }: Props) => (
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
                    <DashboardItem eng="pF" kor="토양수분" value={myFarmDashboard ? `${myFarmDashboard?.mos}` : ''} />
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

export default UserCurrentDashboardPresenter;
