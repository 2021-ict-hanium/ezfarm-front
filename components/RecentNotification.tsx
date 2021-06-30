import styled from 'styled-components';

const RecentNotification = () => {
    const notifications = [
        {
            id: 0,
            msg: '토마토 농가의 조도를 1 낮추었습니다.',
        },
        {
            id: 1,
            msg: '17시 46분 온도가 적정 온도를 초과하였습니다.',
        },
    ];

    return (
        <Wrapper>
            <h3>Recent notifications</h3>
            {notifications.map((ele) => (
                <div key={ele.id}>🔔 {ele.msg}</div>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    // height: 100px;
    background: white;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 50px;
    &: after {
        content: '';
        position: absolute;
        bottom: -20px;
        right: 30px;
        border: 30px solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-right: 0;
        border-radius: 0 30px 0;
        transform: rotate(90deg);
    }
`;
export default RecentNotification;
