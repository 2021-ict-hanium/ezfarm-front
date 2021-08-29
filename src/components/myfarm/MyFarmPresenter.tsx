import React from '../../src/node_modules/@types/react';
import Layout from '../layout/Layout';
import MyFarmListContainer from '../myfarmlist/MyFarmListContainer';
import MyfarmDetailContainer from './myfarmDetail/MyfarmDetailContainer';

type Props = {
    isFarmListVisible: boolean;
};

const MyFarmPresenter = ({ isFarmListVisible }: Props) => (
    <Layout title="myFarm">
        <MyfarmDetailContainer />
        {isFarmListVisible && <MyFarmListContainer />}
    </Layout>
);
export default MyFarmPresenter;
