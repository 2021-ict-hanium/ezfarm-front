import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IVaildDate } from '../../../interfaces/data/otherFarm';
import { RootState } from '../../../reducers';
import { getToken } from '../../../sagas';
import { baseURL } from '../../../utils/utils';
import MyfarmDetailPresenter from './MyfarmDetailPresenter';

const MyfarmDetailContainer = () => {
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
        <MyfarmDetailPresenter
            myFarm={myFarm}
            currentView={currentView}
            handleClick={handleClick}
            vaildDate={vaildDate as IVaildDate}
        />
    );
};
export default MyfarmDetailContainer;
