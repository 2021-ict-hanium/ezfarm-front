import styled from 'styled-components';
import { Switch } from 'antd';
import { FormEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { CompleteBtn, Inputwrapper } from '../../styles/styles';
import useSwitch from '../../hooks/useSwitch';
import { RootState } from '../../reducers';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import { modifyControllerRequest } from '../../actions/myFarm';

const ControlForm = () => {
    const dispatch = useDispatch();

    const { myFarmId, controlLoading, controlError } = useSelector((state: RootState) => state.farm);

    const [water, setWater] = useSwitch(false);
    const [temperature, onChangeTemperature] = useInput('');
    const [illuminance, setIlluminance] = useSwitch(false);
    const [co2, setCo2] = useSwitch(false);

    const onoffValue = (value: boolean) => {
        if (value) {
            return 'ON';
        }
        return 'OFF';
    };

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const data = {
                remoteId: myFarmId,
                water: onoffValue(water),
                temperature: Number(temperature),
                illuminance: onoffValue(illuminance),
                co2: onoffValue(co2),
            };
            dispatch(modifyControllerRequest(data));
        },
        [dispatch, myFarmId, water, temperature, illuminance, co2],
    );

    return (
        <>
            <Form onSubmit={onSubmit}>
                <InputWrapper>
                    <span>급수 제어</span>
                    <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={water} onChange={setWater} />
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
                    <Switch
                        checkedChildren="ON"
                        unCheckedChildren="OFF"
                        checked={illuminance}
                        onChange={setIlluminance}
                    />
                </InputWrapper>
                <InputWrapper>
                    <span>CO2 제어</span>
                    <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={co2} onChange={setCo2} />
                </InputWrapper>
                <CompleteBtn type="submit">완료</CompleteBtn>
                {controlError && <ErrorMessage message="제어에 실패하였습니다." />}
            </Form>
            {controlLoading && <Loading />}
        </>
    );
};

const InputWrapper = styled(Inputwrapper)`
    justify-content: space-between;
`;

const Form = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    width: 300px;
    span:first-child {
        font-size: 15px;
        font-weight: 600;
        margin-right: 50px;
    }
    .ant-switch-checked {
        background-color: #b6da72;
    }
    input {
        width: 100px;
        border: none;
        border-bottom: 1px solid #b6da72;
        border-radius: 0;
    }
`;

export default ControlForm;
