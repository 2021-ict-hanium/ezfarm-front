import styled from 'styled-components';
import { Select } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFarmSearch, IfarmSearchCond } from '../../interfaces/data/otherFarm';
import { loadOtherFarmRequest } from '../../actions/otherFarm';
import { RootState } from '../../reducers';

const SearchBar = () => {
    const dispatch = useDispatch();
    const { addFavoriteFarmDone, removeFavoriteFarmDone } = useSelector((state: RootState) => state.otherFarm);
    const [farmGroup, setFarmGroup] = useState('');
    const [farmType, setFarmType] = useState('');
    const [cropType, setCropType] = useState('');
    const onChangeFarmGroup = (value: string) => {
        if (value) {
            setFarmGroup(value);
        } else {
            setFarmGroup('');
        }
    };
    const onChangeFarmType = (value: string) => {
        if (value) {
            setFarmType(value);
        } else {
            setFarmType('');
        }
    };
    const onChangeCropType = (value: string) => {
        if (value) {
            setCropType(value);
        } else {
            setCropType('');
        }
    };

    const onClick = useCallback(() => {
        const farmSearchCond: IfarmSearchCond = {};
        if (farmGroup) {
            farmSearchCond.farmGroup = farmGroup;
        }
        if (farmType) {
            farmSearchCond.farmType = farmType;
        }
        if (cropType) {
            farmSearchCond.cropType = cropType;
        }
        dispatch(loadOtherFarmRequest(farmSearchCond));
    }, [dispatch, farmGroup, farmType, cropType]);

    useEffect(() => {
        if (addFavoriteFarmDone || removeFavoriteFarmDone) {
            onClick();
        }
    }, [addFavoriteFarmDone, removeFavoriteFarmDone]);

    return (
        <Wrapper>
            <Select showSearch style={{ width: 150 }} placeholder="농가 선택" onChange={onChangeFarmGroup} allowClear>
                <Select.Option value="BEST">우수농가</Select.Option>
                <Select.Option value="NORMAL">일반농가</Select.Option>
            </Select>
            <Select showSearch style={{ width: 150 }} placeholder="종류 선택" onChange={onChangeFarmType} allowClear>
                <Select.Option value="VINYL">비닐</Select.Option>
                <Select.Option value="GLASS">유리</Select.Option>
            </Select>
            <Select showSearch style={{ width: 150 }} placeholder="품종 선택" onChange={onChangeCropType} allowClear>
                <Select.Option value="PAPRIKA">파프리카</Select.Option>
                <Select.Option value="STRAWBERRY">딸기</Select.Option>
                <Select.Option value="TOMATO">토마토</Select.Option>
            </Select>
            <SearchBtn onClick={onClick}>검색</SearchBtn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    justify-content: space-evenly;
    width: 900px;
    background-color: white;
    border-radius: 30px;
    padding: 30px 0;
    margin: 30px 0;
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: 30px;
    }
    .ant-select-arrow {
        color: #f16b6f;
    }
`;

const SearchBtn = styled.button`
    width: 78px;
    height: 34px;
    border-radius: 17px;
    background-color: #f16b6f;
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;
`;

export default SearchBar;
