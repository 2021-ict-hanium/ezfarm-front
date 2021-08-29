import { Select } from '../../../src/node_modules/antd';
import { SelectValue } from '../../../src/node_modules/antd/lib/select';
import React from '../../../src/node_modules/@types/react';
import { SearchBtn, Wrapper } from './style';

type Props = {
    onChangeFarmGroup: (v: string) => void;
    onChangeFarmType: (v: string) => void;
    onChangeCropType: (v: string) => void;
    onClick: (e: any) => void;
};

const SearchBarPresenter = ({ onChangeFarmGroup, onChangeFarmType, onChangeCropType, onClick }: Props) => (
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
export default SearchBarPresenter;
