import axios from 'axios';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { farmListOpen } from '../../../actions/modal';
import { IChartData } from '../../../interfaces/data/myFarm';
import { IOtherFarmList, IVaildDate } from '../../../interfaces/data/otherFarm';
import { getToken } from '../../../redux/sagas';
import { baseURL, generateChartData, getFacilityRequestParams, urlName } from '../../../utils/utils';
import ComparisonPresenter from './ComparisonPresenter';

type Props = {
    selectFarm: (farmId: number | null) => void;
    otherFarm: IOtherFarmList;
};

const ComparisonContainer = ({ selectFarm, otherFarm }: Props) => {
    const [vaildDate, setVaildData] = useState<IVaildDate | null>(null);

    const loadVaildDate = useCallback(async () => {
        const res = await axios({
            method: 'GET',
            url: `${baseURL}api/facility/search-condition/${otherFarm.farmId}`,
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        setVaildData(res.data);
    }, [otherFarm.farmId]);

    useEffect(() => {
        if (otherFarm) {
            loadVaildDate();
        }
    }, [otherFarm, loadVaildDate]);

    const dispatch = useDispatch();
    const [term, setTerm] = useState('DAY');
    const [selectDate, setSelectDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState<IChartData | null>(null);

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
            facilityRequest(strTerm, String(otherFarm.farmId), data);
        },
        [otherFarm, selectDate],
    );

    return (
        <ComparisonPresenter
            selectFarm={selectFarm}
            term={term}
            onChangeTerm={onChangeTerm}
            onChangeDate={onChangeDate}
            disabledDate={disabledDate}
            searchData={searchData}
            selectDate={selectDate}
            openFarmList={openFarmList}
            isLoading={isLoading}
            chartData={chartData as IChartData}
            otherFarm={otherFarm}
        />
    );
};

export default ComparisonContainer;
