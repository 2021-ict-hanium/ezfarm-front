import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ControlModal from '../components/ControlModal';
import ViewModal from '../components/ViewModal';
import RecentNotification from '../components/RecentNotification';
import UserCurrentDashboard from '../components/UserCurrentDashboard';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';

const Home = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const { showControlModal, showViewModal } = useSelector((state: RootState) => state.modal);

    useEffect(() => {
        if (!me) {
            router.push('/login');
        }
    }, [router, me]);

    return (
        <Layout title="HOME">
            <>
                <RecentNotification />
                <UserCurrentDashboard />
                {showControlModal && <ControlModal />}
                {showViewModal && <ViewModal />}
            </>
        </Layout>
    );
};

export default Home;
