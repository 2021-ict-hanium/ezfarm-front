import styled from 'styled-components';

type Props = {
    eng: string;
    kor: string;
    value: string;
};

const DashboardItem = ({ eng, kor, value }: Props) => (
    <Wrapper>
        <div className="eng">{eng}</div>
        <div className="kor">{kor}</div>
        <div className="value">{value}</div>
        <Wave type={eng} />
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    border-radius: 20px;
    text-align: center;
    font-weight: 600;
    margin: 20px;
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    .eng {
        font-size: 16px;
    }
    .value {
        font-size: 40px;
    }
`;

const Wave = styled.div<{ type: string }>`
    width: 500px;
    height: 500px;
    position: absolute;
    top: 80%;
    left: -70%;
    border-radius: 43%;
    @keyframes drift {
        100% {
            transform: rotate(-360deg);
        }
    }
    ${(props) => {
        if (props.type === 'Temperature') {
            return `animation: drift 6s infinite linear;
            border: 1px solid #41ec78;
            background: #ecffeb;`;
        }
        if (props.type === 'Illuminance') {
            return `animation: drift 3.5s infinite linear;
            border: 1px solid #ffe639;
            background: #ffffe8;`;
        }
        if (props.type === 'Humidity') {
            return `animation: drift 5s infinite linear;
            border: 1px solid #6ce9ff;
            background: #e6faff;`;
        }
        if (props.type === 'CO2') {
            return `animation: drift 3s infinite linear;
            border: 1px solid #7777fd;
            background: #e9ecfe;`;
        }
        if (props.type === 'pH') {
            return `animation: drift 7s infinite linear;
            border: 1px solid #f99696;
            background: #fff1f1;`;
        }
        if (props.type === 'EC') {
            return `animation: drift 4s infinite linear;
            border: 1px solid #ffa3e0;
            background: #fff0fa;`;
        }
    }}
`;

export default DashboardItem;
