import { Switch } from 'antd';
import { SwitchChangeEventHandler } from 'antd/lib/switch';
import React, { FormEvent } from 'react';
import { CompleteBtn } from '../../../common/Btn';
import ErrorMessage from '../../../common/ErrorMessage';
import { Form, InputWrapper } from './style';

type Props = {
    water: boolean;
    onChangeWater: SwitchChangeEventHandler;
    temperature: string;
    onChangeTemperature: (v: React.ChangeEvent<HTMLInputElement>) => void;
    illuminance: boolean;
    onChangeIlluminance: SwitchChangeEventHandler;
    co2: boolean;
    onChangeCo2: SwitchChangeEventHandler;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const ControlFormPresenter = ({
    water,
    onChangeWater,
    temperature,
    onChangeTemperature,
    illuminance,
    onChangeIlluminance,
    co2,
    onChangeCo2,
    onSubmit,
}: Props) => (
    <Form onSubmit={onSubmit}>
        <InputWrapper>
            <span>급수 제어</span>
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={water} onChange={onChangeWater} />
        </InputWrapper>
        <InputWrapper>
            <span>온도 제어</span>
            <input
                type="number"
                min="24"
                max="35"
                step="0.1"
                value={temperature}
                onChange={onChangeTemperature}
                placeholder="ex, 28"
            />
        </InputWrapper>
        <InputWrapper>
            <span>조도 제어</span>
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={illuminance} onChange={onChangeIlluminance} />
        </InputWrapper>
        <InputWrapper>
            <span>CO2 제어</span>
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={co2} onChange={onChangeCo2} />
        </InputWrapper>
        <CompleteBtn type="submit">완료</CompleteBtn>
    </Form>
);

export default ControlFormPresenter;
