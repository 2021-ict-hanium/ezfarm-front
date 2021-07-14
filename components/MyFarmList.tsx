/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import styled from 'styled-components';
import { Table, Space } from 'antd';
import { useState, useEffect } from 'react';
import { ColumnsType } from 'antd/lib/table';
import { CompleteBtn } from '../styles/styles';
import { MyFarmListData } from '../utils/data';
import { IMyFarmListData } from '../interfaces/data/farm';

const MyFarmList = () => {
    const [data, setData] = useState(MyFarmListData);

    const MyFarmListColumns: ColumnsType<IMyFarmListData> = [
        {
            title: '',
            dataIndex: 'selected',
            key: 'selected',
            align: 'center',
            render: (_, { selected }: IMyFarmListData) => (
                <Space size="middle">{selected && <div className="dot" />}</Space>
            ),
        },
        {
            title: '종류',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
        },
        {
            title: '농가명',
            dataIndex: 'farmName',
            key: 'farmName',
            align: 'center',
        },
        {
            title: '작물종류',
            dataIndex: 'cropType',
            key: 'cropType',
            align: 'center',
        },
        {
            title: '등록일시',
            dataIndex: 'createdAt',
            key: 'createdAt',
            align: 'center',
        },
        {
            title: '',
            key: 'action',
            align: 'center',
            width: 200,
            render: (_, { key, type }: IMyFarmListData) => (
                <Space size="middle">
                    {type && <span className="optionBtn optionBtn--modify">수정</span>}
                    {type && <span className="optionBtn optionBtn--remove">삭제</span>}
                </Space>
            ),
        },
    ];

    useEffect(() => {
        const result = [
            {
                key: 1,
                type: '비닐',
                farmName: 'farmer',
                cropType: '딸기',
                createdAt: '2021.06.17',
                selected: true,
            },
        ];
        setData(result.concat(data.slice(result.length)));
    }, []);

    return (
        <Wrapper>
            <Table columns={MyFarmListColumns} dataSource={data} pagination={false} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <CompleteBtn>농가등록</CompleteBtn>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 1000px;
    background-color: white;
    margin-top: 80px;
    border-radius: 20px;
    padding: 30px 0;
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
`;

export default MyFarmList;
