/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from '../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../src/node_modules/react-redux';
import { loadFavoriteFarmRequest } from '../../actions/otherFarm';
import { RootState } from '../../src/reducers';
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
