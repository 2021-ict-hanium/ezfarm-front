/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavoriteFarmRequest } from '../../actions/otherFarm';
import { RootState } from '../../reducers';
import FarmComparisonPresenter from './FarmComparisonPresenter';

const FarmComparisonContainer = () => {
    const dispatch = useDispatch();
    const { favoriteFarmList, otherFarmList, addFavoriteFarmDone, removeFavoriteFarmDone } = useSelector(
        (state: RootState) => state.otherFarm,
    );
    useEffect(() => {
        dispatch(loadFavoriteFarmRequest());
    }, []);

    useEffect(() => {
        if (addFavoriteFarmDone || removeFavoriteFarmDone) {
            dispatch(loadFavoriteFarmRequest());
        }
    }, [dispatch, addFavoriteFarmDone, removeFavoriteFarmDone]);
    return <FarmComparisonPresenter favoriteFarmList={favoriteFarmList} otherFarmList={otherFarmList} />;
};

export default FarmComparisonContainer;
