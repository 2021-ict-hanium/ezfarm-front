import React from 'react';
import { IMyFarmInfo } from '../../../interfaces/data/myFarm';
import { IVaildDate } from '../../../interfaces/data/otherFarm';
import { fromDateToNow, koreanization } from '../../../utils/utils';
import ChartListContainer from './chartList/ChartListContainer';
import { FarmInfo, Tab, Wrapper } from './style';

type Props = {
    myFarm: IMyFarmInfo;
    currentView: string;
    handleClick: (e: any) => void;
    vaildDate: IVaildDate;
};

const MyfarmDetailPresenter = ({ myFarm, currentView, handleClick, vaildDate }: Props) => (
    <>
        <FarmInfo>{`농가 이름 : ${myFarm.name}(${koreanization(myFarm.farmType)}) | 작물 : ${koreanization(
            myFarm.cropType,
        )} | 시작일 : ${myFarm.startDate} ${
            fromDateToNow(myFarm.startDate) > 0 ? `(${fromDateToNow(myFarm.startDate)}일째)` : ''
        }`}</FarmInfo>
        <Wrapper>
            <Tab>
                <button
                    type="button"
                    name="chart"
                    className={`${currentView === 'chart' ? `selected` : ''}`}
                    onClick={handleClick}
                >
                    차트
                </button>
                <button
                    type="button"
                    name="table"
                    className={`${currentView === 'table' ? `selected` : ''}`}
                    onClick={handleClick}
                >
                    표
                </button>
            </Tab>
            {currentView === 'chart' && <ChartListContainer vaildDate={vaildDate as IVaildDate} />}
        </Wrapper>
    </>
);
export default MyfarmDetailPresenter;
