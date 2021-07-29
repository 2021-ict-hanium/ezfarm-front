/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import styled from 'styled-components';
import { Table, Space } from 'antd';
import React, { useState, useEffect, useCallback } from 'react';
import { ColumnsType } from 'antd/lib/table';
import { useDispatch, useSelector } from 'react-redux';
import { CompleteBtn, StyledModal, StyledModalCloseBtn } from '../../styles/styles';
import { IMyFarmList, MyFarmInfo } from '../../interfaces/data/farm';
import { RootState } from '../../reducers';
import { farmEnrollModalOpen, farmListClose, farmModifyModalOpen } from '../../actions/modal';
import FarmEnrollModal from './FarmEnrollModal';
import { changeMyfarm, loadAllMyfarmRequest, removeMyfarmClear, removeMyfarmRequest } from '../../actions/farm';
import ConfirmModal from '../ConfirmModal';
import { getToken } from '../../sagas';
import Loading from '../Loading';
import { Koreanization } from '../../utils/data';
import FarmModifyModal from './FarmModifyModal';

const MyFarmList = () => {
    const dispatch = useDispatch();

    const { myFarm, myFarmList, loadAllMyfarmLoading, loadAllMyfarmDone, removeMyfarmDone } = useSelector(
        (state: RootState) => state.farm,
    );
    const { isFarmEnrollModalVisible, isFarmModifyModalVisible } = useSelector((state: RootState) => state.modal);

    const [farmList, setFarmList] = useState<Array<IMyFarmList> | null>(null);
    const [farmId, setFarmId] = useState<number | null>(null);
    const [removeConfirm, setRemoveConfirm] = useState(false);

    const onClose = useCallback(() => {
        dispatch(farmListClose());
    }, [dispatch]);

    const handleRemove = useCallback((id: number) => {
        setFarmId(id);
        setRemoveConfirm(true);
    }, []);

    const handleModify = useCallback((id: number) => {
        setFarmId(id);
        dispatch(farmModifyModalOpen());
    }, []);

    const removeOk = useCallback((id: number) => {
        dispatch(removeMyfarmRequest(id));
        setRemoveConfirm(false);
    }, []);

    const removeCancel = useCallback(() => {
        setRemoveConfirm(false);
    }, []);

    useEffect(() => {
        if (removeMyfarmDone) {
            dispatch(loadAllMyfarmRequest(getToken()));
            dispatch(removeMyfarmClear());
        }
    }, [dispatch, removeMyfarmDone]);

    const Columns: ColumnsType<IMyFarmList> = [
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
                    {name && Number(key) !== myFarm.id && (
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
            const result: Array<IMyFarmList> = myFarmList.map(
                ({ id, main, farmType, name, cropType, startDate, address, phoneNumber }: MyFarmInfo) => ({
                    key: String(id),
                    main,
                    farmType: Koreanization(farmType),
                    name,
                    cropType: Koreanization(cropType),
                    startDate,
                    address,
                    phoneNumber,
                }),
            );
            setFarmList(result);
        }
    }, [loadAllMyfarmDone]);

    return (
        <>
            <Wrapper>
                <StyledModalCloseBtn onClick={onClose}>&times;</StyledModalCloseBtn>
                <header>나의 농가 목록</header>
                <Container>
                    {loadAllMyfarmLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <Table<IMyFarmList>
                                columns={Columns}
                                dataSource={farmList as IMyFarmList[]}
                                pagination={false}
                            />
                            <CompleteBtn onClick={openFarmEnroll}>농가등록</CompleteBtn>
                        </>
                    )}
                </Container>
            </Wrapper>
            {isFarmEnrollModalVisible && <FarmEnrollModal />}
            {removeConfirm && (
                <ConfirmModal
                    text="정말로 삭제하시겠습니까?"
                    onOk={() => {
                        removeOk(farmId as number);
                    }}
                    onCancel={removeCancel}
                />
            )}
            {isFarmModifyModalVisible && <FarmModifyModal farmId={farmId as number} />}
        </>
    );
};

const Wrapper = styled(StyledModal)`
    margin-top: 80px;
    box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
`;

const Container = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-table-row:nth-child(odd) {
        background-color: #eeeeee;
    }
    th.ant-table-cell {
        background-color: white;
        font-size: 20px;
        font-weight: 600;
    }
    td.ant-table-cell {
        font-size: 15px;
        font-weight: 600;
    }
    .optionBtn {
        padding: 5px 15px;
        border-radius: 20px;
        cursor: pointer;
    }
    .optionBtn--modify {
        background-color: #d2d2d2;
    }
    .optionBtn--remove {
        background-color: #f16b6f;
        color: white;
    }
    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f16b6f;
    }
    & > button {
        margin-top: 30px;
    }
`;

export default MyFarmList;
