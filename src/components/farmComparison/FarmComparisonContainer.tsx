/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavoriteFarmRequest } from '../../actions/otherFarm';
import { IOtherFarmList } from '../../interfaces/data/otherFarm';
import { RootState } from '../../redux/modules/reducer';
import FarmComparisonPresenter from './FarmComparisonPresenter';

const FarmComparisonContainer = () => {
    const dispatch = useDispatch();
    const { favoriteFarmList, otherFarmList, addFavoriteFarmDone, removeFavoriteFarmDone } = useSelector(
        (state: RootState) => state.otherFarm,
    );

    const [otherFarm, setOtherFarm] = useState<IOtherFarmList | null>(null);

    const selectFarm = useCallback((farmId: number | null) => {
        setOtherFarm(otherFarmList.find((ele: IOtherFarmList) => ele.farmId === farmId));
    }, []);

    useEffect(() => {
        dispatch(loadFavoriteFarmRequest());
    }, []);

    useEffect(() => {
        if (addFavoriteFarmDone || removeFavoriteFarmDone) {
            dispatch(loadFavoriteFarmRequest());
        }
    }, [dispatch, addFavoriteFarmDone, removeFavoriteFarmDone]);
    return (
        <FarmComparisonPresenter
            favoriteFarmList={favoriteFarmList}
            otherFarmList={otherFarmList}
            selectFarm={selectFarm}
            otherFarm={otherFarm}
        />
    );
};

export default FarmComparisonContainer;
