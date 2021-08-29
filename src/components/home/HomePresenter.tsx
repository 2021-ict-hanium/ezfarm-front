import React from 'react';
import Layout from '../layout/Layout';
import MyFarmListContainer from '../myfarmlist/MyFarmListContainer';
import ControlModalContainer from './controlModal/ControlModalContainer';
import RecentNotificationContainer from './recentNotification/RecentNotificationContainer';
import UserCurrentDashboardContainer from './userCurrentDashboard/UserCurrentDashboardContainer';
import ViewModalContainer from './viewModal/ViewModalContainer';

type Props = {
    isFarmListVisible: boolean;
    isControlModalVisible: boolean;
    isViewModalVisible: boolean;
};

const HomePresenter = ({ isFarmListVisible, isControlModalVisible, isViewModalVisible }: Props) => (
    <Layout title="home">
        <RecentNotificationContainer />
        <UserCurrentDashboardContainer />
        <>
            {isFarmListVisible && <MyFarmListContainer />}
            {isControlModalVisible && <ControlModalContainer />}
            {isViewModalVisible && <ViewModalContainer />}
        </>
    </Layout>
);
export default HomePresenter;
