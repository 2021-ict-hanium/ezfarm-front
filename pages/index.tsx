import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ControlModal from '../components/home/ControlModal';
import ViewModal from '../components/home/ViewModal';
import RecentNotification from '../components/home/RecentNotification';
import UserCurrentDashboard from '../components/home/UserCurrentDashboard';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';

const Home = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const { isControlModalVisible, isViewModalVisible } = useSelector((state: RootState) => state.modal);

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
                {isControlModalVisible && <ControlModal />}
                {isViewModalVisible && <ViewModal />}
            </>
        </Layout>
    );
};

export default Home;
