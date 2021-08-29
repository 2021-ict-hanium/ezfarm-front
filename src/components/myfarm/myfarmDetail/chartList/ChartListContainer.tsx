import axios from '../../../../src/node_modules/axios';
import moment from '../../../../src/node_modules/moment';
import { useState, useCallback } from '../../../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../../../src/node_modules/react-redux';
import { farmListOpen } from '../../../../actions/modal';
import { IChartData } from '../../../../interfaces/data/myFarm';
import { IVaildDate } from '../../../../interfaces/data/otherFarm';
import { RootState } from '../../../../src/reducers';
import { getToken } from '../../../../src/sagas';
import { baseURL, urlName, generateChartData, getFacilityRequestParams } from '../../../../src/utils/utils';
import ChartListPresenter from './ChartListPresenter';

type Props = {
    vaildDate?: IVaildDate;
};

const ChartListContainer = ({ vaildDate }: Props) => {
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
    return (
        <ChartListPresenter
            term={term}
            onChangeTerm={onChangeTerm}
            onChangeDate={onChangeDate}
            disabledDate={disabledDate}
            searchData={searchData}
            selectDate={selectDate}
            openFarmList={openFarmList}
            isLoading={isLoading}
            chartData={chartData as IChartData}
        />
    );
};

ChartListContainer.defaultProps = {
    vaildDate: {
        startDate: '2020-01-01',
        endDate: '2020-12-31',
    },
};

export default ChartListContainer;
