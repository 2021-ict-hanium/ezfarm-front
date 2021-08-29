/* eslint-disable react/display-name */
import { ColumnsType } from '../../../src/node_modules/antd/lib/table';
import { useDispatch, useSelector } from '../../../src/node_modules/react-redux';
import { addFavoriteFarmRequest, removeFavoriteFarmRequest } from '../../../actions/otherFarm';
import { IFavoriteFarmList, IOtherFarmList, IFarmList } from '../../../interfaces/data/otherFarm';
import { RootState } from '../../../src/reducers';
import OtherFarmListPresenter from './OtherFarmListPresenter';

type Props = {
    title: string;
    favoritefarmList?: IFavoriteFarmList[];
    farmList?: IOtherFarmList[];
};

const OtherFarmListContainer = ({ title, favoritefarmList, farmList }: Props) => {
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
    ];
    return (
        <OtherFarmListPresenter
            favoritefarmList={favoritefarmList as IFavoriteFarmList[]}
            farmList={farmList as IOtherFarmList[]}
            farmTableColumns={farmTableColumns}
            loadFavoriteFarmLoading={loadFavoriteFarmLoading}
            loadOtherFarmLoading={loadOtherFarmLoading}
        />
    );
};

OtherFarmListContainer.defaultProps = {
    favoritefarmList: null,
    farmList: null,
};

export default OtherFarmListContainer;
