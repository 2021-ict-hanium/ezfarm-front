import React from 'react';
import nookies from 'nookies';
import { END } from 'redux-saga';
import { loadAllMyfarmRequest } from '../actions/myFarm';
import { loadProfileRequest } from '../actions/user';

import MyFarmContainer from '../components/myfarm/MyFarmContainer';
import wrapper from '../redux/create';

const MyFarm = () => <MyFarmContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
        context.store.dispatch(loadAllMyfarmRequest(cookies.accessToken));
        context.store.dispatch(END);
        await context.store.sagaTask?.toPromise();
    }
});

export default MyFarm;
