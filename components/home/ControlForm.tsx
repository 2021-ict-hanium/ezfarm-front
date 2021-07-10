import styled from 'styled-components';
import { Switch } from 'antd';
import { FormEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { CompleteBtn, InputWrapper } from '../../styles/styles';
import useSwitch from '../../hooks/useSwitch';
import { RootState } from '../../reducers';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import { controlRequest } from '../../actions/farm';

const ControlForm = () => {
    const dispatch = useDispatch();

    const { controlLoading, controlError } = useSelector((state: RootState) => state.farm);

    const [BOD, setBOD] = useSwitch(false);
    const [temperature, onChangeTemperature] = useInput('');
    const [illuminance, setIlluminance] = useSwitch(false);
    const [CO2, setCO2] = useSwitch(false);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(controlRequest(BOD, temperature, illuminance, CO2));
        },
        [dispatch, BOD, temperature, illuminance, CO2],
    );

    return (
        <>
            <Form onSubmit={onSubmit}>
                <InputWrapper>
                    <span>급수 제어</span>
                    <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={BOD} onChange={setBOD} />
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
                    <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={CO2} onChange={setCO2} />
                </InputWrapper>
                <CompleteBtn type="submit">완료</CompleteBtn>
                {controlError && <ErrorMessage message="제어에 실패하였습니다." />}
            </Form>
            {controlLoading && <Loading />}
        </>
    );
};

const Form = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    padding: 0 20px;
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
