import { useState } from 'react';
import RealtimeControl from '../components/RealtimeControl';
import RealtimeView from '../components/RealtimeView';
import RecentNotification from '../components/RecentNotification';
import UserCurrentDashboard from '../components/UserCurrentDashboard';
import Layout from '../layout/Layout';

const Home = () => {
    const [showControlModal, setShowControlModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);

    const onClickControlModal = () => {
        setShowControlModal((prev) => !prev);
    };

    const onClickViewModal = () => {
        setShowViewModal((prev) => !prev);
    };

    return (
        <Layout title="HOME">
            <>
                <RecentNotification />
                <UserCurrentDashboard onOpenControlModal={onClickControlModal} onOpenViewModal={onClickViewModal} />
                {showControlModal && <RealtimeControl onClose={onClickControlModal} />}
                {showViewModal && <RealtimeView onClose={onClickViewModal} />}
            </>
        </Layout>
    );
};

export default Home;
