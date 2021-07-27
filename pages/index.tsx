/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import nookies from 'nookies';
import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import ControlModal from '../components/home/ControlModal';
import ViewModal from '../components/home/ViewModal';
import RecentNotification from '../components/home/RecentNotification';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';
import wrapper from '../store/configureStore';
import { loadProfileRequest } from '../actions/user';
import UserCurrentDashboard from '../components/home/UserCurrentDashboard';
import { loadAllMyfarmRequest } from '../actions/farm';
import MyFarmList from '../components/myfarmlist/MyFarmList';

const Home = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const { isControlModalVisible, isViewModalVisible, isFarmListVisible } = useSelector(
        (state: RootState) => state.modal,
    );

    useEffect(() => {
        if (!me) {
            router.push('/login');
        }
    }, [router, me]);

    return (
        <Layout title="HOME">
            <>
                {isFarmListVisible ? (
                    <MyFarmList />
                ) : (
                    <>
                        <RecentNotification />
                        <UserCurrentDashboard />
                        {isControlModalVisible && <ControlModal />}
                        {isViewModalVisible && <ViewModal />}
                    </>
                )}
            </>
        </Layout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        // context.res.writeHead(302, { Location: '/login' }).end();
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
        context.store.dispatch(loadAllMyfarmRequest(cookies.accessToken));
        context.store.dispatch(END);
        await context.store.sagaTask?.toPromise();
    }
});

export default Home;
