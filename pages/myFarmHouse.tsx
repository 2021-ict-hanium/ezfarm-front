import React from 'react';
import { useSelector } from 'react-redux';
import nookies from 'nookies';
import { END } from 'redux-saga';
import { loadAllMyfarmRequest } from '../actions/farm';
import { loadProfileRequest } from '../actions/user';
import MyfarmDetail from '../components/myfarmhouse/MyfarmDetail';
import MyFarmList from '../components/myfarmlist/MyFarmList';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';
import wrapper from '../store/configureStore';

const MyFarmHouse = () => {
    const { isFarmListVisible } = useSelector((state: RootState) => state.modal);
    return (
        <Layout title="MyFarm">
            {isFarmListVisible ? (
                <MyFarmList />
            ) : (
                <>
                    <MyfarmDetail />
                </>
            )}
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

export default MyFarmHouse;
