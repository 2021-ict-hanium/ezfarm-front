import React from 'react';
import nookies from 'nookies';
import { END } from 'redux-saga';
import SearchBar from '../components/otherfarmhouse/SearchBar';
import { loadAllMyfarmRequest } from '../actions/farm';
import { loadProfileRequest } from '../actions/user';
import Layout from '../layout/Layout';
import wrapper from '../store/configureStore';

const OtherFarmHouse = () => (
    <Layout title="OtherFarm">
        <>
            <SearchBar />
        </>
    </Layout>
);

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

export default OtherFarmHouse;
