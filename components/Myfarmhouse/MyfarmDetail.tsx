/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../reducers';
import { StyledModal } from '../../styles/styles';
import { Koreanization } from '../../utils/data';
import ChartContainer from './ChartContainer';

const MyfarmDetail = () => {
    const [currentView, setCurrentView] = useState('chart');
    const { myFarm } = useSelector((state: RootState) => state.farm);
    const handleClick = (e) => {
        setCurrentView(e.target.name);
    };
    const totalDays = (startDate) => {
        let sdt = new Date(startDate);
        let edt = new Date();
        let dateDiff = Math.ceil((edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24));
        return dateDiff;
    };
    return (
        <>
            <FarmInfo>{`농가 이름 : ${myFarm.name}(${Koreanization(myFarm.farmType)}) | 작물 : ${Koreanization(
                myFarm.cropType,
            )} | 시작일 : ${myFarm.startDate} ${
                totalDays(myFarm.startDate) > 0 ? `(${totalDays(myFarm.startDate)}일째)` : ''
            }`}</FarmInfo>
            <Wrapper>
                <Tab>
                    <button
                        name="chart"
                        className={`${currentView === 'chart' ? `selected` : ''}`}
                        onClick={handleClick}
                    >
                        차트
                    </button>
                    <button
                        name="table"
                        className={`${currentView === 'table' ? `selected` : ''}`}
                        onClick={handleClick}
                    >
                        표
                    </button>
                </Tab>
                {currentView === 'chart' && <ChartContainer />}
            </Wrapper>
        </>
    );
};

const FarmInfo = styled.div`
    margin: 70px auto 20px 0;
    color: white;
    font-size: 30px;
    font-weight: 700;
`;

const Wrapper = styled(StyledModal)`
    width: 1100px;
    height: 600px;
    padding-bottom: 0px;
`;

const Tab = styled.div`
    position: absolute;
    top: -20px;
    right: 0;
    display: flex;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    button {
        width: 96px;
        height: 43px;
        border-radius: 30px;
        line-height: 43px;
        font-weight: 500;
        background-color: #d5d6df;
    }
    .selected {
        background-color: #f16b6f;
    }
`;

export default MyfarmDetail;
