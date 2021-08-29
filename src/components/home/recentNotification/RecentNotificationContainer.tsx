import React from 'react';
import RecentNotificationPresenter from './RecentNotificationPresenter';

const RecentNotificationContainer = () => {
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
    return <RecentNotificationPresenter notifications={notifications} />;
};
export default RecentNotificationContainer;
