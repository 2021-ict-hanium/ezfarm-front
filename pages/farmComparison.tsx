/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import nookies from 'nookies';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/otherfarmhouse/SearchBar';
import { loadAllMyfarmRequest } from '../actions/myFarm';
import { loadProfileRequest } from '../actions/user';
import Layout from '../components/layout/Layout';
import wrapper from '../store/configureStore';
import OtherFarmList from '../components/otherfarmhouse/OtherFarmList';
import { RootState } from '../reducers';
import { loadFavoriteFarmRequest } from '../actions/otherFarm';

const FarmComparison = () => {
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
    }, [addFavoriteFarmDone, removeFavoriteFarmDone]);
    console.log(favoriteFarmList);
    return (
        <Layout title="farmComparison">
            <>
                <SearchBar />
                <OtherFarmList title="즐겨찾기 목록" favoritefarmList={favoriteFarmList} />
                <OtherFarmList title="농가 검색" farmList={otherFarmList} />
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

export default FarmComparison;
