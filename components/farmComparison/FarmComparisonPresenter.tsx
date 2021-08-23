import React from 'react';
import { IFavoriteFarmList, IOtherFarmList } from '../../interfaces/data/otherFarm';
import Layout from '../layout/Layout';
import OtherFarmListContainer from './otherFarmList/OtherFarmListContainer';
import SearchBarContainer from './searchBar/SearchBarContainer';

type Props = {
    favoriteFarmList: IFavoriteFarmList[];
    otherFarmList: IOtherFarmList[];
};

const FarmComparisonPresenter = ({ favoriteFarmList, otherFarmList }: Props) => (
    <Layout title="farmComparison">
        <SearchBarContainer />
        <OtherFarmListContainer title="즐겨찾기 목록" favoritefarmList={favoriteFarmList} />
        <OtherFarmListContainer title="농가 검색" farmList={otherFarmList} />
    </Layout>
);
export default FarmComparisonPresenter;
