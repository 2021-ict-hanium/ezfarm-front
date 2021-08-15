/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import nookies from 'nookies';
import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import ControlModal from '../components/home/ControlModal';
import ViewModal from '../components/home/ViewModal';
import RecentNotification from '../components/home/RecentNotification';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';
import wrapper from '../store/configureStore';
import { loadProfileRequest } from '../actions/user';
import UserCurrentDashboard from '../components/home/UserCurrentDashboard';
import { loadAllMyfarmRequest, loadMyfarmDashboardRequest } from '../actions/myFarm';
import MyFarmList from '../components/myfarmlist/MyFarmList';
import Loading from '../components/Loading';

const Home = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { myFarm, viewList } = useSelector((state: RootState) => state.myFarm);
    const { isControlModalVisible, isViewModalVisible, isFarmListVisible } = useSelector(
        (state: RootState) => state.modal,
    );

    useEffect(() => {
        if (!me) {
            router.push('/login');
        }
    }, [router, me]);

    useEffect(() => {
        if (myFarm) {
            dispatch(loadMyfarmDashboardRequest(myFarm.id));
        }
    }, []);

    return (
        <Layout title="HOME">
            <>
                {isFarmListVisible ? (
                    <MyFarmList />
                ) : (
                    <>
                        <SideImg />
                        <RecentNotification />
                        <UserCurrentDashboard />
                        {isControlModalVisible && <ControlModal />}
                        {isViewModalVisible && (viewList ? <ViewModal /> : <Loading />)}
                    </>
                )}
            </>
        </Layout>
    );
};

const SideImg = styled.img.attrs({
    src: 'https://media.giphy.com/media/QBpgbQa08wJ1uPvF6P/giphy.gif',
    // src: '/images/farmer.png',
})`
    position: absolute;
    top: 200px;
    right: -400px;
    z-index: -1;
    @media screen and (max-width: 1570px) {
        display: none;
    }
`;

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
