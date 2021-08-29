import React from 'react';
import { END } from 'redux-saga';
import nookies from 'nookies';
import { loadAllMyfarmRequest } from '../../actions/myFarm';
import { loadProfileRequest } from '../../actions/user';
import HomeContainer from '../../components/home/HomeContainer';
import wrapper from '../store/configureStore';

const Home = () => <HomeContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
        context.store.dispatch(loadAllMyfarmRequest(cookies.accessToken));
        context.store.dispatch(END);
        await context.store.sagaTask?.toPromise();
    }
});

export default Home;
