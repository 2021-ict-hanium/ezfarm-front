/* eslint-disable react/display-name */
import { Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { farmListClose } from '../../../actions/modal';
import { changeMyfarm } from '../../../actions/myFarm';
import { addFavoriteFarmRequest, removeFavoriteFarmRequest } from '../../../actions/otherFarm';
import { IFavoriteFarmList, IOtherFarmList, IFarmList } from '../../../interfaces/data/otherFarm';
import { RootState } from '../../../redux/modules/reducer';
import myFarm from '../../../redux/sagas/myFarm';
import OtherFarmListPresenter from './OtherFarmListPresenter';

type Props = {
    title: string;
    favoritefarmList?: IFavoriteFarmList[];
    farmList?: IOtherFarmList[];
    selectFarm: (v: number) => void;
};

const OtherFarmListContainer = ({ title, favoritefarmList, farmList, selectFarm }: Props) => {
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

    const farmTableColumns: ColumnsType<IFarmList> = [
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
        {
            title: '',
            key: 'action',
            align: 'left',
            render: (_, { farmId }) => (
                <Space size="middle">
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            selectFarm(farmId);
                        }}
                        className="optionBtn"
                    >
                        조회
                    </span>
                </Space>
            ),
        },
    ];
    return (
        <OtherFarmListPresenter
            favoritefarmList={favoritefarmList as IFavoriteFarmList[]}
            farmList={farmList as IOtherFarmList[]}
            farmTableColumns={farmTableColumns}
            loadFavoriteFarmLoading={loadFavoriteFarmLoading}
            loadOtherFarmLoading={loadOtherFarmLoading}
            title={title}
        />
    );
};

OtherFarmListContainer.defaultProps = {
    favoritefarmList: null,
    farmList: null,
};

export default OtherFarmListContainer;
