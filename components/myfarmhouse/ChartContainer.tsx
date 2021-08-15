/* eslint-disable react/button-has-type */
import moment from 'moment';
import { Radio, DatePicker } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import axios from 'axios';
import { farmListOpen } from '../../actions/modal';
import { IVaildDate } from '../../interfaces/data/otherFarm';
import { RootState } from '../../reducers';
import Chart from './Chart';
import { baseURL, generateChartData, getFacilityRequestParams, urlName } from '../../utils/utils';
import Loading from '../Loading';
import { getToken } from '../../sagas';
import { IChartData } from '../../interfaces/data/myFarm';

type Props = {
    vaildDate?: IVaildDate;
};
const ChartContainer = ({ vaildDate }: Props) => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState('DAY');
    const [selectDate, setSelectDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState<IChartData | null>(null);
    const { myFarm } = useSelector((state: RootState) => state.myFarm);
    const openFarmList = useCallback(() => {
        dispatch(farmListOpen());
    }, [dispatch]);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.value);
        setSelectDate('');
    }, []);
    const onChangeDate = useCallback((_, dateString) => {
        setSelectDate(dateString);
    }, []);
    const disabledDate = useCallback(
        (current) =>
            current < moment((vaildDate as IVaildDate).startDate) ||
            current > moment((vaildDate as IVaildDate).endDate),
        [vaildDate],
    );
    const facilityRequest = async (strTerm: string, farmId: string, data: any) => {
        const res = await axios({
            method: 'POST',
            // url: `${baseURL}api/facility/daily-avg/${farmId}`,
            url: `${baseURL}api/facility/${urlName(strTerm)}-avg/102`,
            headers: { Authorization: `Bearer ${getToken()}` },
            data,
        });
        const newChartData = generateChartData(res.data);
        setChartData(newChartData);
    };

    const searchData = useCallback(
        (strTerm, strSelectDate) => {
            if (!selectDate) return;
            const data = getFacilityRequestParams(strTerm, strSelectDate);
            facilityRequest(strTerm, myFarm.id, data);
        },
        [myFarm, selectDate],
    );
    console.log(chartData);
    return (
        <>
            <Topbar>
                <div>
                    <Radio.Group onChange={onChangeTerm} value={term}>
                        <Radio value="DAY">일간</Radio>
                        <Radio value="WEEK">주간</Radio>
                        <Radio value="MONTH">월간</Radio>
                    </Radio.Group>
                    {term === 'DAY' && (
                        <DatePicker onChange={onChangeDate} picker="month" disabledDate={disabledDate} />
                    )}
                    {term === 'WEEK' && (
                        <DatePicker onChange={onChangeDate} picker="quarter" disabledDate={disabledDate} />
                    )}
                    {term === 'MONTH' && (
                        <DatePicker onChange={onChangeDate} picker="year" disabledDate={disabledDate} />
                    )}
                </div>
                <button
                    className="search"
                    onClick={() => {
                        searchData(term, selectDate);
                    }}
                >
                    데이터 조회
                </button>
                <div className="currentFarm">
                    현재 선택된 농가<span>{myFarm.name}</span>
                </div>
                <SelectedBtn onClick={openFarmList}>농가선택</SelectedBtn>
            </Topbar>
            <Container>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        {chartData ? (
                            <Chart dataKey="온도" data={chartData.avgTmp} />
                        ) : (
                            <Chart dataKey="온도" data={[]} />
                        )}
                        {chartData ? (
                            <Chart dataKey="조도" data={chartData.avgIlluminance} />
                        ) : (
                            <Chart dataKey="조도" data={[]} />
                        )}
                        {chartData ? (
                            <Chart dataKey="습도" data={chartData.avgHumidity} />
                        ) : (
                            <Chart dataKey="습도" data={[]} />
                        )}
                        {chartData ? (
                            <Chart dataKey="CO2" data={chartData.avgCo2} />
                        ) : (
                            <Chart dataKey="CO2" data={[]} />
                        )}
                        {chartData ? <Chart dataKey="PH" data={chartData.avgPh} /> : <Chart dataKey="PH" data={[]} />}
                        {chartData ? (
                            <Chart dataKey="급액" data={chartData.avgMos} />
                        ) : (
                            <Chart dataKey="급액" data={[]} />
                        )}
                    </>
                )}

                {/* <Chart dataKey="조도" data={} />
                <Chart dataKey="습도(%)" data={} />
                <Chart dataKey="잔존CO2" data={} />
                <Chart dataKey="PH" data={} />
                <Chart dataKey="급액EC" data={} /> */}
            </Container>
        </>
    );
};
ChartContainer.defaultProps = {
    vaildDate: {
        startDate: '2020-01-01',
        endDate: '2020-12-31',
    },
};
const Topbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding-left: 50px;
    & > button.search {
        margin-left: 10px;
        border-radius: 20px;
        background-color: #f16b6f;
        color: #ffffff;
        font-weight: 700;
        padding: 10px;
    }
    & > div:first-child {
        display: flex;
        flex-direction: column;
        .ant-picker {
            margin-top: 10px;
        }
    }
    .currentFarm {
        margin-left: 200px;
        width: 210px;
        height: 34px;
        border-radius: 17px;
        background-color: #eeeeee;
        font-size: 14px;
        font-weight: 500;
        line-height: 34px;
        span {
            margin-left: 22px;
            color: #f16b6f;
            font-weight: 700;
        }
        margin-right: 15px;
    }
`;

const SelectedBtn = styled.button`
    width: 98px;
    height: 34px;
    border-radius: 17px;
    background-color: #f16b6f;
    color: #ffffff;
    font-weight: 500;
`;

const Container = styled.div`
    /* border: 1px solid gray; */
    width: 100%;
    margin-top: 30px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export default ChartContainer;
