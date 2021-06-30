import styled from 'styled-components';
import DashboardItem from './DashboardItem';

const UserCurrentDashboard = () => (
    <Wrapper>
        <Title>
            <div>User Current</div>
            <div>Dashboard</div>
        </Title>
        <div className="container">
            <Dashboard>
                <div>
                    <DashboardItem eng="Temperature" kor="온도" value="35.8" />
                    <DashboardItem eng="Illuminance" kor="조도" value="1800lx" />
                    <DashboardItem eng="Humidity" kor="습도" value="45%" />
                </div>
                <div>
                    <DashboardItem eng="CO2" kor="이산화탄소" value="550ppm" />
                    <DashboardItem eng="pH" kor="급액" value="5.98" />
                    <DashboardItem eng="EC" kor="토양수분" value="2.63%" />
                </div>
            </Dashboard>
            <ButtonTap>
                <div>실시간 제어</div>
                <div>실시간 화면</div>
                <div>농가 선택</div>
            </ButtonTap>
        </div>
    </Wrapper>
);

const Wrapper = styled.div`
    // border: 1px solid gray;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .container {
        flex: 1;
        overflow: auto;
        display: flex;
    }
`;

const Title = styled.div`
    color: white;
    div:first-child {
        font-size: 20px;
        font-weight: 600;
    }
    div:last-child {
        font-size: 30px;
        font-weight: 800;
    }
`;

const Dashboard = styled.div`
    // border: 1px solid gray;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & > div {
        display: flex;
        justify-content: space-evenly;
    }
`;

const ButtonTap = styled.div`
    // border: 1px solid gray;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    div {
        background: white;
        border-radius: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-weight: 600;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        &:active {
            transform: scale(0.95);
        }
    }
`;

export default UserCurrentDashboard;
