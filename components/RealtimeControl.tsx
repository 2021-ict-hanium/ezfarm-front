import styled from 'styled-components';
import { Switch } from 'antd';
import { useState, useCallback, FormEvent } from 'react';
import useInput from '../hooks/useInput';
import { ModalOverlay, CloseBtn, ModalTitle } from '../styles/styles';

type Props = {
    onClose: () => void;
};

const RealtimeControl = ({ onClose }: Props) => {
    const [BOD, setBOD] = useState(false);
    const [temperature, onChangeTemperature] = useInput('30');
    const [illuminance, setIlluminance] = useState(false);
    const [CO2, setCO2] = useState(false);

    const onChangeBOD = useCallback((checked: boolean) => {
        setBOD(checked);
    }, []);

    const onChangeIlluminance = useCallback((checked: boolean) => {
        setIlluminance(checked);
    }, []);

    const onChangeCO2 = useCallback((checked: boolean) => {
        setCO2(checked);
    }, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('BOD : ', BOD);
        console.log('temperature : ', temperature);
        console.log('illuminance : ', illuminance);
        console.log('CO2 : ', CO2);
        onClose();
    };

    return (
        <ModalOverlay>
            <ControlModal>
                <CloseBtn onClick={onClose}>x</CloseBtn>
                <ModalTitle>실시간 제어</ModalTitle>
                <ControlForm onSubmit={onSubmit}>
                    <div>
                        <span>급수 제어</span>
                        <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={BOD} onChange={onChangeBOD} />
                    </div>
                    <div>
                        <span>온도 제어</span>
                        <input
                            type="number"
                            min="24"
                            max="35"
                            step="0.1"
                            value={temperature}
                            onChange={onChangeTemperature}
                            placeholder="설정할 온도를 입력해주세요."
                        />
                    </div>
                    <div>
                        <span>조도 제어</span>
                        <Switch
                            checkedChildren="ON"
                            unCheckedChildren="OFF"
                            checked={illuminance}
                            onChange={onChangeIlluminance}
                        />
                    </div>
                    <div>
                        <span>CO2 제어</span>
                        <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={CO2} onChange={onChangeCO2} />
                    </div>
                    <Btn type="submit">완료</Btn>
                </ControlForm>
            </ControlModal>
        </ModalOverlay>
    );
};

const Btn = styled.button`
    /* border: 1px solid gray; */
    width: 130px;
    height: 40px;
    border-radius: 25px;
    background-color: #f16b6f;
    text-align: center;
    line-height: 40px;
    color: white;
    font-weight: 600;
    margin: 30px auto 0 auto;
    border: none;
    cursor: pointer;
`;

const ControlForm = styled.form`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 20px;
    width: 300px;
    height: 450px;
    & > div {
        span:first-child {
            font-size: 15px;
            font-weight: 600;
            margin-right: 50px;
        }
        input {
            width: 140px;
            border: none;
            border-bottom: 1px solid #b6da72;
            &:focus {
                outline: none;
            }
            &::placeholder {
                font-size: 11px;
            }
        }
        .ant-switch-checked {
            background-color: #b6da72;
        }
    }
`;

const ControlModal = styled.div`
    background: white;
    border-radius: 30px;
    padding: 10px 30px;
    width: 400px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default RealtimeControl;
