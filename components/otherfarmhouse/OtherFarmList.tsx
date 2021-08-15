/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/display-name */
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addFavoriteFarmRequest, loadFavoriteFarmRequest, removeFavoriteFarmRequest } from '../../actions/otherFarm';
import { IFarmList, IFavoriteFarmList, IOtherFarmList } from '../../interfaces/data/otherFarm';
import { RootState } from '../../reducers';
import Loading from '../Loading';

type Props = {
    title: string;
    favoritefarmList?: IFavoriteFarmList[];
    farmList?: IOtherFarmList[];
};

const OtherFarmList = ({ title, favoritefarmList, farmList }: Props) => {
    const dispatch = useDispatch();
    const { loadOtherFarmLoading, loadFavoriteFarmLoading } = useSelector((state: RootState) => state.otherFarm);
    const Favorite = (farmId: number) => {
        if (farmList) {
            dispatch(addFavoriteFarmRequest(farmId));
        } else {
            const favoritedId = favoritefarmList?.find((ele) => ele.farmSearchResponse.farmId === farmId)?.favoriteId;
            dispatch(removeFavoriteFarmRequest(favoritedId as number));
        }
    };

    const Columns: ColumnsType<IFarmList> = [
        {
            title: '',
            dataIndex: 'main',
            key: 'main',
            align: 'center',
            render: (_, { farmId }) => (
                <div
                    className={`dot ${favoritefarmList ? 'favorite' : ''}`}
                    onClick={() => {
                        Favorite(farmId);
                    }}
                />
            ),
        },
        {
            title: '농가코드',
            dataIndex: 'farmId',
            key: 'farmId',
            align: 'center',
        },
        {
            title: '지역',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
        },
        {
            title: '재배면적',
            dataIndex: 'area',
            key: 'area',
            align: 'center',
        },

        {
            title: '품종',
            dataIndex: 'cropType',
            key: 'cropType',
            align: 'center',
        },
        {
            title: '종류',
            dataIndex: 'farmType',
            key: 'farmType',
            align: 'center',
            width: 200,
        },
        {
            title: '기타',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
    ];
    return (
        <Wrapper>
            <header>{title}</header>
            <Container>
                {favoritefarmList &&
                    (!loadFavoriteFarmLoading ? (
                        <Table<IFarmList>
                            columns={Columns}
                            dataSource={favoritefarmList.map((ele) => ele.farmSearchResponse)}
                        />
                    ) : (
                        <Loading />
                    ))}
                {farmList &&
                    (!loadOtherFarmLoading ? (
                        <Table<IFarmList> columns={Columns} dataSource={farmList} />
                    ) : (
                        <Loading />
                    ))}
            </Container>
        </Wrapper>
    );
};

OtherFarmList.defaultProps = {
    favoritefarmList: null,
    farmList: null,
};

const Wrapper = styled.section`
    width: 900px;
    box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
    background-color: white;
    border-radius: 30px;
    padding: 30px 0;
    header {
        font-size: 20px;
        margin-left: 30px;
        font-weight: 600;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-table-row:nth-child(odd) {
        background-color: #eeeeee;
    }
    th.ant-table-cell {
        background-color: white;
        font-weight: 600;
    }
    td.ant-table-cell {
        font-size: 15px;
        font-weight: 600;
    }
    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #f16b6f;
        cursor: pointer;
    }
    .favorite {
        background-color: #f16b6f;
    }
    & > button {
        margin-top: 30px;
    }
`;

export default OtherFarmList;
