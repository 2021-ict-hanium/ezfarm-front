import React from 'react';
import { Wrapper } from './style';

type Props = {
    notifications: any;
};

const RecentNotificationPresenter = ({ notifications }: Props) => (
    <Wrapper>
        <div className="title">Recent notifications</div>
        {notifications.map((ele) => (
            <div key={ele.id} className="content">
                🔔 {ele.msg}
            </div>
        ))}
    </Wrapper>
);

export default RecentNotificationPresenter;
