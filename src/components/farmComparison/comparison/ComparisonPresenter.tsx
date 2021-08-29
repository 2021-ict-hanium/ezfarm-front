import { Radio, DatePicker, RadioChangeEvent } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { IChartData } from '../../../interfaces/data/myFarm';
import Chart from '../../common/Chart';
import Loading from '../../common/Loading';
import { Container, Topbar, SelectedBtn } from '../../myfarm/myfarmDetail/chartList/style';
import { FarmInfo } from '../../myfarm/myfarmDetail/style';
import { IOtherFarmList } from '../../../interfaces/data/otherFarm';
import { koreanization } from '../../../utils/utils';

type Props = {
    selectFarm: (v: number | null) => void;
    term: string;
    onChangeTerm: (e: RadioChangeEvent) => void;
    onChangeDate: (_: any, dateString: any) => void;
    disabledDate: (current: any) => boolean;
    searchData: (strTerm: any, strSelectDate: any) => void;
    selectDate: string;
    openFarmList: () => void;
    isLoading: boolean;
    chartData: IChartData;
    otherFarm: IOtherFarmList;
};

const Wrapper = styled.div`
    margin-top: 50px;
    width: 1100px;
    /* height: 600px; */
    padding: 30px;
    background: white;
    border-radius: 30px;
    position: relative;
`;

const ComparisonPresenter = ({
    selectFarm,
    term,
    onChangeTerm,
    onChangeDate,
    disabledDate,
    searchData,
    selectDate,
    openFarmList,
    isLoading,
    chartData,
    otherFarm,
}: Props) => (
    <>
        <FarmInfo>{`농가 이름 : ${otherFarm.name}(${koreanization(otherFarm.farmType)}) | 작물 : ${koreanization(
            otherFarm.cropType,
        )}`}</FarmInfo>
        <Wrapper>
            <span
                onClick={() => {
                    selectFarm(null);
                }}
            >
                뒤로가기
            </span>
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
                    type="button"
                    className="search"
                    onClick={() => {
                        searchData(term, selectDate);
                    }}
                >
                    데이터 조회
                </button>
                <div className="currentFarm">
                    현재 선택된 농가<span>{otherFarm.name}</span>
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
        </Wrapper>
    </>
);

export default ComparisonPresenter;
