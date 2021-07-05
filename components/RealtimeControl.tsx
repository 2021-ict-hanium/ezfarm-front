import styled from 'styled-components';
import { Switch } from 'antd';
import { useState, useCallback } from 'react';
import useInput from '../hooks/useInput';

const RealtimeControl = () => {
    const [BOD, setBOD] = useState(false);
    const [temperature, onChangeTemperature] = useInput('');
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

    return (
        <ModalOverlay>
            <Modal>
                <Title>실시간 제어</Title>
                <Container>
                    <div>
                        <span>급수 제어</span>
                        <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={BOD} onChange={onChangeBOD} />
                    </div>
                    <div>
                        <span>온도 제어</span>
                        <input
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
                </Container>
                <Btn>완료</Btn>
            </Modal>
        </ModalOverlay>
    );
};

const Btn = styled.div`
    /* border: 1px solid gray; */
    width: 130px;
    height: 40px;
    border-radius: 25px;
    background-color: #f16b6f;
    text-align: center;
    line-height: 40px;
    color: white;
    font-weight: 600;
`;

const Container = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 30px;
    width: 300px;
    height: 350px;
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

const Title = styled.div`
    /* border: 1px solid gray; */
    font-size: 30px;
    font-weight: 800;
    text-align: center;
`;

const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
    background: white;
    width: 400px;
    height: 580px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default RealtimeControl;
