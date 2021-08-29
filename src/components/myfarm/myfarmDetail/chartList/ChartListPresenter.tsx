import { DatePicker, Radio, RadioChangeEvent } from 'antd';
import React from 'react';
import { IChartData } from '../../../../interfaces/data/myFarm';
import Loading from '../../../common/Loading';
import Chart from '../../../common/Chart';
import { Container, SelectedBtn, Topbar } from './style';

type Props = {
    term: string;
    onChangeTerm: (e: RadioChangeEvent) => void;
    onChangeDate: (_: any, dateString: any) => void;
    disabledDate: (current: any) => boolean;
    searchData: (strTerm: any, strSelectDate: any) => void;
    selectDate: string;
    openFarmList: () => void;
    isLoading: boolean;
    chartData: IChartData;
    farmName: string;
};

const ChartListPresenter = ({
    term,
    onChangeTerm,
    onChangeDate,
    disabledDate,
    searchData,
    selectDate,
    openFarmList,
    isLoading,
    chartData,
    farmName,
}: Props) => (
    <>
        <Topbar>
            <div>
                {farmName && (
                    <>
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
                        <button
                            type="button"
                            className="search"
                            onClick={() => {
                                searchData(term, selectDate);
                            }}
                        >
                            데이터 조회
                        </button>
                    </>
                )}
            </div>

            <div className="currentFarm">
                현재 선택된 농가<span>{farmName}</span>
            </div>
            <SelectedBtn onClick={openFarmList}>농가선택</SelectedBtn>
        </Topbar>
        <Container>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {chartData ? <Chart dataKey="온도" data={chartData.avgTmp} /> : <Chart dataKey="온도" data={[]} />}
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
                    {chartData ? <Chart dataKey="CO2" data={chartData.avgCo2} /> : <Chart dataKey="CO2" data={[]} />}
                    {chartData ? <Chart dataKey="PH" data={chartData.avgPh} /> : <Chart dataKey="PH" data={[]} />}
                    {chartData ? <Chart dataKey="급액" data={chartData.avgMos} /> : <Chart dataKey="급액" data={[]} />}
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

export default ChartListPresenter;
