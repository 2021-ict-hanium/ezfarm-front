/* eslint-disable react/button-has-type */
import { Radio } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { farmListOpen } from '../../actions/modal';
import useInput from '../../hooks/useInput';
import { RootState } from '../../reducers';
import Chart from './Chart';

const data = [
    {
        name: '1월',
        온도: 36.1,
    },
    {
        name: '2월',
        온도: 36.5,
    },
    {
        name: '3월',
        온도: 36.5,
    },
    {
        name: '4월',
        온도: 35.5,
    },
    {
        name: '5월',
        온도: 35.7,
    },
    {
        name: '6월',
        온도: 36.3,
    },
];
const ChartContainer = () => {
    const dispatch = useDispatch();
    const [term, changeTerm] = useInput('DAY');
    const { myFarm } = useSelector((state: RootState) => state.farm);

    const openFarmList = useCallback(() => {
        dispatch(farmListOpen());
    }, [dispatch]);

    return (
        <>
            <Topbar>
                <Radio.Group onChange={changeTerm} value={term}>
                    <Radio value="DAY">일간</Radio>
                    <Radio value="WEEK">주간</Radio>
                    <Radio value="MONTH">월간</Radio>
                </Radio.Group>
                <div className="currentFarm">
                    현재 선택된 농가<span>{myFarm.name}</span>
                </div>
                <SelectedBtn onClick={openFarmList}>농가선택</SelectedBtn>
            </Topbar>
            <Container>
                <Chart dataKey="온도" data={data} />
                <Chart dataKey="조도" data={data} />
                <Chart dataKey="습도(%)" data={data} />
                <Chart dataKey="잔존CO2" data={data} />
                <Chart dataKey="PH" data={data} />
                <Chart dataKey="급액EC" data={data} />
            </Container>
        </>
    );
};

const Topbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding-left: 50px;
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
    margin-top: 30px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export default ChartContainer;
