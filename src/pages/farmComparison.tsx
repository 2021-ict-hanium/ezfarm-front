/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import nookies from 'nookies';
import { END } from 'redux-saga';
import { loadAllMyfarmRequest } from '../actions/myFarm';
import { loadProfileRequest } from '../actions/user';
import wrapper from '../store/create';
import FarmComparisonContainer from '../components/farmComparison/FarmComparisonContainer';

const FarmComparison = () => <FarmComparisonContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
        context.store.dispatch(loadAllMyfarmRequest(cookies.accessToken));
        context.store.dispatch(END);
        await context.store.sagaTask?.toPromise();
    }
});

export default FarmComparison;
