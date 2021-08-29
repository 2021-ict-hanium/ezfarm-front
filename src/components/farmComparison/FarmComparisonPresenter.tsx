import React from 'react';
import { IFavoriteFarmList, IOtherFarmList } from '../../interfaces/data/otherFarm';
import Layout from '../layout/Layout';
import ComparisonContainer from './comparison/ComparisonContainer';
import OtherFarmListContainer from './otherFarmList/OtherFarmListContainer';
import SearchBarContainer from './searchBar/SearchBarContainer';

type Props = {
    favoriteFarmList: IFavoriteFarmList[];
    otherFarmList: IOtherFarmList[];
    selectFarm: (farmId: number | null) => void;
    otherFarm: IOtherFarmList;
};

const FarmComparisonPresenter = ({ favoriteFarmList, otherFarmList, selectFarm, otherFarm }: Props) => (
    <Layout title="farmComparison">
        {otherFarm ? (
            <ComparisonContainer selectFarm={selectFarm} otherFarm={otherFarm} />
        ) : (
            <>
                <SearchBarContainer />
                <OtherFarmListContainer
                    title="즐겨찾기 목록"
                    favoritefarmList={favoriteFarmList}
                    selectFarm={selectFarm}
                />
                <OtherFarmListContainer title="농가 검색" farmList={otherFarmList} selectFarm={selectFarm} />
            </>
        )}
    </Layout>
);
export default FarmComparisonPresenter;
