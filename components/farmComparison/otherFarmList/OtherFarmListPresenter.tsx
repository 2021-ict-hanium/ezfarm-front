import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { title } from 'process';
import React from 'react';
import { IFarmList, IFavoriteFarmList, IOtherFarmList } from '../../../interfaces/data/otherFarm';
import Loading from '../../common/Loading';
import { Container, Wrapper } from './style';

type Props = {
    favoritefarmList: IFavoriteFarmList[];
    farmTableColumns: ColumnsType<IFarmList>;
    loadFavoriteFarmLoading: boolean;
    loadOtherFarmLoading: boolean;
    farmList: IOtherFarmList[];
};

const OtherFarmListPresenter = ({
    favoritefarmList,
    farmTableColumns,
    loadFavoriteFarmLoading,
    farmList,
    loadOtherFarmLoading,
}: Props) => (
    <Wrapper>
        <header>{title}</header>
        <Container>
            {favoritefarmList &&
                (!loadFavoriteFarmLoading ? (
                    <Table<IFarmList>
                        columns={farmTableColumns}
                        dataSource={favoritefarmList.map((ele) => ({
                            ...ele.farmSearchResponse,
                            key: String(ele.farmSearchResponse.farmId),
                        }))}
                    />
                ) : (
                    <Loading />
                ))}
            {farmList &&
                (!loadOtherFarmLoading ? (
                    <Table<IFarmList>
                        columns={farmTableColumns}
                        dataSource={farmList.map((ele) => ({
                            ...ele,
                            key: String(ele.farmId),
                        }))}
                    />
                ) : (
                    <Loading />
                ))}
        </Container>
    </Wrapper>
);

export default OtherFarmListPresenter;
