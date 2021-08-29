import axios from 'axios';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { farmListOpen } from '../../../actions/modal';
import { IChartData } from '../../../interfaces/data/myFarm';
import { IOtherFarmList, IVaildDate } from '../../../interfaces/data/otherFarm';
import { RootState } from '../../../redux/modules/reducer';
import { getToken } from '../../../redux/sagas';
import {
    baseURL,
    generateChartData,
    generateChartData2,
    getFacilityRequestParams,
    urlName,
} from '../../../utils/utils';
import ComparisonPresenter from './ComparisonPresenter';

type Props = {
    selectFarm: (farmId: number | null) => void;
    otherFarm: IOtherFarmList;
};

const ComparisonContainer = ({ selectFarm, otherFarm }: Props) => {
    const [vaildDate, setVaildData] = useState<IVaildDate | null>(null);

    const { myFarm } = useSelector((state: RootState) => state.myFarm);

    const loadVaildDate = useCallback(async () => {
        const res = await axios({
            method: 'GET',
            url: `${baseURL}api/facility/search-condition/${myFarm.id}`,
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        setVaildData(res.data);
    }, [myFarm]);

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
    const facilityRequest = useCallback(
        async (strTerm: string, _, data: any) => {
            const res1 = await axios({
                method: 'POST',
                // url: `${baseURL}api/facility/daily-avg/${farmId}`,
                url: `${baseURL}api/facility/${urlName(strTerm)}-avg/${myFarm.id}`,
                headers: { Authorization: `Bearer ${getToken()}` },
                data,
            });
            console.log(otherFarm);
            const res2 = await axios({
                method: 'POST',
                // url: `${baseURL}api/facility/daily-avg/${farmId}`,
                url: `${baseURL}api/facility/${urlName(strTerm)}-avg/${otherFarm.farmId}`,
                headers: { Authorization: `Bearer ${getToken()}` },
                data,
            });
            console.log(res2.data);
            // const newChartData: IChartData = generateChartData2(res1.data, res2.data);
            // setChartData(newChartData);
        },
        [myFarm, otherFarm],
    );

    const searchData = useCallback(
        (strTerm, strSelectDate) => {
            if (!selectDate) return;
            const data = getFacilityRequestParams(strTerm, strSelectDate);
            facilityRequest(strTerm, String(otherFarm.farmId), data);
        },
        [otherFarm, selectDate, facilityRequest],
    );
    const { isFarmListVisible } = useSelector((state: RootState) => state.modal);
    return (
        <ComparisonPresenter
            myFarm={myFarm}
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
            isFarmListVisible={isFarmListVisible}
        />
    );
};

export default ComparisonContainer;
