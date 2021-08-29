/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import { Space } from '../../src/node_modules/antd';
import { ColumnsType } from '../../src/node_modules/antd/lib/table';
import React, { useState, useCallback, useEffect } from '../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../src/node_modules/react-redux';
import { farmListClose, farmModifyModalOpen, farmEnrollModalOpen } from '../../actions/modal';
import { removeMyfarmRequest, loadAllMyfarmRequest, removeMyfarmClear, changeMyfarm } from '../../actions/myFarm';
import { IFarmTable, IMyFarmInfo } from '../../interfaces/data/myFarm';
import { RootState } from '../../src/reducers';
import { getToken } from '../../src/sagas';
import { koreanization } from '../../src/utils/utils';
import MyFarmListPresenter from './MyFarmListPresenter';

const MyFarmListContainer = () => {
    const dispatch = useDispatch();

    const { myFarm, myFarmList, loadAllMyfarmLoading, loadAllMyfarmDone, removeMyfarmDone } = useSelector(
        (state: RootState) => state.myFarm,
    );
    const { isFarmEnrollModalVisible, isFarmModifyModalVisible } = useSelector((state: RootState) => state.modal);

    const [farmId, setFarmId] = useState<number | null>(null);
    const [farmTable, setFarmTable] = useState<IFarmTable[] | null>(null);
    const [removeConfirm, setRemoveConfirm] = useState(false);

    const onClose = useCallback(() => {
        dispatch(farmListClose());
    }, [dispatch]);

    const handleRemove = useCallback((id: number) => {
        setFarmId(id);
        setRemoveConfirm(true);
    }, []);

    const handleModify = useCallback(
        (id: number) => {
            setFarmId(id);
            dispatch(farmModifyModalOpen());
        },
        [dispatch],
    );

    const removeOk = useCallback(
        (id: number) => {
            dispatch(removeMyfarmRequest(id));
            setRemoveConfirm(false);
        },
        [dispatch],
    );

    const removeCancel = useCallback(() => {
        setRemoveConfirm(false);
    }, []);

    useEffect(() => {
        if (removeMyfarmDone) {
            dispatch(loadAllMyfarmRequest(getToken()));
            dispatch(removeMyfarmClear());
        }
    }, [dispatch, removeMyfarmDone]);

    const farmTableColumns: ColumnsType<IFarmTable> = [
        {
            title: '',
            dataIndex: 'main',
            key: 'main',
            align: 'center',
            render: (_, { main }) => <Space size="middle">{main && <div className="dot" />}</Space>,
        },
        {
            title: '종류',
            dataIndex: 'farmType',
            key: 'farmType',
            align: 'center',
        },
        {
            title: '농가명',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: '작물종류',
            dataIndex: 'cropType',
            key: 'cropType',
            align: 'center',
        },

        {
            title: '전화번호',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            align: 'center',
        },
        {
            title: '주소',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
            width: 200,
        },
        {
            title: '등록일시',
            dataIndex: 'startDate',
            key: 'startDate',
            align: 'center',
        },
        {
            title: '',
            key: 'action',
            align: 'left',
            render: (_, { key, name }) => (
                <Space size="middle">
                    {name && (
                        <span
                            onClick={() => {
                                handleModify(Number(key));
                            }}
                            className="optionBtn optionBtn--modify"
                        >
                            수정
                        </span>
                    )}
                    {name && (
                        <span
                            onClick={() => {
                                handleRemove(Number(key));
                            }}
                            className="optionBtn optionBtn--remove"
                        >
                            삭제
                        </span>
                    )}
                    {name && Number(key) !== myFarm?.id && (
                        <span
                            onClick={() => {
                                dispatch(changeMyfarm(Number(key)));
                                dispatch(farmListClose());
                            }}
                            className="optionBtn"
                        >
                            조회
                        </span>
                    )}
                </Space>
            ),
        },
    ];

    const openFarmEnroll = useCallback(() => {
        dispatch(farmEnrollModalOpen());
    }, [dispatch]);

    useEffect(() => {
        if (loadAllMyfarmDone) {
            const newFarmTable: IFarmTable[] = myFarmList.map(
                ({ id, main, farmType, name, cropType, startDate, address, phoneNumber }: IMyFarmInfo) => ({
                    key: String(id),
                    main,
                    farmType: koreanization(farmType),
                    name,
                    cropType: koreanization(cropType),
                    startDate,
                    address,
                    phoneNumber,
                }),
            );
            setFarmTable(newFarmTable);
        }
    }, [loadAllMyfarmDone, myFarmList]);

    return (
        <MyFarmListPresenter
            onClose={onClose}
            loadAllMyfarmLoading={loadAllMyfarmLoading}
            myFarmList={myFarmList}
            openFarmEnroll={openFarmEnroll}
            isFarmEnrollModalVisible={isFarmEnrollModalVisible}
            removeConfirm={removeConfirm}
            farmId={farmId as number}
            removeCancel={removeCancel}
            removeOk={removeOk}
            isFarmModifyModalVisible={isFarmModifyModalVisible}
            farmTableColumns={farmTableColumns}
            farmTable={farmTable as IFarmTable[]}
        />
    );
};
export default MyFarmListContainer;
