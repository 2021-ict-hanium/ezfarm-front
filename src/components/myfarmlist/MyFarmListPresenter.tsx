import { Table } from '../../src/node_modules/antd';
import { ColumnsType } from '../../src/node_modules/antd/lib/table';
import React from '../../src/node_modules/@types/react';
import { IFarmTable, IMyFarmInfo } from '../../interfaces/data/myFarm';
import { CompleteBtn } from '../common/Btn';
import Loading from '../common/Loading';
import Modal from '../common/Modal';
import ConfirmModal from '../common/ConfirmModal';
import FarmEnrollModalContainer from './farmEnrollModal/FarmEnrollModalContainer';
import FarmModifyModalContainer from './farmModifyModal/FarmModifyModalContainer';
import { Wrapper } from './style';

type Props = {
    onClose: () => void;
    loadAllMyfarmLoading: boolean;
    myFarmList: IMyFarmInfo[];
    openFarmEnroll: () => void;
    isFarmEnrollModalVisible: boolean;
    removeConfirm: boolean;
    farmId: number;
    removeCancel: () => void;
    removeOk: (v: number) => void;
    isFarmModifyModalVisible: boolean;
    farmTableColumns: ColumnsType<IFarmTable>;
    farmTable: IFarmTable[];
};

const MyFarmListPresenter = ({
    onClose,
    loadAllMyfarmLoading,
    myFarmList,
    openFarmEnroll,
    isFarmEnrollModalVisible,
    removeConfirm,
    farmId,
    removeCancel,
    removeOk,
    isFarmModifyModalVisible,
    farmTableColumns,
    farmTable,
}: Props) => (
    <>
        <Modal title="나의 농가 목록" onCancel={onClose}>
            <Wrapper>
                {loadAllMyfarmLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Table<IFarmTable> columns={farmTableColumns} dataSource={farmTable} pagination={false} />
                        <CompleteBtn onClick={openFarmEnroll}>농가등록</CompleteBtn>
                    </>
                )}
            </Wrapper>
        </Modal>
        {isFarmEnrollModalVisible && <FarmEnrollModalContainer />}
        {removeConfirm && (
            <ConfirmModal
                text="정말로 삭제하시겠습니까?"
                onOk={() => {
                    removeOk(farmId as number);
                }}
                onCancel={removeCancel}
            />
        )}
        {isFarmModifyModalVisible && (
            <FarmModifyModalContainer
                farmInfo={myFarmList.find((myFarm: IMyFarmInfo) => myFarm.id === farmId) as IMyFarmInfo}
            />
        )}
    </>
);
export default MyFarmListPresenter;
