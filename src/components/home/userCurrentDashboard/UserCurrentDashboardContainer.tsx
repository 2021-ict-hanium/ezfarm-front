import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { controlModalOpen, viewModalOpen, farmListOpen } from '../../../actions/modal';
import { loadFarmViewRequest } from '../../../actions/myFarm';
import { RootState } from '../../../redux/modules/reducer';
import UserCurrentDashboardPresenter from './UserCurrentDashboardPresenter';

const UserCurrentDashboardContainer = () => {
    const dispatch = useDispatch();
    const { myFarm, myFarmDashboard, viewList } = useSelector((state: RootState) => state.myFarm);

    const openControlModal = useCallback(() => {
        dispatch(controlModalOpen());
    }, [dispatch]);

    const openViewModal = useCallback(() => {
        if (!viewList) {
            dispatch(loadFarmViewRequest(myFarm.id));
        }
        dispatch(viewModalOpen());
    }, [dispatch, myFarm, viewList]);

    const openFarmList = useCallback(() => {
        dispatch(farmListOpen());
    }, [dispatch]);
    return (
        <UserCurrentDashboardPresenter
            openControlModal={openControlModal}
            openViewModal={openViewModal}
            openFarmList={openFarmList}
            myFarmDashboard={myFarmDashboard}
        />
    );
};
export default UserCurrentDashboardContainer;
