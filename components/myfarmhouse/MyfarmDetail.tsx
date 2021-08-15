/* eslint-disable react/button-has-type */
import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IVaildDate } from '../../interfaces/data/otherFarm';
import { RootState } from '../../reducers';
import { getToken } from '../../sagas';
import { StyledModal } from '../../styles/styles';
import { baseURL, fromDateToNow, koreanization } from '../../utils/utils';
import ChartContainer from './ChartContainer';

const MyfarmDetail = () => {
    const { myFarm } = useSelector((state: RootState) => state.myFarm);
    const [currentView, setCurrentView] = useState('chart');
    const [vaildDate, setVaildData] = useState<IVaildDate | null>(null);

    const handleClick = (e: any) => {
        setCurrentView(e.target.name);
    };

    const loadVaildDate = async () => {
        // const res = await axios.get(`${baseURL}//api/facility/search-condition/${myFarm.id}`);
        const res = await axios({
            method: 'GET',
            url: `${baseURL}api/facility/search-condition/102`,
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        setVaildData(res.data);
    };

    useEffect(() => {
        if (myFarm) {
            loadVaildDate();
        }
    }, [myFarm]);

    return (
        <>
            <FarmInfo>{`농가 이름 : ${myFarm.name}(${koreanization(myFarm.farmType)}) | 작물 : ${koreanization(
                myFarm.cropType,
            )} | 시작일 : ${myFarm.startDate} ${
                fromDateToNow(myFarm.startDate) > 0 ? `(${fromDateToNow(myFarm.startDate)}일째)` : ''
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
                {currentView === 'chart' && <ChartContainer vaildDate={vaildDate} />}
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
