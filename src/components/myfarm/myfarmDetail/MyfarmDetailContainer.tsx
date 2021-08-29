import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IVaildDate } from '../../../interfaces/data/otherFarm';
import { RootState } from '../../../redux/modules/reducer';
import { getToken } from '../../../redux/sagas';
import { baseURL } from '../../../utils/utils';
import MyfarmDetailPresenter from './MyfarmDetailPresenter';

const MyfarmDetailContainer = () => {
    const { myFarm } = useSelector((state: RootState) => state.myFarm);
    const [currentView, setCurrentView] = useState('chart');
    const [vaildDate, setVaildData] = useState<IVaildDate | null>(null);

    const handleClick = (e: any) => {
        setCurrentView(e.target.name);
    };

    const loadVaildDate = useCallback(async () => {
        const res = await axios({
            method: 'GET',
            url: `${baseURL}api/facility/search-condition/${myFarm.id}`,
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        setVaildData(res.data);
    }, [myFarm]);

    useEffect(() => {
        if (myFarm) {
            loadVaildDate();
        }
    }, [myFarm, loadVaildDate]);
    return (
        <MyfarmDetailPresenter
            myFarm={myFarm}
            currentView={currentView}
            handleClick={handleClick}
            vaildDate={vaildDate as IVaildDate}
        />
    );
};
export default MyfarmDetailContainer;
